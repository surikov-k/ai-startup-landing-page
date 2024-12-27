import { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

export default function Button({
  className = undefined,
  children = "Click me",
}: ComponentPropsWithoutRef<"div">) {
  return (
    <button
      className={twMerge(
        "relative rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-semibold shadow-[0px_0px_12px_#8c45ff]",
        className
      )}
    >
      <span className="absolute inset-0">
        <div className="absolute inset-0 rounded-lg border border-white/25 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <span className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></span>
      </span>
      <span>{children}</span>
    </button>
  );
}
