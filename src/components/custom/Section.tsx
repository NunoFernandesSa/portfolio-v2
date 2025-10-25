import React from "react";

/**
 * Types
 */
import { SectionProps } from "@/types/SectionProps";

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`mt-12 md:mt-30 xl:mt-40 ${className}`}>
      {children}
    </section>
  );
}
