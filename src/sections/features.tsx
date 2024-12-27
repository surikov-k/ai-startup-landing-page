"use client";

import React from "react";

import { DotLottiePlayer } from "@dotlottie/react-player";

import productImage from "@/assets/product-image-2.png";

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
  return (
    <section className="my-20 md:my-24">
      <div className="container">
        <h1 className="text-center text-5xl font-medium leading-none tracking-tighter md:text-6xl md:[margin-left:-0.05em]">
          Elevate your SEO efforts.
        </h1>
        <p className="mt-5 text-center text-lg tracking-tight text-white/70 md:mx-auto md:max-w-xl md:text-xl">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map(
            ({
              icon,
              title,
              isNew,
              backgroundPositionX,
              backgroundPositionY,
              backgroundSizeX,
            }) => (
              <div
                key={title}
                className="flex flex-1 items-center gap-2.5 rounded-xl p-2.5 outline outline-1 -outline-offset-1 outline-white/15"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15">
                  <DotLottiePlayer src={icon} className="size-5" autoplay />
                </div>
                <h3 className="text-base font-medium tracking-tighter">
                  {title}
                </h3>
                {isNew && (
                  <div className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
                    new
                  </div>
                )}
              </div>
            )
          )}
        </div>
        <div className="mt-3 rounded-xl p-2.5 outline outline-1 -outline-offset-1 outline-white/15">
          <div
            className="h-[170px] rounded-lg bg-cover outline outline-1 -outline-offset-1 outline-white/15 md:h-[398px] lg:h-[573px]"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundSize: "cover", // Ensures the image covers the entire div without distortion
              backgroundPosition: "top left", // Centers the image within the div
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              // backgroundPositionX: `${tabs[2].backgroundPositionX}%`,
              // backgroundPositionY: `${tabs[2].backgroundPositionY}%`,
              // backgroundSize: `${tabs[2].backgroundSizeX}% auto`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
