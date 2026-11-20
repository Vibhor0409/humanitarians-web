# Humanitarians

The website for Humanitarians, a women's-health nonprofit in Surat, India. Its main work is breast milk donation camps for premature and sick babies, and menstrual hygiene drives. It also runs community drives across the city.

**Live site:** https://humanitarians-surat.vercel.app

## The work the site covers

- **Breast milk donation camp:** 3,160 ml donated by 68 mothers at a single camp, with every donor screened by doctors and nurses first
- **Period care:** menstrual hygiene sessions and pad drives
- **Beyond:** a river clean-up, feeding street dogs, notebooks for students and food drives
- **Partners:** SMIMER Hospital, Surat Paediatrics Association, Yashoda Human Milk Bank, Rotary Club of Surat Seaface and others

## What's on the page

A single scrolling page: hero, introduction, the approach, the milk camp, period care, the wider drives, partners and press, the founders and a section on how to join.

## Stack

- Next.js 15 (App Router) and React 19
- Tailwind CSS v4
- Framer Motion for animation, Lenis for smooth scrolling
- Fraunces and DM Sans fonts, self-hosted through Fontsource
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| Path | What it holds |
|---|---|
| `src/lib/content.ts` | All copy and figures in one place |
| `src/components/` | One component per page section |
| `src/app/page.tsx` | The order of the sections |
| `public/img/` | Photos from the drives |
