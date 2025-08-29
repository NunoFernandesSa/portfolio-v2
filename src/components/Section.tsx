import React from "react";

export default function Section({ children }: { children: React.ReactNode }) {
  return <section className="bg-red-500 mt-16">{children}</section>;
}
