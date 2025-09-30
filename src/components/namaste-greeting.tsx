"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof motion.div> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

export function NamasteGreetingEffect({
  className,
  speed: _speed = 1, // Prefixed with underscore to indicate intentionally unused
  onAnimationComplete,
  ...props
}: Props) {
  return (
    <motion.div
      className={cn(
        "flex h-20 items-center justify-center text-4xl font-bold",
        className
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
      {...props}
    >
      🙏 नमस्ते
    </motion.div>
  );
}
