"use client";

/**
 * Reusable hero video for project cards and case study detail pages.
 * To swap the video later: update heroVideo.src in src/lib/projects.ts for the project,
 * or change the default src below if you prefer a single global source.
 */
export const AGENTGUARD_HERO_VIDEO_SRC = "/videos/agentguard-hero.mp4";
export const AGENTGUARD_HERO_VIDEO_POSTER = "/videos/agentguard-hero-poster.jpg";

interface HeroVideoProps {
  src?: string;
  poster?: string;
  ariaLabel?: string;
  variant?: "card" | "detail";
  className?: string;
}

export function HeroVideo({
  src = AGENTGUARD_HERO_VIDEO_SRC,
  poster,
  ariaLabel = "AgentGuard AI Visibility hero animation",
  variant = "card",
  className = "",
}: HeroVideoProps) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-lg bg-muted ${className}`}
    >
      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
  );
}
