"use client";

/**
 * Motion-framer
 */
import { motion } from "framer-motion";

/**
 * Shadcn components
 */
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/tooltip";

/**
 * Custom Types
 */
import { iconVariants } from "@/constants/framer-motion-variants";
import { TechIconType } from "@/types/techIconsTypes";

export default function TechIcon({ name, icon, motionDelay }: TechIconType) {
  return (
    <motion.div
      variants={iconVariants(motionDelay)}
      initial="initial"
      animate="animate"
      // variants={{
      //   initial: {
      //     opacity: 1,
      //     y: -10,
      //   },
      //   animate: {
      //     y: [8, -8],
      //     transition: {
      //       duration: 2.5,
      //       ease: "linear",
      //       repeat: Infinity,
      //       repeatType: "reverse",
      //     },
      //   },
      // }}
    >
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent>
          <span>{name}</span>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}
