import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';

export default function Cobe() {
  let phi = 0;

  const canvasRef = useRef(null);

  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const genrateRandomMarkers = () => {
    const markers = [];

    for (let i = 0; i < 10000; i++) {
      markers.push({
        location: [Math.random() * 180 - 90, Math.random() * 360 - 180],
        size: Math.random() * 0.1,
      });
    }

    return markers;
  };

  const randomMarkers = genrateRandomMarkers();

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    };

    window.addEventListener(`resize`, onResize);

    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2 * 0,
      phi: 0,
      theta: 0.1,
      dark: 0,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [1, 1, 1],
      markerColor: [205 / 255, 50 / 255, 159 / 255],
      glowColor: [1.0, 1.0, 1.0],

      markers: randomMarkers,

      scale: width > 800 ? 2.0 : 1.2,
      offset: [0, width * 2 * 0.2 * 0.3],

      onRender: (state) => {
        state.width = width * 2;
        state.height = width * 2 * 0.4;

        state.phi = r.get() * 0.5 + phi;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        phi += 0.001;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = `1`));

    return () => globe.destroy();
  }, []);

  return (
    <div
      className="mx-auto max-w-screen-lg"
      style={{
        width: `100%`,
        aspectRatio: `${1 / 0.5}`,
        margin: `auto`,
        position: `relative`,
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;

          canvasRef.current.style.cursor = `grabbing`;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;

          canvasRef.current.style.cursor = `grab`;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;

          canvasRef.current.style.cursor = `grab`;
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;

            pointerInteractionMovement.current = delta;

            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;

            pointerInteractionMovement.current = delta;

            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: `100%`,
          height: `100%`,
          cursor: `grab`,
          contain: `layout paint size`,
          opacity: 0,
          transition: `opacity 1s ease`,
        }}
      />
    </div>
  );
}
