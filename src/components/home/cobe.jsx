import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';

export default function Cobe() {
  let phi = 0;

  const canvasRef = useRef(null);

  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

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
      theta: 0.3,
      dark: 0,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.5,
      baseColor: [1, 1, 1],
      markerColor: [205 / 255, 50 / 255, 159 / 255],
      glowColor: [1.0, 1.0, 1.0],

      markers: [
        { location: [37.76287113425228, -122.45710387756455], size: 0.1 },
        { location: [32.90624745109368, -117.23087138885114], size: 0.1 },
        { location: [51.52433224067322, -0.13393281164228948], size: 0.1 },
        { location: [44.97397482024652, -93.22858680686167], size: 0.1 },
        { location: [40.022892556266406, -75.19345382382448], size: 0.1 },
        { location: [40.423315229673406, -86.92065745957946], size: 0.1 },
        { location: [47.37543582743389, 8.530733699460093], size: 0.1 },
        { location: [37.428469826175125, -122.17294210084522], size: 0.1 },
      ],

      scale: 2.9,
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
