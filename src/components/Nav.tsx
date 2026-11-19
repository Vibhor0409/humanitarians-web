"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#milk", label: "Milk camps" },
  { href: "#periods", label: "Period care" },
  { href: "#approach", label: "Approach" },
  { href: "#beyond", label: "Beyond" },
  { href: "#founders", label: "Founders" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`serif text-[24px] leading-none ${className}`}>
      Humanitarians<span className="text-rose">.</span>
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  // Hidden while the crest intro fills the screen; slides in once the visitor scrolls into the work.
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
      setShown(window.scrollY > window.innerHeight * 0.6);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-3 transition-all duration-500 ${
        shown || open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div className="wrap">
        <nav
          aria-label="Main"
          className={`flex h-14 items-center justify-between rounded-full pl-5 pr-2 transition-all duration-300 ${
            scrolled || open ? "bg-cream/85 shadow-[0_10px_30px_-18px_rgb(42_17_23/0.4)] ring-1 ring-line backdrop-blur-xl" : ""
          }`}
        >
          <a href="#intro" aria-label="Humanitarians home">
            <Wordmark />
          </a>
          <ul className="hidden items-center gap-7 text-[14px] text-plum/75 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="ulink hover:text-plum">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#join" className="btn btn-rose hidden !h-10 !px-5 !text-[14px] lg:inline-flex">
            Volunteer with us
          </a>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-[2px] w-5 bg-plum transition-all ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[2px] w-5 bg-plum transition-all ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </nav>
      </div>
      {open && (
        <div className="fixed inset-0 -z-10 flex flex-col justify-center bg-cream px-6 lg:hidden">
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="serif text-5xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#join" onClick={() => setOpen(false)} className="btn btn-rose mt-10 w-full">
            Volunteer with us
          </a>
        </div>
      )}
    </header>
  );
}
