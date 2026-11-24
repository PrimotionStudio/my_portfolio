import type { Metadata, Viewport } from "next";
import { Caveat, Geist } from "next/font/google";
import { Clipboard } from "@/components/Clipboard";
import { OWNER } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theprimotionstudio.vercel.app"),
  title: {
    template: `%s · ${OWNER.name}`,
    default: `${OWNER.name} · Websites, systems, private email and video meetings`,
  },
  description:
    "Hi, I'm Prime (Martins) Okanlawon. I build websites, web apps and business systems, and set up private email and video meetings you actually own. Simple is best.",
  openGraph: { images: ["/projects/alpho.png"] },
};

export const viewport: Viewport = {
  themeColor: "#fffefb",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${caveat.variable}`}>
      <body className="overflow-hidden font-sans">
        <Clipboard>{children}</Clipboard>
      </body>
    </html>
  );
}
