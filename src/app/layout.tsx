import type { Metadata, Viewport } from "next";
// Fonts are bundled so Vercel builds never depend on Google's font service.
import "@fontsource-variable/fraunces/soft.css";
import "@fontsource-variable/fraunces/soft-italic.css";
import "@fontsource-variable/dm-sans";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Humanitarians · Women's health in Surat, India",
  description:
    "Humanitarians is a women's health nonprofit in Surat, India, founded by Koenaa Jariwala and Vibhor Agrawal. We run breast milk donation camps with the city's hospitals and menstrual hygiene drives in its slums.",
  openGraph: {
    title: "Humanitarians",
    description: "Breast milk donation camps and menstrual hygiene drives in Surat, India.",
    images: ["/img/milk-smiles.webp"],
  },
};

export const viewport: Viewport = { themeColor: "#fffaf5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
