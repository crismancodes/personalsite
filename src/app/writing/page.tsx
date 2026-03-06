import { Container } from "@/components/container";
import { Section } from "@/components/section";

export default function WritingPage() {
  return (
    <Section className="pt-8 md:pt-10">
      <Container className="max-w-2xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Writing
        </h1>
        <p className="mt-4 text-muted-foreground">
          Articles and notes — coming soon.
        </p>
      </Container>
    </Section>
  );
}
