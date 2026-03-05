import Image from "next/image";

interface CaseStudyMediaFigureProps {
  media: { src: string; alt: string; caption?: string };
}

export function CaseStudyMediaFigure({ media }: CaseStudyMediaFigureProps) {
  return (
    <figure className="w-full max-w-[1200px] mx-auto overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
      <div className="relative aspect-video w-full">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 768px) 1200px, 100vw"
          quality={95}
          className="object-contain object-center"
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
