"use client";

import { useRef } from "react";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import gridlinesImage from "@/assets/grid-lines.png";
import starsImage from "@/assets/stars.png";
import Button from "@/components/button";
import useRelativeMousePosition from "@/hooks/use-relative-mouse-position";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderedDivRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(25% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: starsImage.width,
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="group relative overflow-hidden rounded-xl py-24 outline outline-1 -outline-offset-1 outline-white/15"
          style={{
            backgroundImage: `url(${starsImage.src})`,
            backgroundPositionY,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay transition duration-700 ease-in-out [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0"
            style={{
              backgroundImage: `url(${gridlinesImage.src})`,
              backgroundPosition: "center",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] opacity-0 bg-blend-overlay transition duration-700 ease-in-out group-hover:opacity-100"
            style={{
              maskImage,
              backgroundImage: `url(${gridlinesImage.src})`,
              backgroundPosition: "center",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto text-center text-5xl font-medium leading-none tracking-tighter md:max-w-sm md:text-6xl">
              AI-driven SEO for everyone.
            </h2>
            <p className="mt-5 px-4 text-center text-lg tracking-tight text-white/70 md:mx-auto md:max-w-xs">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mt-5 flex justify-center">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
