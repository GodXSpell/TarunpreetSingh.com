"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { TarunpreetSinghMark } from "./tarunpreet-singh-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? (
    <TarunpreetSinghMarkMotion />
  ) : (
    <TarunpreetSinghMark />
  );
}

function TarunpreetSinghMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 10.88 34.12 34.12"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <path
        fill="currentColor"
        d="M1.77 11.96v-1.08h8.17v1.08H7.07v32.04H5.87V11.96H1.77ZM22.43 45.09c-2.89 0-5.34-0.61-7.36-1.84-2.02-1.23-3.58-3.04-4.69-5.43-1.11-2.39-1.66-5.29-1.66-8.71 0-3.42 0.55-6.31 1.66-8.68 1.11-2.37 2.68-4.17 4.69-5.37 2.01-1.2 4.47-1.8 7.36-1.8 2.89 0 5.35 0.6 7.36 1.8 2.01 1.2 3.58 3 4.69 5.37 1.11 2.37 1.66 5.26 1.66 8.68 0 3.42-0.55 6.32-1.66 8.71-1.11 2.39-2.68 4.2-4.69 5.43C27.78 44.48 25.32 45.09 22.43 45.09zM22.43 43.89c2.43 0 4.44-0.54 6.04-1.61 1.6-1.07 2.8-2.64 3.61-4.71 0.81-2.07 1.21-4.6 1.21-7.59 0-2.99-0.4-5.51-1.21-7.58-0.81-2.07-2.01-3.63-3.61-4.67-1.6-1.04-3.61-1.56-6.04-1.56-2.43 0-4.44 0.52-6.04 1.56-1.6 1.04-2.8 2.6-3.61 4.67-0.81 2.07-1.21 4.59-1.21 7.58 0 2.99 0.4 5.52 1.21 7.59 0.81 2.07 2.01 2.64 3.61 4.71C17.99 43.35 20 43.89 22.43 43.89z"
      />
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
