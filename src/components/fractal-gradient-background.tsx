"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function FractalGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [blobPositions, setBlobPositions] = useState(() =>
    Array.from({ length: 5 }, () => ({
      x: Math.random(),
      y: Math.random(),
      scale: 0.6 + Math.random() * 0.8,
      speed: 0.2 + Math.random() * 0.3,
    }))
  );

  const updateMouse = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [updateMouse]);

  // Slow morphing animation for blob positions
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame += 0.005;
      setBlobPositions((prev) =>
        prev.map((blob, i) => ({
          ...blob,
          x:
            0.3 +
            0.4 * Math.sin(frame * blob.speed + i * 1.2) +
            0.1 * Math.sin(frame * 0.7 + i),
          y:
            0.3 +
            0.4 * Math.cos(frame * blob.speed * 0.9 + i * 0.8) +
            0.1 * Math.cos(frame * 0.5 + i * 1.5),
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Layered gradient blobs — saturated green, light and airy, no dark areas */}
      <div className="absolute inset-0 opacity-[0.98]">
        {blobPositions.map((blob, i) => {
          const mx = mouse.x * 0.15;
          const my = mouse.y * 0.15;
          const cx = (blob.x * 100 + mx * 20).toFixed(2);
          const cy = (blob.y * 100 + my * 20).toFixed(2);
          const colors =
            i % 3 === 0
              ? "rgba(200, 255, 190, 0.92)"
              : i % 3 === 1
                ? "rgba(120, 220, 150, 0.82)"
                : "rgba(160, 240, 180, 0.85)";
          return (
            <div
              key={i}
              className="absolute rounded-full blur-3xl transition-opacity duration-700"
              style={{
                left: `${Number(cx) - 20}%`,
                top: `${Number(cy) - 20}%`,
                width: `${40 * blob.scale}%`,
                height: `${40 * blob.scale}%`,
                background: `radial-gradient(circle, ${colors} 0%, transparent 70%)`,
                opacity: 0.7 + (i % 3) * 0.12,
              }}
            />
          );
        })}
      </div>

      {/* Accent glow that follows cursor — more pronounced, vibrant green, feathered edges */}
      <div
        className="absolute size-[min(92vw,520px)] rounded-full opacity-60 blur-[56px] transition-all duration-300 ease-out"
        style={{
          left: `calc(${mouse.x * 100}% - min(46vw, 260px))`,
          top: `calc(${mouse.y * 100}% - min(46vw, 260px))`,
          background: "radial-gradient(circle, rgba(130, 255, 150, 0.72) 0%, rgba(160, 255, 170, 0.35) 45%, transparent 70%)",
        }}
      />

      {/* Grain overlay — matches Grainient noisy aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
