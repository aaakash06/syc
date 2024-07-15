import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/common/ScrollTop";
import About from "@/components/home/About";

import Donate from "@/components/home/Donate";

import Hero from "@/components/home/Hero";

import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";

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
