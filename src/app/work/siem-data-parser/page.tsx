import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CaseStudyContentWithProgress } from "@/components/CaseStudyContentWithProgress";
import { CaseStudyMediaFigure } from "@/components/CaseStudyMediaFigure";
import { Reveal } from "@/components/Reveal";
import {
  CaseStudySectionContent,
  ExecutiveSummary,
  getProjectBySlug,
} from "@/lib/projects";

const STACKED_SUBSECTION_HEADINGS = [
  "Script-Based Editor with Live Testing",
  "Parser Library as a Source of Truth",
  "Parser Details and AI Assist",
];

function ExecutiveSummaryBlock({ data }: { data: ExecutiveSummary }) {
  const overviewItems = [
    `Product: ${data.overview.product}`,
    `Company: ${data.overview.company}`,
    `Role: ${data.overview.role}`,
    `Timeline: ${data.overview.timeline}`,
    `Scope: ${data.overview.scope}`,
  ];
  return (
    <div className="py-10 first:pt-0 last:pb-0">
      <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
        Executive Summary
      </h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-background/60 p-4">
          <p className="font-medium text-foreground leading-relaxed">Overview</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
            {overviewItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-background/60 p-4">
          <p className="font-medium text-foreground leading-relaxed">Key Contributions</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
            {data.keyContributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {data.outcomes && data.outcomes.length > 0 ? (
        <div className="mt-6 rounded-lg border border-border bg-background/60 p-4">
          <p className="font-medium text-foreground leading-relaxed">Outcomes</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground leading-relaxed">
            {data.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
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
              <p className="mt-1 text-muted-foreground leading-relaxed">{b.tools ?? "—"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Timeline</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{b.timeline ?? "—"}</p>
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

function CaseStudySection({
  title,
  content,
  imageOnLeft,
  stackedSubsectionHeadings,
}: {
  title: string;
  content: CaseStudySectionContent;
  imageOnLeft?: boolean;
  stackedSubsectionHeadings?: string[];
}) {
  const isRich = typeof content !== "string";
  const hasMedia =
    isRich &&
    !content.subsections?.length &&
    content.media &&
    content.media.length > 0;
  const useAlternatingLayout = hasMedia && imageOnLeft !== undefined;

  return (
    <div className="py-10 first:pt-0 last:pb-0">
      <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {!isRich ? (
        <p className="mt-3 text-muted-foreground leading-relaxed">{content}</p>
      ) : content.subsections && content.subsections.length > 0 ? (
        <div className="mt-4 space-y-10">
          {content.subsections.map((s, index) => {
            const subHasMedia = s.media && s.media.length > 0;
            const useStackedLayout =
              stackedSubsectionHeadings && stackedSubsectionHeadings.includes(s.heading);
            const imageFirst = subHasMedia && !useStackedLayout && index % 2 === 0;

            if (useStackedLayout && subHasMedia) {
              return (
                <div key={s.heading} className="space-y-4">
                  <h3 className="mb-2 font-serif text-lg font-medium tracking-tight text-foreground">
                    {s.heading}
                  </h3>
                  <div className="space-y-4">{renderBlocks(s.blocks)}</div>
                  <div className="space-y-6">
                    {s.media!.map((m, i) => (
                      <CaseStudyMediaFigure
                        key={(m.placeholderId ?? m.src) || `media-${i}`}
                        media={m}
                      />
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={s.heading}
                className={subHasMedia ? "grid gap-8 md:grid-cols-2" : ""}
              >
                <div
                  className={
                    subHasMedia && imageFirst ? "md:order-2 space-y-4" : "space-y-4"
                  }
                >
                  <h3 className="mb-2 font-serif text-lg font-medium tracking-tight text-foreground">
                    {s.heading}
                  </h3>
                  <div className="space-y-4">{renderBlocks(s.blocks)}</div>
                </div>
                {subHasMedia ? (
                  <div
                    className={imageFirst ? "md:order-1 space-y-4" : "space-y-4"}
                  >
                    {s.media!.map((m, i) => (
                      <CaseStudyMediaFigure
                        key={(m.placeholderId ?? m.src) || `media-${i}`}
                        media={m}
                      />
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
            useAlternatingLayout
              ? "mt-4 grid gap-8 md:grid-cols-2"
              : content.media && content.media.length > 0
                ? "mt-4 grid gap-8 md:grid-cols-[1fr_22rem]"
                : "mt-4"
          }
        >
          <div
            className={
              useAlternatingLayout && imageOnLeft ? "md:order-2 space-y-4" : "space-y-4"
            }
          >
            {renderBlocks(content.blocks ?? [])}
          </div>
          {content.media && content.media.length > 0 ? (
            <div
              className={
                useAlternatingLayout && imageOnLeft ? "md:order-1 space-y-4" : "space-y-4"
              }
            >
              {content.media.map((m, i) => (
                <CaseStudyMediaFigure
                  key={(m.placeholderId ?? m.src) || `media-${i}`}
                  media={m}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default async function SIEMDataParserCaseStudyPage() {
  const project = getProjectBySlug("siem-data-parser");
  if (!project) notFound();

  return (
    <CaseStudyContentWithProgress>
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
              <Image
                src="/logos/crowdstrike.png"
                alt="CrowdStrike logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-sm object-contain"
              />
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
                  sizes="(min-width: 768px) 1536px, 100vw"
                  quality={95}
                  className="object-contain"
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
          {project.executiveSummary ? (
            <Reveal>
              <div className="mt-8">
                <ExecutiveSummaryBlock data={project.executiveSummary} />
              </div>
            </Reveal>
          ) : null}
        </Container>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-12">
            <Reveal>
              <CaseStudySection title="Context & Problem" content={project.contextProblem} />
            </Reveal>
            <Reveal>
              <CaseStudySection title="Objectives & Metrics" content={project.objectivesMetrics} />
            </Reveal>
            <Reveal>
              <CaseStudySection title="My Role" content={project.myRole} />
            </Reveal>
            <Reveal>
              <CaseStudySection
                title="Approach & Key Decisions"
                content={project.approachDecisions}
                stackedSubsectionHeadings={STACKED_SUBSECTION_HEADINGS}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-12">
            <Reveal>
              <CaseStudySection title="Outcomes & Impact" content={project.outcomesImpact} />
            </Reveal>
            <Reveal>
              <CaseStudySection title="What I'd Do Next" content={project.whatNext} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <Button variant="secondary" asChild>
            <Link href="/work">View all work</Link>
          </Button>
        </Container>
      </Section>
    </CaseStudyContentWithProgress>
  );
}
