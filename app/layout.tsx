import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import { AuthProvider } from "@/providers/AuthContext";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["200", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechDynasty",
  description: "Modern technology at your fingertip!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen container z-10 bg-gradient-to-b from-[#1E1A2A] to-[#443B5D]`}>
        <NextTopLoader showSpinner={true} color="red" />
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
