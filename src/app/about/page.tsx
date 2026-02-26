import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <>
      <Section className="py-6 pt-8 md:py-8 md:pt-10">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="min-w-0 flex-1 max-w-xl">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Designing systems that turn complexity into confidence.
              </h1>
              <div className="mt-6 space-y-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m Sean Crisman, a Lead Product Designer with 12+ years of
                  experience building AI platforms, enterprise systems, and high-scale
                  SaaS products.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I turn ambiguity into working systems. Strategy into shipped
                  software. Complexity into usable structure.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The best products don&apos;t just function. They create clarity. And
                  clarity builds trust.
                </p>
              </div>
            </div>
            <figure className="w-full shrink-0 sm:w-56 md:w-64">
              <Image
                src="/images/professional-portrait.png"
                alt="Sean Crisman"
                width={320}
                height={427}
                className="rounded-lg border border-border object-cover shadow-sm"
              />
            </figure>
          </div>
        </Container>
      </Section>

      <Section id="philosophy" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl mb-4">
            Philosophy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I work in complex environments: cybersecurity platforms, AI agent
            workflows, enterprise rule engines, multi-tenant SaaS systems.
          </p>
          <p className="mt-4 font-medium text-foreground leading-relaxed">
            Complexity is inevitable. Confusion is not.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I design for scale from day one. That means thinking in systems: data
            models, state management, information architecture, and constraints
            — not just surface-level UI.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I focus on:
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
            <li>
              Translating product strategy into system-level interaction models
            </li>
            <li>
              Designing extensible patterns across teams and features
            </li>
            <li>
              Reducing cognitive load in high-density enterprise interfaces
            </li>
            <li>
              Shipping work that drives measurable business impact
            </li>
          </ul>
        </Container>
      </Section>

      <Section id="how-i-work" className="py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl mb-4">
            How I Work
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I operate across three layers: Direction, Systems, Execution.
          </p>

          <h3 className="mt-6 mb-2 font-serif text-lg font-medium tracking-tight text-foreground">
            Direction
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Clarifying product intent and aligning it with real user workflows and
            technical feasibility.
          </p>

          <h3 className="mt-6 mb-2 font-serif text-lg font-medium tracking-tight text-foreground">
            Systems
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Designing scalable architectures, reusable components, and interaction
            frameworks that engineering teams can build on with confidence.
          </p>

          <h3 className="mt-6 mb-2 font-serif text-lg font-medium tracking-tight text-foreground">
            Execution
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Staying close to production. Prototyping in React and Next.js when
            necessary. Using tools like Cursor and AI-assisted workflows to
            translate design thinking directly into working front-end code.
          </p>
          <p className="mt-4 font-medium text-foreground leading-relaxed">
            Design does not end in Figma.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I lead through output, clarity, and ownership. Titles are secondary.
          </p>
        </Container>
      </Section>

      <Section id="personal" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl mb-4">
            Personal
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Outside of product design, I train for endurance races, follow
            Formula 1, and experiment with emerging technologies.
          </p>
        </Container>
      </Section>
    </>
  );
}
