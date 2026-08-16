import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Industries from "@/components/Industries/Industries";
import Technologies from "@/components/Technologies/Technologies";
import Services from "@/components/Services/Services";
import Stats from "@/components/Statistics/Statistics";
import Careers from "@/components/CareersCTA/CareersCTA";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Industries />
        <Technologies />
        <Services />
        <Stats />
        <Careers />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}