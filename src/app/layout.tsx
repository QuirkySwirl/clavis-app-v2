import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Fonts setup based on STYLE_GUIDE.md
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

// Metadata based on APP_OVERVIEW_AND_STRATEGY.md and STYLE_GUIDE.md
export const metadata: Metadata = {
  title: {
    default: "Clavis: Diagnose & Resolve Data Quality Issues",
    template: "%s | Clavis",
  },
  description: "Clavis: Diagnose real business pains, link them to foundational data issues, and generate a starter project charter to drive data-driven success.",
  keywords: ["data quality", "dq", "business process improvement", "kpi", "okr", "strategic objectives", "data governance", "project charter", "data diagnosis"],
  authors: [{ name: "Kartik Iyer" }], // Assuming based on context
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clavis.ai", // Replace with actual domain when available
    title: "Clavis: Diagnose & Resolve Data Quality Issues",
    description: "Turn your data from a liability into a strategic asset with Clavis.",
    images: [
      {
        url: "/OG-image.png", // Assuming OG image will be in public folder
        width: 1200,
        height: 630,
        alt: "Clavis App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clavis: Diagnose & Resolve Data Quality Issues",
    description: "Unlock data-driven success by diagnosing and resolving foundational data quality issues.",
    images: ["/OG-image.png"], // Assuming OG image
    // creator: "@YourTwitterHandle", // Add if available
  },
  icons: {
    icon: "/favicon.svg", // Or /favicon.ico
    shortcut: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Assuming manifest file in public
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <body className="bg-background text-foreground font-body antialiased">
        {/* Graphpaper effect and spotlight effects are applied via globals.css on body */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
