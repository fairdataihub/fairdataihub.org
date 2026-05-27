'use client';

import clsx from 'clsx';
import createGlobe from 'cobe';
import { useEffect, useRef, useState } from 'react';
import { useSpring } from 'react-spring';

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r / 255, g / 255, b / 255];
}

export default function Globe({
  className,
  scale = 1,
  dark = false,
  baseColor = '#FFFFFF',
  glowColor = '#FFFFFF',
  markerColor = '#00FFFF',
  offsetX = 0,
  offsetY = 0,
  speed = 0.0025,
  opacity = 1,
  brightness = 1,
  markers = [
    { location: [40.7128, -74.006], size: 0.05 },
    { location: [34.052235, -118.243683], size: 0.05 },
    { location: [59.9375, 30.308611], size: 0.05 },
    { location: [37.773972, -122.431297], size: 0.05 },
    { location: [51.509865, -0.118092], size: 0.05 },
  ],
}) {
  let phi = 0;
  let width = 0;

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

  const [isGrabbing, setIsGrabbing] = useState(false);

  function onPointerDown(e) {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    setIsGrabbing(true);
  }

  function onPointerUp() {
    pointerInteracting.current = null;
    setIsGrabbing(false);
  }

  function onPointerOut() {
    pointerInteracting.current = null;
    setIsGrabbing(false);
  }

  function onMouseMove(e) {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;

      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  }

  function onTouchMove(e) {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;

      pointerInteractionMovement.current = delta;
      api.r = delta / 100;
    }
  }

  const setWidth = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    let globe = null;
    let frameId = null;

    const initGlobe = () => {
      if (!canvasRef.current) {
        frameId = requestAnimationFrame(initGlobe);
        return;
      }

      setWidth();

      // Wait for the canvas to have actual dimensions before initializing
      if (width <= 0) {
        frameId = requestAnimationFrame(initGlobe);
        return;
      }

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        scale: scale,
        mapBrightness: brightness,
        dark: dark,
        baseColor: hexToRgb(baseColor),
        markerColor: hexToRgb(markerColor),
        glowColor: hexToRgb(glowColor),
        opacity: opacity,
        offset: [offsetX, offsetY],
        markers: markers,
        phi: 0,
        theta: 0.3,
        diffuse: 0.4,
        mapSamples: 16000,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += speed;
          }

          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });
    };

    window.addEventListener('resize', setWidth);
    frameId = requestAnimationFrame(initGlobe);

    return () => {
      window.removeEventListener('resize', setWidth);
      if (frameId) cancelAnimationFrame(frameId);
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <div className={clsx('absolute inset-0 aspect-square', className)}>
      <canvas
        className={clsx(
          'h-full w-full',
          isGrabbing ? 'cursor-grabbing' : 'cursor-grab',
        )}
        ref={canvasRef}
        onPointerDown={(event) => onPointerDown(event)}
        onPointerUp={(event) => onPointerUp(event)}
        onPointerOut={(event) => onPointerOut(event)}
        onMouseMove={(event) => onMouseMove(event)}
        onTouchMove={(event) => onTouchMove(event)}
      />
    </div>
  );
}
