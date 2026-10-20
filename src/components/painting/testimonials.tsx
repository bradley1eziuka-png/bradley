import { useEffect, useRef, useState } from "react";
import { Play, Quote } from "lucide-react";

import { COPY } from "@/lib/site-config";
import { TESTIMONIAL_VIDEOS, type TestimonialVideo } from "@/lib/work-media";
import { SectionHeading } from "./section-heading";

// One customer video. Only the poster image is loaded up front; the video file
// is requested when the visitor presses play (and plays with sound, since that
// press is an intentional action). Starting one card stops the others.
function VideoCard({
  video,
  active,
  onPlay,
}: {
  video: TestimonialVideo;
  active: boolean;
  onPlay: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active) ref.current?.focus({ preventScroll: true });
  }, [active]);

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]">
      <div className="relative aspect-[4/5] w-full bg-primary">
        {active ? (
          <video
            ref={ref}
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            aria-label={`${video.label} video`}
            className="absolute inset-0 h-full w-full bg-primary object-contain"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play ${video.label} video`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={video.poster}
              alt=""
              width={video.width}
              height={video.height}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <span className="absolute inset-0 bg-linear-to-t from-primary/55 via-transparent to-transparent transition-opacity duration-300 group-hover:from-primary/70" />
            <span className="relative flex size-16 items-center justify-center rounded-full bg-accent text-primary shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-1 size-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center gap-2.5 border-t border-border px-5 py-4">
        <Quote className="size-4 shrink-0 text-accent-deep" />
        <span className="font-display text-sm font-semibold tracking-tight text-primary">
          {video.label}
        </span>
      </figcaption>
    </figure>
  );
}

// Customer reviews: video testimonials (from work-media.ts) and written reviews
// (site.config.json → content.testimonials). Renders nothing if there are neither.
// No names, quotes, or ratings are invented; videos use neutral labels.
export function Testimonials() {
  const items = COPY.testimonials;
  const videos = TESTIMONIAL_VIDEOS;
  const [playing, setPlaying] = useState<number | null>(null);
  if (items.length === 0 && videos.length === 0) return null;
  return (
    <section id="reviews" className="section-pad scroll-mt-24 bg-primary">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          light
          eyebrow="Customer Reviews"
          title="Hear From Our Customers"
          description="See what homeowners have to say about working with Bradley Interior Painting."
        />

        {videos.length > 0 && (
          // Phones: swipeable row (scroll-snap). Tablet and up: grid.
          <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            <ul className="flex snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {videos.map((video, i) => (
                <li key={video.src} className="w-[78%] shrink-0 snap-center sm:w-auto sm:shrink">
                  <VideoCard video={video} active={playing === i} onPlay={() => setPlaying(i)} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((t) => (
              <figure
                key={`${t.author}-${t.quote.slice(0, 24)}`}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]"
              >
                <Quote className="size-7 text-accent" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-primary">{t.author}</p>
                  {t.detail && <p className="mt-0.5 text-xs text-muted-foreground">{t.detail}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
