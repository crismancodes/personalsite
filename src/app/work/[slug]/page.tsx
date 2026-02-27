import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CaseStudySectionContent,
  getProjectBySlug,
  projects,
} from "@/lib/projects";

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
          {project.supportingLine ? (
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              {project.slug === "livestream-video-platform" ? (
                <Image
                  src="/logos/resi.png"
                  alt="Resi Media logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-sm object-contain"
                />
              ) : null}
              <p>{project.supportingLine}</p>
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="pill">
                {tag}
              </Badge>
            ))}
          </div>
          {project.heroImage ? (
            <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-muted">
              <div className="relative aspect-video">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {project.heroImage.caption ? (
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  {project.heroImage.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </Container>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <Container className="max-w-3xl">
          <CaseStudySection title="Context & Problem" content={project.contextProblem} />
          <CaseStudySection title="Objectives & Metrics" content={project.objectivesMetrics} />
          <CaseStudySection title="My Role" content={project.myRole} />
          <CaseStudySection title="Approach & Key Decisions" content={project.approachDecisions} />
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
                  <div className="relative aspect-video bg-muted">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 512px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="border-t border-border">
        <Container className="max-w-3xl">
          <CaseStudySection title="Outcomes & Impact" content={project.outcomesImpact} />
          <CaseStudySection title="What I'd Do Next" content={project.whatNext} />
          {project.reflections ? (
            <CaseStudySection
              title="Reflections & Learnings"
              content={project.reflections}
            />
          ) : null}
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
  content: CaseStudySectionContent;
}) {
  const isRich = typeof content !== "string";
  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {!isRich ? (
        <p className="mt-3 text-muted-foreground leading-relaxed">{content}</p>
      ) : content.subsections && content.subsections.length > 0 ? (
        <div className="mt-4 space-y-10">
          {content.subsections.map((s, index) => {
            const hasMedia = s.media && s.media.length > 0;
            const imageFirst = hasMedia && index % 2 === 0;

            return (
              <div
                key={s.heading}
                className={hasMedia ? "grid gap-8 md:grid-cols-2" : ""}
              >
                <div
                  className={
                    hasMedia && imageFirst ? "md:order-2 space-y-4" : "space-y-4"
                  }
                >
                  <h3 className="mb-2 font-serif text-lg font-medium tracking-tight text-foreground">
                    {s.heading}
                  </h3>
                  <div className="space-y-4">{renderBlocks(s.blocks)}</div>
                </div>
                {hasMedia ? (
                  <div
                    className={imageFirst ? "md:order-1 space-y-4" : "space-y-4"}
                  >
                    {s.media!.map((m) => (
                      <CaseStudyMediaFigure key={m.src} media={m} />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className={
            content.media && content.media.length > 0
              ? "mt-4 grid gap-8 md:grid-cols-[1fr_22rem]"
              : "mt-4"
          }
        >
          <div className="space-y-4">{renderBlocks(content.blocks ?? [])}</div>
          {content.media && content.media.length > 0 ? (
            <div className="space-y-4">
              {content.media.map((m) => (
                <CaseStudyMediaFigure key={m.src} media={m} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function renderBlocks(blocks: NonNullable<Exclude<CaseStudySectionContent, string>["blocks"]>) {
  return blocks.map((b, idx) => {
    if (b.type === "p") {
      return (
        <p key={`${b.type}-${idx}`} className="text-muted-foreground leading-relaxed">
          {b.text}
        </p>
      );
    }

    if (b.type === "small") {
      return (
        <p key={`${b.type}-${idx}`} className="text-sm text-muted-foreground leading-relaxed">
          {b.text}
        </p>
      );
    }

    if (b.type === "ul") {
      return (
        <ul
          key={`${b.type}-${idx}`}
          className="list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed"
        >
          {b.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    if (b.type === "groups") {
      return (
        <div key={`${b.type}-${idx}`} className="grid gap-6 sm:grid-cols-2">
          {b.groups.map((g) => (
            <div key={g.title} className="rounded-lg border border-border bg-background/60 p-4">
              <p className="font-medium text-foreground leading-relaxed">{g.title}</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (b.type === "roleGrid") {
      return (
        <div key={`${b.type}-${idx}`}>
          <div className="mt-2 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-foreground">Role</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{b.role}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Tools</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {b.tools ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Timeline</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {b.timeline ?? "—"}
              </p>
            </div>
          </div>

          <p className="mt-6 font-medium text-foreground leading-relaxed">I owned:</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
            {b.owned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {b.note ? (
            <p className="mt-4 text-muted-foreground leading-relaxed">{b.note}</p>
          ) : null}
        </div>
      );
    }

    return null;
  });
}

function CaseStudyMediaFigure({ media }: { media: { src: string; alt: string; caption?: string } }) {
  const isLivePlayer = media.src.includes("live-player");
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-muted">
      <div className="relative aspect-video">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 768px) 352px, 100vw"
          className={`object-cover ${isLivePlayer ? "object-top" : ""}`}
        />
      </div>
      {media.caption ? (
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
