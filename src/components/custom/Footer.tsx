/**
 * Node modules / Next
 */
import React from "react";
import Link from "next/link";

/**
 * Shadcn components
 */
import { Button } from "../ui/shadcn/button";

/**
 * Custom components
 */
import Section from "./Section";

export default function Footer() {
  return (
    <Section className="border-t-2">
      <div className="max-w-6xl flex flex-wrap justify-between items-center gap-3 mx-auto my-3">
        <div className="text-sm font-light">
          &copy;2025 nunofernandes-dev.com
        </div>
        <Button variant="outline" size="sm">
          <Link href={""} className="text-sm font-light">
            Legal notice
          </Link>
        </Button>
      </div>
    </Section>
  );
}
