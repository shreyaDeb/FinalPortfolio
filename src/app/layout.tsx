import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransitionWrapper } from "@/components/motion";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreya Deb — Software Engineer & Product Builder",
  description:
    "I build digital products from idea to deployment. Software engineer and full-stack product builder.",
  keywords: ["software engineer", "full-stack", "product builder", "web development"],
  authors: [{ name: "Shreya Deb" }],
  openGraph: {
    title: "Shreya Deb — Software Engineer & Product Builder",
    description: "I build digital products from idea to deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CustomCursor />
        <Header />
        <main className="flex-1">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}

