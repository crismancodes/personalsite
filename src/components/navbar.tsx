"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const GREEN = "#6EEB49";
const DARK = "#1c1917";
const MUTED = "#57534e";

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
  const activeHref = getActiveHref(pathname);
  const containerRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, visible: false });

  const updatePill = () => {
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
  };

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

  return (
    <header
      data-nav="root"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid #e7e5e4",
        background: "linear-gradient(to right, #f5f5f4, #e7e5e4)",
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
        </nav>
      </Container>
    </header>
  );
}
