"use client";

import "./logo-marquee.css";

const LOGOS = [
  { src: "/logos/crowdstrike.png", alt: "CrowdStrike", large: true },
  { src: "/logos/appomni.svg", alt: "AppOmni", large: true },
  { src: "/logos/resi.png", alt: "Resi" },
  { src: "/logos/projekt202.svg", alt: "Projekt202" },
  { src: "/logos/fedex.svg", alt: "FedEx" },
  { src: "/logos/txu.png", alt: "TXU Energy" },
] as const;

function LogoCell({
  src,
  alt,
  large,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div className="relative flex h-14 w-36 shrink-0 items-center justify-center bg-transparent md:h-16 md:w-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={
          large
            ? "max-h-12 w-full object-contain object-center md:max-h-14"
            : "max-h-10 w-full object-contain object-center md:max-h-12"
        }
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function LogoStrip({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean } = {}) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 md:gap-14"
      {...(ariaHidden && { "aria-hidden": true })}
    >
      {LOGOS.map((logo) => (
        <LogoCell
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          large={"large" in logo ? logo.large : undefined}
        />
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 md:py-20"
      aria-label="Companies I've worked with"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          I&apos;ve worked with teams at
        </p>
        <div className="relative overflow-hidden motion-reduce:hidden">
          <div
            className="flex w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="logo-marquee-track flex shrink-0 items-center justify-start">
              <LogoStrip />
              <LogoStrip aria-hidden />
            </div>
          </div>
        </div>
        <div className="hidden flex-wrap items-center justify-center gap-10 md:gap-14 motion-reduce:flex">
          {LOGOS.map((logo) => (
            <LogoCell
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              large={"large" in logo ? logo.large : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
