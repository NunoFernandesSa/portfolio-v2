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
