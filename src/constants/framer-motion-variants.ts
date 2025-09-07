import { Variants } from "framer-motion";

export const iconVariants = (duration: number): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: [0, -8, 0],
    transition: {
      opacity: { duration: 2 },
      scale: { duration: 1 },
      y: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  },
});
