import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFeaturedProjects } from "@/lib/projects";

const stats = [
  "12+ Years Experience",
  "AI & Enterprise Platforms",
  "Design Systems & Strategy",
  "Execution & Outcomes",
];

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
      {/* Hero */}
      <Section className="pt-8 md:pt-10">
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
              <Link href="/work">View selected work</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/about#approach">About my approach</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {stats.map((label) => (
              <Badge key={label} variant="pill">
                {label}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

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
              <Card
                key={project.slug}
                className="flex flex-col transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="pill">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" asChild>
                    <Link href={`/work/${project.slug}`}>
                      View case study
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
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
    </>
  );
}
