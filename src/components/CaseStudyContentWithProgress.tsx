"use client";

import { useRef, useState, useCallback } from "react";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

interface CaseStudyContentWithProgressProps {
  children: React.ReactNode;
}

export function CaseStudyContentWithProgress({
  children,
}: CaseStudyContentWithProgressProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);

  const setRef = useCallback((el: HTMLDivElement | null) => {
    contentRef.current = el;
    setContainerEl(el);
  }, []);

  return (
    <>
      <ScrollProgressBar containerRef={contentRef} containerEl={containerEl} />
      <div ref={setRef}>{children}</div>
    </>
  );
}
