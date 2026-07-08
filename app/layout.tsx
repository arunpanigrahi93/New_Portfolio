import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumanth-modern-portfolio.vercel.app"),

  title: "Venkata Arunakumar Panigrahi | Senior Full-Stack Developer",

  description:
    "Senior Full-Stack Developer with 7+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",

  keywords: [
    "Venkata Arunakumar Panigrahi",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Hyderabad",
  ],

  authors: [
    {
      name: "Venkata Arunakumar Panigrahi",
      url: "https://sumanth-modern-portfolio.vercel.app",
    },
  ],

  creator: "Venkata Arunakumar Panigrahi",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumanth-modern-portfolio.vercel.app",
    siteName: "Venkata Arunakumar Panigrahi Portfolio",
    title: "Venkata Arunakumar Panigrahi | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    images: [
      {
        url: "/assets/my-image.png",
        width: 1200,
        height: 630,
        alt: "Venkata Arunakumar Panigrahi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Venkata Arunakumar Panigrahi | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    images: ["/assets/my-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#5B4FE8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
