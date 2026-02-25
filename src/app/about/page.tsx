import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <>
      <Section className="py-6 pt-8 md:py-8 md:pt-10">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <figure className="w-full shrink-0 sm:w-56 md:w-64">
              <Image
                src="/images/professional-portrait.png"
                alt="Sean Crisman"
                width={320}
                height={400}
                className="rounded-lg border border-border object-cover shadow-sm"
              />
            </figure>
            <div className="min-w-0 flex-1">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Designing systems that turn complexity into confidence.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I&apos;m Sean Crisman, a product design leader with over 12 years of
                experience building AI platforms, enterprise systems, and high-scale
                digital products. My work lives at the intersection of product
                strategy, systems thinking, and hands-on execution.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I believe the most powerful products don&apos;t just function well —
                they create clarity. And clarity builds trust.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="philosophy" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Philosophy
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Over the past decade, I&apos;ve worked with teams building
            cybersecurity platforms, AI-driven tools, livestream ecosystems, and
            SaaS systems. Across every domain, one principle remains consistent:
          </p>
          <p className="mt-4 font-serif text-xl font-semibold text-foreground">
            Complexity is inevitable. Confusion is not.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether designing AI agent workflows, enterprise rule builders, or
            scalable design systems, my goal is to transform fragmented,
            high-stakes workflows into structured, intuitive experiences.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I focus on:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Aligning product strategy with user reality</li>
            <li>Designing systems, not just screens</li>
            <li>Creating interfaces that scale with complexity</li>
            <li>Shipping work that drives measurable outcomes</li>
          </ul>
        </Container>
      </Section>

      <Section id="how-i-work" className="py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            How I work
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I operate at three levels: <strong className="text-foreground">Vision</strong>,{" "}
            <strong className="text-foreground">Systems</strong>, and{" "}
            <strong className="text-foreground">Execution</strong>. I&apos;m
            comfortable moving between executive strategy discussions and
            detailed interaction design.
          </p>
        </Container>
      </Section>

      <Section id="personal" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Personal
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Outside of product design, I value discipline and long-term
            thinking. I train for endurance races, follow Formula 1, and
            experiment with emerging technologies.
          </p>
        </Container>
      </Section>
    </>
  );
}
