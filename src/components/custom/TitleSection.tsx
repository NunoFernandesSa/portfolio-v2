"use client";

import { motion } from "framer-motion";
import React from "react";

export default function TitleSection({ title }: { title: string }) {
  return (
    <motion.h2
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="mt-20 mb-12 text-center text-4xl"
    >
      {title}
    </motion.h2>
  );
}
