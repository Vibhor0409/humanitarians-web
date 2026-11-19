import Image from "next/image";
import { FOUNDERS } from "@/lib/content";

export default function Founders() {
  return (
    <section id="founders" className="bg-cream py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="grid aspect-[6/5] grid-cols-[1.35fr_1fr] grid-rows-2 gap-4">
          <figure className="photo row-span-2 rounded-[32px] bg-petal">
            <Image src="/img/founders-cleanup.webp" alt="Co-founders Vibhor Agrawal and Koenaa Jariwala in Humanitarians T-shirts" fill sizes="(min-width: 1024px) 32vw, 58vw" className="object-cover object-[50%_30%]" />
          </figure>
          <figure className="photo rounded-[24px] bg-petal">
            <Image src="/img/books-founders.webp" alt="The co-founders with students holding their new notebooks" fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
          </figure>
          <figure className="photo rounded-[24px] bg-petal">
            <Image src="/img/dogs-both.webp" alt="The co-founders feeding a street dog together" fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
          </figure>
        </div>

        <div>
          <p className="eyebrow text-rose">Founders</p>
          <h2 className="serif mt-5 text-[clamp(42px,5.2vw,72px)]">Built by two people who show up in person</h2>
          <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-plum/75">
            Koenaa Jariwala and Vibhor Agrawal founded Humanitarians to bring kindness back into how a city looks after its
            women. They plan every drive, recruit the volunteers, bring hospitals and mentors on board, and are there on
            the day: handing over pads door to door, or babysitting so a mother can donate.
          </p>
        </div>
      </div>

      <ul className="wrap mt-16 grid gap-5 md:grid-cols-2">
        {FOUNDERS.map((f) => (
          <li
            key={f.name}
            className="lift grid grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] items-end gap-5 rounded-[28px] border border-line bg-white/70 p-4 hover:border-rose/40 sm:gap-7 sm:p-5"
          >
            <figure className="photo aspect-[4/5] rounded-[22px] bg-petal">
              <Image src={f.photo} alt={`${f.name}, co-founder of Humanitarians`} fill sizes="(min-width: 768px) 20vw, 45vw" className="object-cover object-top" />
            </figure>
            <div className="min-w-0 pb-2">
              <p className="eyebrow text-rose">{f.role}</p>
              <p className="serif mt-3 text-[clamp(28px,3vw,38px)]">{f.name}</p>
              <a href={`mailto:${f.email}`} className="ulink mt-4 inline-block text-[14px] text-plum/80 hover:text-plum">
                {f.email.split("@")[0]}@<wbr />{f.email.split("@")[1]}
              </a>
              <a
                href={`https://www.instagram.com/${f.handle}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="ulink mt-1.5 block w-fit text-[14px] text-ash hover:text-plum"
              >
                @{f.handle}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
