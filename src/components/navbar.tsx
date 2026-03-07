"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, useLayoutEffect, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const mobileNavItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "WORK" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const GREEN = "#6EEB49";
const DARK = "#1c1917";
const MUTED = "#57534e";
const MOBILE_SELECTION_PREVIEW_MS = 50;
const MOBILE_OVERLAY_CLOSE_MS = 120;

function getActiveHref(pathname: string | null): string {
  if (!pathname || pathname === "/") return "/";
  for (const { href } of navItems) {
    if (href !== "/" && (pathname === href || pathname.startsWith(`${href}/`)))
      return href;
  }
  return "/";
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeHref = getActiveHref(pathname);
  const containerRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, visible: false });

  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [mobileSelectedHref, setMobileSelectedHref] = useState<string | null>(null);
  const mobileListRef = useRef<HTMLUListElement>(null);
  const mobileLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [mobilePillStyle, setMobilePillStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    visible: false,
  });
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  const updatePill = useCallback(() => {
    const container = containerRef.current;
    const activeEl = activeHref ? linkRefs.current[activeHref] : null;
    if (!container || !activeEl) return;
    const containerRect = container.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    setPillStyle({
      left: linkRect.left - containerRect.left + container.scrollLeft,
      width: linkRect.width,
      visible: linkRect.width > 0,
    });
  }, [activeHref]);

  const updateMobilePill = useCallback(() => {
    const list = mobileListRef.current;
    const key = mobileSelectedHref ?? activeHref;
    const activeEl = key ? mobileLinkRefs.current[key] : null;
    if (!list || !activeEl) return;
    const listRect = list.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();

    setMobilePillStyle({
      top: linkRect.top - listRect.top,
      left: linkRect.left - listRect.left,
      width: linkRect.width,
      height: linkRect.height,
      visible: linkRect.width > 0 && linkRect.height > 0,
    });
  }, [activeHref, mobileSelectedHref]);

  const updateMobilePillForHref = useCallback((href: string) => {
    const list = mobileListRef.current;
    const el = mobileLinkRefs.current[href];
    if (!list || !el) return;
    const listRect = list.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    setMobilePillStyle({
      top: linkRect.top - listRect.top,
      left: linkRect.left - listRect.left,
      width: linkRect.width,
      height: linkRect.height,
      visible: linkRect.width > 0 && linkRect.height > 0,
    });
  }, []);

  useLayoutEffect(() => {
    updatePill();
    const t1 = requestAnimationFrame(() => updatePill());
    const t2 = setTimeout(updatePill, 50);
    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);
    };
  }, [activeHref]);

  useEffect(() => {
    const t = setTimeout(updatePill, 100);
    return () => clearTimeout(t);
  }, [activeHref]);

  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [activeHref]);

  useEffect(() => {
    if (!isMobile) return;
    if (!(mobileMenuOpen || mobileMenuClosing)) return;
    const onResize = () => updateMobilePill();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile, mobileMenuClosing, mobileMenuOpen, updateMobilePill]);

  useLayoutEffect(() => {
    if (!isMobile) return;
    if (!(mobileMenuOpen || mobileMenuClosing)) return;
    // Ensure pill positions correctly on first open (after refs mount/layout settles).
    const t1 = requestAnimationFrame(() => updateMobilePill());
    const t2 = requestAnimationFrame(() => updateMobilePill());
    return () => {
      cancelAnimationFrame(t1);
      cancelAnimationFrame(t2);
    };
  }, [isMobile, mobileMenuClosing, mobileMenuOpen, updateMobilePill]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsMobile(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isMobile && mobileMenuOpen) setMobileMenuOpen(false);
    if (!isMobile && mobileMenuClosing) setMobileMenuClosing(false);
  }, [isMobile, mobileMenuOpen]);

  useEffect(() => {
    if (!isMobile || !mobileMenuOpen) return;
    // Because mobile navigation uses router.push (preventDefault), explicitly prefetch
    // so route transitions feel instant.
    for (const item of mobileNavItems) {
      router.prefetch(item.href);
    }
  }, [isMobile, mobileMenuOpen, router]);

  useEffect(() => {
    // When navigation completes, reset any temporary "selected" state used for mobile transitions.
    setMobileSelectedHref(null);
  }, [activeHref]);

  const closeMobileMenu = useCallback(
    (afterClose?: () => void) => {
      // Keep the overlay mounted briefly so the fade/slide-out can complete.
      setMobileMenuClosing(true);
      setMobileMenuOpen(false);
      window.setTimeout(() => {
        setMobileMenuClosing(false);
        afterClose?.();
      }, MOBILE_OVERLAY_CLOSE_MS);
    },
    []
  );

  const focusableSelector = useMemo(
    () =>
      [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
      ].join(","),
    []
  );

  useEffect(() => {
    const mobileMenuVisible = mobileMenuOpen || mobileMenuClosing;
    if (!mobileMenuVisible) return;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const targetsToScale = [
      document.querySelector("main"),
      document.querySelector("footer"),
    ].filter(Boolean) as HTMLElement[];
    const prevTargetStyles = targetsToScale.map((el) => ({
      el,
      transform: el.style.transform,
      transition: el.style.transition,
      transformOrigin: el.style.transformOrigin,
    }));
    for (const el of targetsToScale) {
      el.style.transformOrigin = "top center";
      el.style.transition = el.style.transition
        ? `${el.style.transition}, transform 200ms ease`
        : "transform 200ms ease";
      el.style.transform = "scale(0.975)";
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMobileMenu();
        return;
      }

      if (e.key !== "Tab") return;
      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusables = Array.from(
        overlay.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || !overlay.contains(active))) {
        e.preventDefault();
        last.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const t = mobileMenuOpen
      ? window.setTimeout(() => closeButtonRef.current?.focus(), 10)
      : undefined;

    return () => {
      if (t) window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      for (const prev of prevTargetStyles) {
        prev.el.style.transform = prev.transform;
        prev.el.style.transition = prev.transition;
        prev.el.style.transformOrigin = prev.transformOrigin;
      }
    };
  }, [closeMobileMenu, focusableSelector, mobileMenuClosing, mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuClosing(false);
    setMobileSelectedHref(null);
    setMobileMenuOpen((v) => !v);
  }, []);

  const mobileMenuVisible = mobileMenuOpen || mobileMenuClosing;
  const mobileActiveHref = mobileSelectedHref ?? activeHref;
  const mobileOverlay = isMobile && mobileMenuVisible ? (
    <div
      id="mobile-nav-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!mobileMenuVisible}
      tabIndex={-1}
      className={[
        "fixed inset-0 z-[100] transition-all duration-120 ease-out",
        mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      style={{
        backgroundColor: "rgba(245, 245, 244, 0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {/* Close button (fixed to top-right with safe-area padding). */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={() => closeMobileMenu()}
        aria-label="Close menu"
        className="absolute grid h-11 w-11 place-items-center rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        style={{
          right: "calc(1rem + env(safe-area-inset-right))",
          top: "calc(1rem + env(safe-area-inset-top))",
          color: DARK,
          backgroundColor: "rgba(245, 245, 244, 0.75)",
          border: "1px solid rgba(231, 229, 228, 0.85)",
          boxShadow: "0 6px 18px rgba(28, 25, 23, 0.08)",
        }}
      >
        <span className="sr-only">Close menu</span>
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="block"
        >
          <path
            d="M6 6L18 18"
            stroke={DARK}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 6L6 18"
            stroke={DARK}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Centered link stack */}
      <div className="flex h-full w-full items-center justify-center px-6">
        <ul
          ref={mobileListRef}
          className="relative flex -translate-y-6 flex-col items-center justify-center gap-7"
        >
          {/* Sliding pill behind active link (mirrors desktop behavior). */}
          <span
            role="presentation"
            aria-hidden
            className="absolute rounded-lg transition-all duration-200 ease-out"
            style={{
              top: mobilePillStyle.top,
              left: mobilePillStyle.left,
              width: mobilePillStyle.width,
              height: mobilePillStyle.height,
              backgroundColor: GREEN,
              opacity: mobilePillStyle.visible ? 1 : 0,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {mobileNavItems.map(({ href, label }, idx) => {
            const isActive = mobileActiveHref === href;
            return (
              <li
                key={href}
                className={[
                  "transition-all duration-120 ease-out",
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: `${80 + idx * 70}ms`, position: "relative", zIndex: 1 }}
              >
                <Link
                  href={href}
                  ref={(el) => {
                    mobileLinkRefs.current[href] = el;
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (mobileMenuClosing) return;
                    // Mirror desktop behavior: show selected (green) state immediately,
                    // then animate the overlay closed, then navigate.
                    setMobileSelectedHref(href);
                    requestAnimationFrame(() => updateMobilePillForHref(href));
                    window.setTimeout(() => {
                      // Start closing animation, but navigate immediately so the page doesn't feel laggy.
                      setMobileMenuClosing(true);
                      setMobileMenuOpen(false);
                      router.push(href);
                      window.setTimeout(() => setMobileMenuClosing(false), MOBILE_OVERLAY_CLOSE_MS);
                    }, MOBILE_SELECTION_PREVIEW_MS);
                  }}
                  className="rounded-lg px-6 py-3 font-serif text-4xl tracking-tight focus:outline-none focus-visible:outline-none"
                  style={{
                    backgroundColor: "transparent",
                    color: DARK,
                    textDecoration: "none",
                    WebkitTapHighlightColor: "transparent",
                    outline: "none",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;

  return (
    <header
      data-nav="root"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid rgba(231, 229, 228, 0.5)",
        background: "linear-gradient(to right, rgba(245, 245, 244, 0.75), rgba(231, 229, 228, 0.6))",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Container>
        <nav
          style={{
            display: "flex",
            height: "4rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: DARK,
              textDecoration: "none",
            }}
            className="font-serif"
          >
            <span
              style={{
                position: "relative",
                flexShrink: 0,
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "9999px",
                overflow: "hidden",
                backgroundColor: GREEN,
                border: `2px solid ${GREEN}`,
              }}
            >
              <Image
                src="/images/profile.png"
                alt=""
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </span>
            <span className="font-serif">Sean Crisman</span>
          </Link>
          {/* Desktop navigation (preserve existing layout/styling exactly). */}
          {!isMobile ? (
            <ul
              ref={containerRef}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {/* Sliding pill behind active link — z-index 0 so links stay on top */}
              <span
                role="presentation"
                aria-hidden
                style={{
                  position: "absolute",
                  left: pillStyle.left,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: pillStyle.width,
                  height: "2rem",
                  borderRadius: "6px",
                  backgroundColor: GREEN,
                  opacity: pillStyle.visible ? 1 : 0,
                  pointerEvents: "none",
                  zIndex: 0,
                  transition: "left 0.3s ease-out, width 0.3s ease-out, opacity 0.2s ease-out",
                }}
              />
              {navItems.map(({ href, label }) => {
                const isActive = activeHref === href;
                return (
                  <li key={href} style={{ display: "inline-block", position: "relative", zIndex: 1 }}>
                    <Link
                      ref={(el) => {
                        linkRefs.current[href] = el;
                      }}
                      href={href}
                      style={{
                        position: "relative",
                        display: "block",
                        padding: "0.5rem 0.75rem",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.025em",
                        borderRadius: "6px",
                        textDecoration: "none",
                        outline: "none",
                        transition: "color 0.2s ease-out, background-color 0.2s ease-out",
                        backgroundColor: isActive ? GREEN : "transparent",
                        color: isActive ? DARK : MUTED,
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-overlay"
                className="relative h-10 w-10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                style={{
                  color: DARK,
                  backgroundColor: "transparent",
                }}
              >
                <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 rounded-full transition-all duration-200 ease-out"
                  style={{
                    backgroundColor: DARK,
                    transform: mobileMenuOpen
                      ? "translate(-50%, -50%) rotate(45deg)"
                      : "translate(-50%, calc(-50% - 7px)) rotate(0deg)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out"
                  style={{
                    backgroundColor: DARK,
                    opacity: mobileMenuOpen ? 0 : 1,
                  }}
                />
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 rounded-full transition-all duration-200 ease-out"
                  style={{
                    backgroundColor: DARK,
                    transform: mobileMenuOpen
                      ? "translate(-50%, -50%) rotate(-45deg)"
                      : "translate(-50%, calc(-50% + 7px)) rotate(0deg)",
                  }}
                />
              </button>
            </>
          )}
        </nav>
      </Container>
      {/* Mobile full-screen overlay menu (ported to body for correct stacking). */}
      {mounted && mobileOverlay ? createPortal(mobileOverlay, document.body) : null}
    </header>
  );
}
