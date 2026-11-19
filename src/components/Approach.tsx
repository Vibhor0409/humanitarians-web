import Image from "next/image";
import { APPROACH } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="bg-cream py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <figure className="photo aspect-[4/5] rounded-[32px] bg-petal">
          <Image src="/img/milk-laugh.webp" alt="A mother laughing with her baby at the camp" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
        </figure>
        <div>
          <p className="eyebrow text-rose">How we work</p>
          <h2 className="serif mt-5 text-[clamp(42px,5.2vw,72px)]">Women&apos;s health is a conversation before it is a product</h2>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {APPROACH.map((a, i) => (
              <li key={a.title} className="grid grid-cols-[48px_1fr] gap-4 py-7">
                <span className="serif text-[28px] text-rose">{i + 1}</span>
                <div>
                  <h3 className="text-[19px] font-semibold">{a.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-plum/70">{a.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <blockquote className="mt-10">
            <p className="serif text-[clamp(26px,2.6vw,34px)] italic text-rose-deep">&ldquo;Humanity lies from within.&rdquo;</p>
            <footer className="eyebrow mt-3 text-ash">The line our work is built on</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
