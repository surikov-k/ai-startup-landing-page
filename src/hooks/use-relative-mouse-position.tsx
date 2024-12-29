import { RefObject, useEffect } from "react";

import { useMotionValue } from "framer-motion";

export default function useRelativeMousePosition(
  to: RefObject<HTMLDivElement | null>
) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!to?.current) {
        return;
      }

      const { left, top } = to.current.getBoundingClientRect();
      mouseX.set(event.x - left);
      mouseY.set(event.y - top);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY, to]);

  return [mouseX, mouseY];
}
