import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`bg-red-500 mt-16 ${className}`}>{children}</section>
  );
}
