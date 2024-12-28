import { CallToAction } from "@/sections/call-to-action";
import { Features } from "@/sections/features";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
