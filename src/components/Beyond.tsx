import Image from "next/image";
import { BEYOND } from "@/lib/content";

export default function Beyond() {
  return (
    <section id="beyond" className="bg-petal/50 py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-rose">Beyond women&apos;s health</p>
            <h2 className="serif mt-5 text-[clamp(42px,5.6vw,80px)]">Kindness doesn&apos;t stop at one cause</h2>
          </div>
          <p className="max-w-[48ch] text-[17px] leading-relaxed text-plum/75">
            The same volunteers who run our camps show up wherever Surat needs a hand: its river, its classrooms, its
            artisans, its street animals and its children without families.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BEYOND.map((b) => (
            <li key={b.id} className="lift group overflow-hidden rounded-[28px] border border-line bg-cream">
              <figure className="photo aspect-[4/3] bg-petal">
                <Image src={b.img} alt={b.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </figure>
              <div className="p-7">
                <p className="flex items-baseline gap-2">
                  <span className="serif text-[34px] text-rose">{b.stat}</span>
                  <span className="text-[13px] text-ash">{b.statLabel}</span>
                </p>
                <h3 className="mt-3 text-[19px] font-semibold">{b.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-plum/70">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
