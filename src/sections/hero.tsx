"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import starsBg from "@/assets/stars.png";
import Button from "@/components/button";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"></div>

      {/*Start Planet*/}
      <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_16.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,59,255)] md:size-96"></div>
      {/*End Planet*/}

      {/*Start Ring 1*/}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 size-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-15 md:size-[580px]"
      >
        <div className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white"></div>
      </motion.div>
      {/*End Ring 1*/}

      {/*Start Ring 2*/}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 size-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:size-[780px]"
      ></motion.div>
      {/*End Ring 2*/}

      {/*Start Ring 3*/}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 size-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white opacity-20 md:size-[980px]"
      >
        <div className="absolute left-0 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </motion.div>
      {/*End Ring 3*/}

      <div className="container relative mt-16">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent md:text-[168px] md:leading-none md:tracking-tighter md:[margin-left:-0.05em]">
          AI SEO
        </h1>
        <p className="mt-5 text-center text-lg tracking-tight text-white/70 md:mx-auto md:max-w-xl md:text-xl">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
