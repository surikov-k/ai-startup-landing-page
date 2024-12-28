"use client";

import React, { useState } from "react";

import {
  ValueAnimationTransition,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import productImage from "@/assets/product-image-2.png";
import FeatureTab from "@/components/feature-tab";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index: number) => {
    setActiveTab(index);
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="my-20 md:my-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium leading-none tracking-tighter md:text-6xl md:[margin-left:-0.05em]">
          Elevate your SEO efforts.
        </h2>
        <p className="mt-5 text-center text-lg tracking-tight text-white/70 md:mx-auto md:max-w-xl md:text-xl">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab, index) => (
            <FeatureTab
              key={tab.title}
              onClick={() => handleSelectTab(index)}
              selected={activeTab === index}
              {...tab}
            />
          ))}
        </div>
        <div className="mt-3 rounded-xl p-2.5 outline outline-1 -outline-offset-1 outline-white/15">
          <motion.div
            className="h-[170px] rounded-lg outline outline-1 -outline-offset-1 outline-white/15 md:h-[398px] lg:h-[573px]"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundSize,
              backgroundPosition,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
