import { Snowflake } from 'lucide-react';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'snowfall-enabled';
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

// Snow season, in the visitor's local time: Nov 27, 2026 through Jan 1, 2027.
const SEASON_START = new Date(2026, 10, 27);
const SEASON_END = new Date(2027, 0, 2);

function isSnowSeason() {
  const now = new Date();
  return now >= SEASON_START && now < SEASON_END;
}

// Tiny shared store so the footer toggle and the canvas stay in sync.
const listeners = new Set<() => void>();
let enabledCache: boolean | null = null;

/** null outside snow season (hides both the snow and the toggle). */
function getEnabled(): boolean | null {
  if (!isSnowSeason()) return null;
  if (enabledCache === null) {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Storage blocked; fall back to the default.
    }
    // Default: on, unless the visitor prefers reduced motion.
    enabledCache =
      stored === null
        ? !window.matchMedia(REDUCED_MOTION).matches
        : stored === 'true';
  }
  return enabledCache;
}

function setEnabled(next: boolean) {
  enabledCache = next;
  try {
    localStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    // Storage blocked; the choice lasts until the page reloads.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * null during SSR/hydration and outside snow season; otherwise the visitor's
 * saved or default choice.
 */
function useSnowEnabled() {
  return useSyncExternalStore(subscribe, getEnabled, () => null);
}

export function SnowToggle() {
  const enabled = useSnowEnabled();
  if (enabled === null) return null;

  const label = enabled ? 'Turn off snow' : 'Turn on snow';
  return (
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      aria-pressed={enabled}
      aria-label={label}
      title={label}
      className="group focus-visible:ring-pink flex cursor-pointer items-center gap-1.5 rounded-full border p-1 text-sm text-gray-500 transition outline-none hover:text-pink-600 focus-visible:ring-2"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <Snowflake
          className={`h-4 w-4 ${enabled ? 'text-sky-500' : 'text-gray-400'} transition group-hover:text-pink-600`}
          aria-hidden="true"
        />
        {!enabled && (
          <span
            aria-hidden="true"
            className="absolute h-px w-5 rotate-45 bg-current"
          />
        )}
      </span>
    </button>
  );
}

interface Flake {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
  rotation: number;
  spin: number;
  crystal: boolean;
  depth: number; // share of page scroll applied to the flake (parallax)
}

// Parallax range: small/far flakes follow scroll a little, large/near ones more.
const MIN_DEPTH = 0.15;
const MAX_DEPTH = 0.5;

// Scroll "gust": scrolling briefly speeds up the fall, then eases back.
const GUST_PER_PX = 0.01; // extra speed multiplier added per pixel scrolled
const MAX_GUST = 0.6; // fall speed tops out at 1.6x
const GUST_DECAY = 3; // per second; higher settles faster

// Share of flakes drawn as crystals; the rest are soft dots.
const CRYSTAL_RATIO = 0.4;

// Six-armed crystal: each arm has a pair of small V-shaped branches.
function drawFlake(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -r);
    ctx.moveTo(0, -r * 0.55);
    ctx.lineTo(r * 0.28, -r * 0.8);
    ctx.moveTo(0, -r * 0.55);
    ctx.lineTo(-r * 0.28, -r * 0.8);
    ctx.rotate(Math.PI / 3);
  }
  ctx.stroke();
}

// Roughly one flake per this many square pixels, capped so large screens stay light.
const AREA_PER_FLAKE = 18000;
const MAX_FLAKES = 120;

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const enabled = useSnowEnabled();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION);
    setReducedMotion(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Reduced motion (if opted in): fewer, slower flakes, no spin, no scroll effects.
    const calm = reducedMotion;
    const motionScale = calm ? 0.4 : 1;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let flakes: Flake[] = [];
    let frame = 0;
    let last = performance.now();
    let lastScrollY = window.scrollY;
    let scrollDelta = 0;
    let gust = 0;

    const onScroll = () => {
      if (calm) return;
      scrollDelta += window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
    };

    const makeFlake = (startAnywhere: boolean): Flake => {
      const crystal = Math.random() < CRYSTAL_RATIO;
      const size = Math.random(); // 0 = smallest, 1 = largest within its type
      return {
        crystal,
        depth: MIN_DEPTH + size * (MAX_DEPTH - MIN_DEPTH),
        x: Math.random() * width,
        y: startAnywhere ? Math.random() * height : -10,
        // Crystals: arm length. Dots: radius.
        r: crystal ? 3.5 + size * 4 : 1.8 + size * 2.2,
        speed: 20 + Math.random() * 40, // px per second
        drift: 10 + Math.random() * 20,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.1 + Math.random() * 0.4,
        rotation: Math.random() * Math.PI,
        spin: calm ? 0 : (Math.random() - 0.5) * 0.8, // radians per second
      };
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(
        Math.min(MAX_FLAKES, (width * height) / AREA_PER_FLAKE) *
          (calm ? 0.5 : 1),
      );
      while (flakes.length < target) flakes.push(makeFlake(true));
      flakes = flakes.slice(0, target);
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, width, height);
      // Cool slate grey so flakes read on white backgrounds.
      ctx.strokeStyle = 'rgb(148, 163, 184)';
      ctx.fillStyle = 'rgb(203, 213, 225)';
      ctx.lineWidth = 1.1;
      ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(100, 116, 139, 0.4)';
      ctx.shadowBlur = 2;

      // Scrolling down moves content up, so flakes drift up with it.
      const scrolled = scrollDelta;
      scrollDelta = 0;

      gust = Math.min(MAX_GUST, gust + Math.abs(scrolled) * GUST_PER_PX);
      gust *= Math.exp(-GUST_DECAY * dt);
      const speedFactor = (1 + gust) * motionScale;

      for (const f of flakes) {
        f.y += f.speed * speedFactor * dt - scrolled * f.depth;
        f.phase += dt * speedFactor;
        f.rotation += f.spin * speedFactor * dt;
        const x = f.x + Math.sin(f.phase) * f.drift;

        // Wrap at both edges so scrolling either way never empties the screen.
        if (f.y - f.r > height) {
          Object.assign(f, makeFlake(false));
        } else if (f.y + f.r < -10) {
          f.y = height + f.r;
          f.x = Math.random() * width;
        }

        ctx.globalAlpha = f.opacity;
        if (f.crystal) {
          ctx.save();
          ctx.translate(x, f.y);
          ctx.rotate(f.rotation);
          drawFlake(ctx, f.r);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(x, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      frame = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    resize();
    frame = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [enabled, reducedMotion]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
}
