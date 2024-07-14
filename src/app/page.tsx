import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/common/ScrollTop";
import About from "@/components/home/About";

import Carousal from "@/components/home/Carousal";
import CoreTeam from "@/components/home/CoreTeam";
import Donate from "@/components/home/Donate";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "@/components/ui/text-reveal-card";

import { WavyBackground } from "@/components/ui/wavy-background";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      {/* <Carousal /> */}
      {/* <Stats /> */}
      {/* <Donate /> */}
      {/* <Testimonials /> */}

      <About />
      {/* <Timeline></Timeline> */}
      {/* <Carts></Carts> */}
      <Team></Team>

      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </main>
  );
}
