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
                  The best products don&apos;t just function. They create
                  clarity, and clarity builds trust.
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

      <Section id="how-i-work" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl mb-4">
            How I Work
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I operate across three layers: Direction, Systems, Execution.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Direction
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Clarifying product intent and aligning it with real user workflows and
                technical feasibility.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Systems
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Designing scalable architectures, reusable components, and interaction
                frameworks that engineering teams can build on with confidence.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Execution
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Staying close to production. Prototyping in React and Next.js when
                necessary. Using AI-assisted workflows to translate design thinking
                directly into working front-end code.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="philosophy" className="py-6 md:py-8">
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
            &mdash; not just surface-level UI.
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
            Formula 1, travel the world, and experiment with emerging
            technologies.
          </p>
        </Container>
      </Section>

      <Section className="py-6 md:py-8">
        <Container className="max-w-3xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/neuschwanstein.png"
                alt="Neuschwanstein Castle, Bavaria"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/hallstatt.png"
                alt="Hallstatt village street"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/race-finisher.png"
                alt="Race finisher with medal"
                width={400}
                height={400}
                className="h-full w-full object-cover object-[50%_35%]"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/kyoto-torii.png"
                alt="Torii gates, Kyoto"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
