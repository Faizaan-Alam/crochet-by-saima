import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import Script from "next/script";
import { site } from "@/data/site";
import { THEME_STORAGE_KEY, themes } from "@/data/themes";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const themeIds = themes.map((theme) => theme.id);
const themeScript = `try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var ok=${JSON.stringify(themeIds)};if(ok.indexOf(t)!==-1)document.documentElement.setAttribute("data-theme",t);}catch(e){}`;

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="strawberry-cream"
      className={`${fraunces.variable} ${nunito.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-base-100 font-sans text-base-content antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
