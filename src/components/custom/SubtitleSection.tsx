"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SubtitleSection({ text }: { text: string }) {
  return (
    <motion.div className="flex justify-center items-center mb-10">
      <p className="max-w-3xl text-center">{text}</p>
    </motion.div>
  );
}
