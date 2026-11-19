import Image from "next/image";
import { EMAILS, INSTAGRAM } from "@/lib/content";
import { Wordmark } from "./Nav";

const WAYS = [
  { title: "Volunteer", body: "Help run a camp or a drive: registration, babysitting, distribution, or simply showing up." },
  { title: "Partner", body: "Hospitals, clinics, schools and NGOs that want to bring a camp or drive to their community." },
  { title: "Donate supplies", body: "Sanitary pads, cold boxes and milk-storage bags go straight to the women and babies who need them." },
];

export default function Join() {
  return (
    <>
      <section id="join" className="relative overflow-hidden bg-rose py-24 text-cream md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-cream/80">Get involved</p>
            <h2 className="serif mt-5 text-[clamp(44px,6vw,88px)]">Help us reach the next mother, and the next girl</h2>
            <ul className="mt-10 grid gap-3">
              {WAYS.map((w) => (
                <li key={w.title} className="lift rounded-[22px] bg-cream/10 p-6 ring-1 ring-cream/20 hover:bg-cream/15">
                  <h3 className="text-[18px] font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-cream/80">{w.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${EMAILS.join(",")}?subject=Humanitarians`} className="btn bg-cream text-rose-deep hover:bg-white">
                Email the founders <span className="arrow">→</span>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-line text-cream hover:!bg-cream hover:!text-rose-deep hover:!border-cream">
                Message us on Instagram
              </a>
            </div>
            <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-[14px] text-cream/80">
              {EMAILS.map((e) => (
                <a key={e} href={`mailto:${e}`} className="ulink hover:text-cream">
                  {e}
                </a>
              ))}
            </p>
          </div>
          <figure className="photo aspect-[4/5] rounded-[32px] bg-rose-deep">
            <Image src="/img/milk-mother.webp" alt="A young mother holding her baby at the donation camp" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </figure>
        </div>
      </section>

      <footer className="bg-plum py-12 text-cream/70">
        <div className="wrap flex flex-col justify-between gap-6 text-[14px] md:flex-row md:items-center">
          <Wordmark className="text-cream" />
          <p>Women&apos;s health nonprofit · Surat, Gujarat, India</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {EMAILS.map((e) => (
              <a key={e} href={`mailto:${e}`} className="ulink hover:text-cream">
                {e}
              </a>
            ))}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="ulink hover:text-cream">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
