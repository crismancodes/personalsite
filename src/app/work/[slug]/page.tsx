import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, projects } from "@/lib/projects";

export const dynamic = "force-dynamic";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  if (!slug || typeof slug !== "string") notFound();
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Section className="pt-8 md:pt-10">
        <Container className="max-w-3xl">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/work">← Back to work</Link>
            </Button>
          </div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <Container className="max-w-3xl">
          <CaseStudySection title="Context & problem" content={project.contextProblem} />
          <CaseStudySection title="Objectives & metrics" content={project.objectivesMetrics} />
          <CaseStudySection title="My role" content={project.myRole} />
          <CaseStudySection title="Approach & key decisions" content={project.approachDecisions} />
        </Container>
      </Section>

      {project.screenshots && project.screenshots.length > 0 && (
        <Section>
          <Container className="max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Screenshots
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {project.screenshots.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-lg border border-border">
                  {/* Placeholder for image; replace src with actual asset path */}
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
                    {img.alt}
                  </div>
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="border-t border-border">
        <Container className="max-w-3xl">
          <CaseStudySection title="Outcomes & impact" content={project.outcomesImpact} />
          <CaseStudySection title="What I'd do next" content={project.whatNext} />
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <Button variant="secondary" asChild>
            <Link href="/work">View all work</Link>
          </Button>
        </Container>
      </Section>
    </>
  );
}

function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">{content}</p>
    </div>
  );
}
