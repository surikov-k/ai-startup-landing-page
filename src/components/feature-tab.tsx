import React, { HTMLAttributes, useEffect, useRef } from "react";

import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  ValueAnimationTransition,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

interface FeatureTabProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: string;
  isNew: boolean;
  selected: boolean;
}

export default function FeatureTab(props: FeatureTabProps) {
  const { title, icon, isNew, selected, onClick } = props;
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !selected) {
      return;
    }

    xPercentage.set(0);
    yPercentage.set(0);
    const { width, height } = tabRef.current?.getBoundingClientRect();
    const perimeter = width * 2 + height * 2;
    const times = [
      0,
      width / perimeter,
      (width + height) / perimeter,
      (width * 2 + height) / perimeter,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selected, xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (!dotLottieRef.current) {
      return;
    }
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onClick={onClick}
      onMouseEnter={handleTabHover}
      className="relative flex flex-1 items-center gap-2.5 rounded-xl p-2.5 outline outline-1 -outline-offset-1 outline-white/15"
    >
      {selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        ></motion.div>
      )}
      <div className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          className="size-5"
          autoplay
        />
      </div>
      <h3 className="text-base font-medium tracking-tighter">{title}</h3>
      {isNew && (
        <div className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
          new
        </div>
      )}
    </div>
  );
}
