import { Variants } from "framer-motion";

export const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

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
