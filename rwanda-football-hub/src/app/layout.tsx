import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rwandan Football Hub",
  description:
    "News, stats, and leagues hub for Rwandan football across men, women, and youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Rwandan Football Hub
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Link href="/premier-league" className="hover:underline">
                Premier League
              </Link>
              <Link href="/second-division" className="hover:underline">
                Second Division
              </Link>
              <Link href="/third-division" className="hover:underline">
                Third Division
              </Link>
              <Link href="/women/first-division" className="hover:underline">
                Women’s First
              </Link>
              <Link href="/women/second-division" className="hover:underline">
                Women’s Second
              </Link>
              <Link href="/u20-league" className="hover:underline">
                U20
              </Link>
              <Link href="/u17-league" className="hover:underline">
                U17
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mt-16 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-black/60 dark:text-white/60 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Rwandan Football Hub</span>
            <span>
              Built with <Link href="https://nextjs.org" className="hover:underline">Next.js</Link>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
