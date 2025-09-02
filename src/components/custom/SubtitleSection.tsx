"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SubtitleSection({ text }: { text: string }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center items-center mb-10"
    >
      <p className="max-w-3xl text-center">{text}</p>
    </motion.div>
  );
}
