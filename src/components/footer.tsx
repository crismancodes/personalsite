import { Container } from "@/components/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="py-12">
          <p className="text-sm text-muted-foreground">
            © {year} Sean Crisman. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
