"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof motion.div> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

export function NamasteGreetingEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  return (
    <motion.div
      className={cn("flex items-center justify-center h-20 text-4xl font-bold", className)}
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