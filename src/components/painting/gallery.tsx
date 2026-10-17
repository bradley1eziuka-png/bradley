import { useEffect, useRef } from "react";

import { WORK_IMAGES, WORK_VIDEOS, type WorkVideo } from "@/lib/work-media";
import { SectionHeading } from "./section-heading";

// Real project photos supplied by the owner, led by the strongest exteriors and
// interiors. Edit the list (or the files) in src/lib/work-media.ts.
const GALLERY = [
  WORK_IMAGES.blueHouse,
  WORK_IMAGES.brightRoomCeiling,
  WORK_IMAGES.tealHouse,
  WORK_IMAGES.platformTrim,
  WORK_IMAGES.porchCeiling,
  WORK_IMAGES.doorTrim,
];

// Plays automatically (muted and looping, which is what browsers require for
// autoplay) while on screen, and pauses when scrolled away. Native controls stay
// so visitors can unmute or pause. Visitors who prefer reduced motion get the
// poster image and can press play themselves.
function AutoplayVideo({ video }: { video: WorkVideo }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      controls
      playsInline
      preload="metadata"
      poster={video.poster}
      width={video.width}
      height={video.height}
      aria-label={video.title}
      className="h-auto w-full max-w-[17rem] rounded-2xl border border-border bg-black shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
      style={{ aspectRatio: `${video.width} / ${video.height}` }}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}

export function Gallery() {
  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="See the Difference a Fresh Coat Can Make"
          description="A look at our crew on the job: interior ceilings and trim, exterior siding, and the preparation that comes first."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((item) => (
            <figure
              key={item.src}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {WORK_VIDEOS.length > 0 && (
          <div className="mt-16">
            <h3 className="text-center font-display text-xl font-semibold tracking-tight text-primary">
              Project Videos
            </h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {WORK_VIDEOS.map((video) => (
                <AutoplayVideo key={video.src} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
