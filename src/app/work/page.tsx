import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default function WorkIndexPage() {
  const list = Array.isArray(projects) ? projects : [];
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
          {list.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block transition-shadow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
            >
              <Card className="flex h-full flex-col overflow-hidden border-border bg-card text-card-foreground shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-md group-active:scale-[0.97]">
                <div className="relative aspect-video w-full border-b border-border bg-muted">
                  {project.heroImage ? (
                    <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      sizes="(min-width: 1024px) 480px, (min-width: 640px) 360px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="card-image-placeholder flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                      Preview coming soon
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.description} {project.summary}
                  </CardDescription>
                </CardHeader>
                <div className="mt-auto flex flex-wrap gap-1.5 px-6 pb-6 pt-0">
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
      </Container>
    </Section>
  );
}
