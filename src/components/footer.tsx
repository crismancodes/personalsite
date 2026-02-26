import { Container } from "@/components/container";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/seancrisman", external: true },
  { label: "Email", href: "mailto:sean@seancrisman.com", external: true },
  { label: "GitHub", href: "https://github.com/seancrisman", external: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="py-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} Sean Crisman. All rights reserved.
          </p>
          <nav aria-label="Footer links" className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-sm text-muted-foreground transition-colors duration-150 hover:text-[#1c1917] focus-visible:text-[#1c1917] focus-visible:outline-none"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
