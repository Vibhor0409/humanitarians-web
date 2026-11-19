import { PARTNERS, PRESS } from "@/lib/content";

/** Partner names scroll as plain type (no drawn logos); pauses on hover and stops under reduced motion. */
export default function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section aria-label="Partners and press" className="border-y border-line bg-blush py-8">
      <div className="wrap flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
        <p className="eyebrow shrink-0 text-ash">Working alongside</p>
        <div className="marquee-host relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="marquee flex w-max gap-12 whitespace-nowrap">
            {row.map((p, i) => (
              <li key={`${p}-${i}`} aria-hidden={i >= PARTNERS.length} className="serif text-[22px] text-plum/80">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <p className="shrink-0 text-[14px] text-ash">
          As featured on <span className="font-semibold text-plum">{PRESS.join(" · ")}</span>
        </p>
      </div>
    </section>
  );
}
