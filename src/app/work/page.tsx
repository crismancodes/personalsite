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
import { projects } from "@/lib/projects";

export default function WorkIndexPage() {
  return (
    <Section className="pt-8 md:pt-10">
      <Container>
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Work
        </h1>
        <p className="mt-2 text-muted-foreground">
          Case studies and selected projects.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
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
                  <Link href={`/work/${project.slug}`}>View case study</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
