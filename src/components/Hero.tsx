import Image from "next/image";
import { HERO_FACTS } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      <div className="wrap grid min-h-[calc(100svh-8rem)] items-center gap-12 pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 text-rose">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
            What we do
          </p>
          <h2 className="serif mt-6 text-[clamp(48px,6.6vw,96px)]">
            Care for women, from the <em className="text-rose">first period</em> to the <em className="text-rose">first feed</em>.
          </h2>
          <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-plum/75 md:text-[18px]">
            Humanitarians runs breast milk donation camps with Surat&apos;s hospitals and menstrual hygiene drives in its
            slums, so mothers, newborns and girls get the care they are too often left without.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#join" className="btn btn-rose">
              Volunteer with us <span className="arrow">→</span>
            </a>
            <a href="#milk" className="btn btn-line text-plum">
              See our work
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-5 border-t border-line pt-6">
            {HERO_FACTS.map((f) => (
              <div key={f.v}>
                <dt className="serif text-[clamp(30px,3.6vw,46px)] text-rose">{f.v}</dt>
                <dd className="mt-2 text-[13px] leading-snug text-plum/65 md:text-[14px]">{f.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid aspect-[5/5.2] grid-cols-[1.25fr_1fr] grid-rows-2 gap-4">
          <figure className="photo row-span-2 rounded-[28px] bg-petal">
            <Image
              src="/img/milk-smiles.webp"
              alt="Two mothers laughing with a baby at the Humanitarians breast milk donation camp"
              fill
              priority
              sizes="(min-width: 1024px) 28vw, 56vw"
              className="object-cover"
            />
          </figure>
          <figure className="photo rounded-[28px] bg-petal">
            <Image
              src="/img/pad-girl-red.webp"
              alt="A girl in Surat holding the sanitary pads she received"
              fill
              priority
              sizes="(min-width: 1024px) 20vw, 42vw"
              className="object-cover object-top"
            />
          </figure>
          <figure className="photo rounded-[28px] bg-petal">
            <Image
              src="/img/milk-baby-hold.webp"
              alt="A volunteer holding a baby while the mother donates milk"
              fill
              sizes="(min-width: 1024px) 20vw, 42vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
