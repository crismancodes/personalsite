import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FractalGradientBackground } from "@/components/fractal-gradient-background";
import { LogoMarquee } from "@/components/logo-marquee";
import { getFeaturedProjects } from "@/lib/projects";

const approachColumns = [
  {
    title: "Vision",
    description:
      "Define product direction and identify where clarity creates competitive advantage.",
  },
  {
    title: "Systems",
    description:
      "Design frameworks and workflows that scale across teams and features.",
  },
  {
    title: "Execution",
    description:
      "Partner closely with product and engineering to ship high-impact solutions.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <FractalGradientBackground />
      <div className="relative z-10">
        {/* Hero */}
        <Section className="pt-2 pb-2.5 md:pt-2.5 md:pb-3.5 min-h-[70vh] flex flex-col justify-center">
          <Container className="max-w-3xl">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Designing intelligent systems that turn product complexity into
              strategic advantage.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I&apos;m Sean Crisman, a product design leader with 12+ years
              building AI platforms and enterprise systems. I combine product
              vision, rigorous systems thinking, and hands-on execution to help
              teams ship high-impact products with clarity and speed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#work">View selected work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">About</Link>
              </Button>
            </div>
          </Container>
        </Section>

        <LogoMarquee />

        {/* Selected Work */}
        <Section id="work" className="bg-muted/30">
          <Container>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-2 text-muted-foreground">
              A sample of recent product and design leadership work.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {featured.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="block transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
                >
                  <Card className="flex flex-col h-full border-border bg-card text-card-foreground shadow-sm">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {project.summary}
                      </p>
                    </CardContent>
                    <div className="flex flex-wrap gap-1.5 px-6 pb-6 pt-0">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="pill">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild>
                <Link href="/work">View all work</Link>
              </Button>
            </div>
          </Container>
        </Section>

        {/* Approach */}
        <Section id="approach">
          <Container>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Approach
            </h2>
            <p className="mt-2 text-muted-foreground">
              Vision, systems, and execution — in balance.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {approachColumns.map((col) => (
                <div key={col.title}>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {col.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
