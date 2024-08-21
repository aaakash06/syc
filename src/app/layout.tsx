import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Scroll } from "./scrollbar";

// import ScrollToTop from "@/components/common/ScrollTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Sound Youth Circle",
  description: "Envisioning a more resilient future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />;
      </head>
      {/* <Scroll></Scroll> */}
      <body
        className={`${inter.variable} h-screen ${spaceGrotesk.variable}  ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
