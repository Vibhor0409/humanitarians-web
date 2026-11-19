import Image from "next/image";

/** The first screen: the Humanitarians crest alone, then a cue to scroll into the work. */
export default function Intro() {
  return (
    <section
      id="intro"
      aria-label="Humanitarians"
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-cream px-4 text-center"
    >
      {/* Soft blush halo behind the crest. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120vw,980px)] w-[min(120vw,980px)] -translate-x-1/2 -translate-y-[55%] rounded-full bg-[radial-gradient(circle,rgb(245_213_207/0.9)_0%,rgb(251_236_230/0.5)_45%,transparent_70%)]"
      />

      <div className="relative flex flex-1 flex-col items-center justify-center pb-6 pt-16">
        <div className="intro-crest relative mx-auto aspect-square w-[min(68vw,340px,34svh)] overflow-hidden rounded-full shadow-[0_40px_90px_-40px_rgb(142_21_53/0.7)] ring-[10px] ring-cream">
          <Image src="/img/logo.webp" alt="Humanitarians crest: two open hands holding a red heart" fill priority sizes="340px" className="object-cover" />
        </div>
        <h1 className="intro-rise serif mt-8 text-[clamp(48px,min(8vw,11svh),104px)]">
          Humanitarians<span className="text-rose">.</span>
        </h1>
        <p className="intro-rise mt-4 text-[17px] text-plum/70 [animation-delay:120ms] md:text-[19px]">
          One step closer to humanity
        </p>
        <p className="eyebrow intro-rise mt-6 text-rose [animation-delay:200ms]">
          Women&apos;s health nonprofit · Surat, India
        </p>
      </div>

      <a
        href="#top"
        className="relative mb-8 mt-10 flex shrink-0 flex-col items-center gap-3 text-[13px] font-medium text-plum/60 hover:text-rose"
      >
        Scroll to see our work
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="scroll-dot h-2 w-1 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
