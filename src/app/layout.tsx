import "./globals.css";
import { Metadata } from "next";
import { Syne, Outfit } from "next/font/google"

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Creative Portfolio | Software Engineer & Designer",
  description: "Showcasing a blend of software engineering and design expertise, a creative portfolio using Next.js and Gsap animations.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return ( 
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <div className="grid-overlay">
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>
        {children}
      </body>
    </html>
  );
}

