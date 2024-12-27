import { Features } from "@/sections/features";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { LogoTicker } from "@/sections/logo-ticker";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
    </>
  );
}
