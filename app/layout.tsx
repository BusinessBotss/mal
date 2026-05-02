import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MallorcasLocal — Reserva Mallorca como un local",
  description:
    "Planes, spots, mercados, restaurantes y experiencias seleccionadas con criterio real.",
};

const navLinks = [
  { href: "/beaches", label: "Beaches" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/cafes", label: "Cafes" },
  { href: "/sunset-spots", label: "Sunsets" },
  { href: "/points-of-interest", label: "Places" },
  { href: "/markets", label: "Markets" },
  { href: "/gallery", label: "Gallery" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-card-border sticky top-0 z-50 bg-background/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="text-lg font-semibold tracking-tight text-accent">
              MallorcasLocal
            </Link>
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/plan-your-trip"
                className="hidden sm:inline-flex text-sm text-muted hover:text-foreground transition-colors"
              >
                Plan Trip
              </Link>
              <a
                href="https://wa.me/34600000000?text=Hola%2C%20quiero%20reservar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-background text-sm font-medium px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-card-border mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <p className="text-accent font-semibold">MallorcasLocal</p>
                <p className="text-sm text-muted mt-1">
                  Mallorca con criterio real.
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/plan-your-trip" className="text-sm text-muted hover:text-foreground transition-colors">
                  Plan Trip
                </Link>
                <Link href="/faqs" className="text-sm text-muted hover:text-foreground transition-colors">
                  FAQs
                </Link>
                <Link href="/downloads" className="text-sm text-muted hover:text-foreground transition-colors">
                  Downloads
                </Link>
              </nav>
            </div>
            <p className="text-xs text-muted mt-8">
              &copy; {new Date().getFullYear()} MallorcasLocal. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
