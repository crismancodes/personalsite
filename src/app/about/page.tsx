import { Container } from "@/components/container";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <>
      <Section className="py-6 pt-8 md:py-8 md:pt-10">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Designing systems that turn complexity into confidence.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I&apos;m Sean Crisman, a Lead Product Designer with over 12 years of
            experience building AI platforms, enterprise systems, and high-scale
            SaaS products.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I turn ambiguity into working systems. Strategy into shipped
            software. Complexity into usable structure.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The best products do not just function. They create clarity. And
            clarity builds trust.
          </p>
        </Container>
      </Section>

      <Section id="philosophy" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Philosophy
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I work in complex environments. Cybersecurity platforms. AI agent
            workflows. Enterprise rule engines. Multi-tenant SaaS systems.
          </p>
          <p className="mt-4 font-medium text-foreground leading-relaxed">
            Complexity is inevitable. Confusion is not.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My job is to architect experiences that make high-stakes systems feel
            structured and intentional. I design for scale from day one, thinking
            in data models, state management, information architecture, and
            system constraints, not just surface-level UI.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I focus on:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
            <li>
              Translating product strategy into system-level interaction models
            </li>
            <li>
              Designing extensible patterns across features and teams
            </li>
            <li>
              Reducing cognitive load in high-density enterprise interfaces
            </li>
            <li>
              Shipping work that produces measurable business impact, including
              adoption growth, workflow acceleration, and revenue-supporting
              platform capabilities
            </li>
          </ul>
        </Container>
      </Section>

      <Section id="how-i-work" className="py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            How I Work
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I operate across three layers: Direction, Systems, Execution.
          </p>

          <h3 className="mt-8 font-serif text-lg font-semibold tracking-tight">
            Direction
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            I help clarify product intent and align it to real user workflows and
            technical feasibility.
          </p>

          <h3 className="mt-6 font-serif text-lg font-semibold tracking-tight">
            Systems
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            I design scalable architectures, reusable components, and interaction
            frameworks that engineering teams can build on with confidence.
          </p>

          <h3 className="mt-6 font-serif text-lg font-semibold tracking-tight">
            Execution
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            I stay close to production. I prototype in React and Next.js when
            necessary. I use tools like Cursor and AI-assisted workflows to
            translate design thinking directly into working front-end code. I
            care about tokens, component APIs, accessibility, performance, and
            implementation detail because design does not end in Figma.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I lead through output, clarity, and ownership. Titles are secondary.
          </p>
        </Container>
      </Section>

      <Section id="personal" className="bg-muted/30 py-6 md:py-8">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Personal
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Outside of product design, I train for endurance races, follow
            Formula 1, and experiment with emerging technologies. Discipline
            compounds.
          </p>
        </Container>
      </Section>
    </>
  );
}
