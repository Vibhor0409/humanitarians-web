import Image from "next/image";
import NumberTicker from "./NumberTicker";
import { MILK_FACTS, MILK_STEPS } from "@/lib/content";

export default function MilkCamp() {
  return (
    <>
      <section id="milk" className="bg-cream py-24 md:py-32">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-rose">Programme 01 · Breast milk donation camps</p>
              <h2 className="serif mt-5 text-[clamp(42px,5.6vw,80px)]">Every drop reaches a baby who needs it</h2>
            </div>
            <p className="max-w-[50ch] text-[17px] leading-relaxed text-plum/75">
              Premature and sick newborns need breast milk to survive, but after a hard delivery many mothers cannot
              produce it in time. Our camps bring donating mothers, doctors and Surat&apos;s human milk bank into one room,
              so that milk reaches those babies safely.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-12">
            <figure className="photo aspect-[4/3] rounded-[28px] bg-petal md:col-span-7 md:aspect-auto md:min-h-[460px]">
              <Image src="/img/milk-mothers-group.webp" alt="Mothers and grandmothers with their babies at the donation camp" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            </figure>
            <div className="grid grid-cols-2 gap-4 md:col-span-5">
              <figure className="photo aspect-[4/5] rounded-[28px] bg-petal">
                <Image src="/img/milk-nurse-2.webp" alt="Mothers and their babies at the camp's registration table" fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
              </figure>
              <figure className="photo aspect-[4/5] rounded-[28px] bg-petal">
                <Image src="/img/milk-volunteer-baby.webp" alt="A Humanitarians volunteer holding a baby while the mother donates" fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover object-top" />
              </figure>
              <figure className="photo col-span-2 aspect-[16/9] rounded-[28px] bg-petal">
                <Image src="/img/milk-coldbox.webp" alt="Labelled bags of donated breast milk packed in a cold box" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              </figure>
            </div>
          </div>

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MILK_STEPS.map((s) => (
              <li key={s.n} className="lift rounded-[24px] border border-line bg-white/70 p-7 hover:border-rose/40">
                <span className="text-[13px] font-semibold text-rose">{s.n}</span>
                <h3 className="serif mt-5 text-[30px]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-plum/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Milk camp results" className="relative overflow-hidden bg-plum py-20 text-cream md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-rose-soft">At a single camp</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10">
              {MILK_FACTS.map((f, i) => (
                <div key={f.l}>
                  <dt className="serif text-[clamp(48px,5.4vw,76px)] leading-none">
                    <NumberTicker target={Number(f.v.replace(/,/g, ""))} delay={i * 0.1} />
                    {f.u && <span className="ml-1 text-[0.45em] text-rose-soft">{f.u}</span>}
                  </dt>
                  <dd className="mt-3 max-w-[22ch] text-[15px] leading-snug text-cream/70">{f.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="photo aspect-[16/10] rounded-[28px] bg-plum-2">
            <Image src="/img/milk-team.webp" alt="Doctors, nurses, donating mothers and Humanitarians volunteers together at the camp" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </figure>
        </div>
      </section>
    </>
  );
}
