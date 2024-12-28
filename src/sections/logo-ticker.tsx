"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";

const brands = [
  acmeLogo,
  pulseLogo,
  echoLogo,
  celestialLogo,
  apexLogo,
  quantumLogo,
];
export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{
                translateX: "0",
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="flex flex-none -translate-x-1/2 gap-14 pr-14"
            >
              {[...brands, ...brands].map((brand, i) => (
                <Image
                  src={brand}
                  key={brand.src + i}
                  alt=""
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
