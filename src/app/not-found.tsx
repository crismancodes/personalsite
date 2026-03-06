import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="pt-8 md:pt-10">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Back to home</Link>
        </Button>
      </Container>
    </Section>
  );
}
