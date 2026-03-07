import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { HeroVideo } from "@/components/hero-video";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FractalGradientBackground } from "@/components/fractal-gradient-background";
import { LogoMarquee } from "@/components/logo-marquee";
import { getFeaturedProjects } from "@/lib/projects";

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
                  className="group block transition-shadow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
                >
                  <Card className="flex h-full flex-col overflow-hidden border-border bg-card text-card-foreground shadow-sm transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-md group-active:scale-[0.97]">
                    <div
                      className={
                        project.thumbnailFit === "contain"
                          ? "relative aspect-video w-full border-b border-border overflow-hidden rounded-t-lg bg-muted"
                          : "relative aspect-video w-full border-b border-border bg-muted overflow-hidden"
                      }
                    >
                      {project.heroVideo ? (
                        <HeroVideo
                          src={project.heroVideo.src}
                          poster={project.heroVideo.poster}
                          ariaLabel={project.heroVideo.ariaLabel}
                          variant="card"
                          objectFit={project.thumbnailFit === "contain" ? "contain" : "cover"}
                        />
                      ) : project.heroImage ? (
                        <Image
                          src={project.heroImage.src}
                          alt={project.heroImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className={
                            project.thumbnailFit === "contain"
                              ? "object-contain object-center"
                              : "object-cover object-center"
                          }
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
            <div className="mt-10">
              <Button asChild>
                <Link href="/work">View all work</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
