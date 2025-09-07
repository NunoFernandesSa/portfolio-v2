"use client";

import { motion } from "framer-motion";
import React from "react";

export default function TitleSection({ title }: { title: string }) {
  return (
    <motion.h2 className="mt-30 mb-12 text-center text-4xl">{title}</motion.h2>
  );
}
