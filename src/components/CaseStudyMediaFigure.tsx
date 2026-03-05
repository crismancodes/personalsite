import Image from "next/image";

interface CaseStudyMediaFigureProps {
  media: {
    src: string;
    alt: string;
    caption?: string;
    placeholderId?: string;
    figmaInstruction?: string;
  };
}

export function CaseStudyMediaFigure({ media }: CaseStudyMediaFigureProps) {
  const isPlaceholder = !media.src;

  if (isPlaceholder) {
    return (
      <figure className="w-full max-w-[1200px] mx-auto overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
        {/* TODO: Replace with exported image path when Figma Make screenshot is ready */}
        <div className="relative aspect-video w-full flex items-center justify-center text-sm text-muted-foreground">
          {media.placeholderId ? `[${media.placeholderId}]` : ""} Image placeholder
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground space-y-1">
          {media.placeholderId ? (
            <span className="block text-xs font-medium text-muted-foreground/80">
              {media.placeholderId}
            </span>
          ) : null}
          {media.alt ? (
            <span className="block font-medium text-foreground">{media.alt}</span>
          ) : null}
          {media.figmaInstruction ? (
            <span className="block">
              Recreate in Figma Make: {media.figmaInstruction}
            </span>
          ) : null}
          {media.caption ? <span className="block">{media.caption}</span> : null}
        </figcaption>
      </figure>
    );
  }

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
