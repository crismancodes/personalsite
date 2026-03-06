"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollProgressBarProps {
  /** Ref to the main case study content container (article wrapper). */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Optional: element when available (ensures effect runs after mount). */
  containerEl?: HTMLDivElement | null;
}

export function ScrollProgressBar({
  containerRef,
  containerEl,
}: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const container = containerEl ?? containerRef.current;
    if (!container) return;

    function updateProgress() {
      const el = containerEl ?? containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = el.offsetHeight;
      const containerBottom = containerTop + containerHeight;
      const viewportHeight = window.innerHeight;
      const start = containerTop;
      const end = Math.max(containerTop, containerBottom - viewportHeight);
      const range = end - start;
      let raw: number;
      if (range <= 0) {
        raw = window.scrollY >= start ? 1 : 0;
      } else {
        raw = (window.scrollY - start) / range;
      }
      setProgress(Math.max(0, Math.min(1, raw)));
      tickingRef.current = false;
    }

    function onScrollOrResize() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(updateProgress);
    }

    const resizeObserver = new ResizeObserver(onScrollOrResize);
    resizeObserver.observe(container);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    updateProgress();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [containerEl, containerRef]);

  const barClass = "h-full w-full origin-left bg-accent";
  const wrapperClass =
    "fixed top-0 left-0 right-0 z-[9999] h-1 overflow-hidden bg-transparent pointer-events-none";

  return (
    <div className={wrapperClass} aria-hidden>
      <div
        className={
          reduceMotion
            ? barClass
            : `${barClass} transition-transform duration-150 ease-out`
        }
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
