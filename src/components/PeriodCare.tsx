import Image from "next/image";
import { PERIOD_TOPICS } from "@/lib/content";

const FACES = [
  { src: "/img/pad-elder.webp", alt: "An older woman holding a packet of sanitary pads" },
  { src: "/img/pad-girl-floral.webp", alt: "A girl in a floral dress holding sanitary pads" },
  { src: "/img/pad-woman-yellow.webp", alt: "A woman in a pink dupatta holding sanitary pads" },
  { src: "/img/pad-girl-pink.webp", alt: "A girl in a patterned dress holding sanitary pads" },
  { src: "/img/pad-woman-orange.webp", alt: "A woman in an orange dupatta holding sanitary pads" },
  { src: "/img/pad-girl-grey.webp", alt: "A teenage girl holding sanitary pads" },
];

export default function PeriodCare() {
  return (
    <section id="periods" className="bg-blush py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-rose">Programme 02 · Menstrual hygiene drives</p>
            <h2 className="serif mt-5 text-[clamp(42px,5.6vw,80px)]">
              Pads, and the conversation that comes with them
            </h2>
          </div>
          <div className="max-w-[50ch]">
            <p className="text-[17px] leading-relaxed text-plum/75">
              In Surat&apos;s slums many women still manage their periods with old cloth and rags, and many girls get their
              first period knowing nothing about it. We go door to door with pads and a plain conversation about
              hygiene, infection and choice.
            </p>
            <p className="mt-5 border-l-2 border-rose pl-4 text-[15px] text-plum/70">
              <span className="serif text-[26px] text-rose">71%</span> of girls in India know nothing about
              menstruation before their first period. <span className="text-plum/50">Dasra, Spot On! report</span>
            </p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {FACES.map((f) => (
            <li key={f.src} className="photo aspect-[3/4] rounded-[22px] bg-petal">
              <Image src={f.src} alt={f.alt} fill sizes="(min-width: 1024px) 16vw, (min-width: 768px) 32vw, 50vw" className="object-cover object-top" />
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <figure className="photo aspect-[4/3] rounded-[28px] bg-petal">
            <Image src="/img/pad-family.webp" alt="Three women and a baby outside their home with the pads they received" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-top" />
          </figure>
          <div className="grid gap-4 sm:grid-cols-2">
            {PERIOD_TOPICS.map((t) => (
              <article key={t.title} className="lift rounded-[24px] border border-line bg-cream p-7 hover:border-rose/40">
                <h3 className="serif text-[28px]">{t.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-plum/70">{t.body}</p>
              </article>
            ))}
            <p className="text-[14px] leading-relaxed text-ash sm:col-span-2">
              Guided by mentors from Kamakhya and menstrual health advocate Rajni Sultania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
