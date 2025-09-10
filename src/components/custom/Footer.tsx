"use client";

// ----- Node modules / Next.js -----
import { useState } from "react";

// ----- Shadcn components -----
import { Button } from "@/components/ui/shadcn/button";

// ----- Custom components -----
import Section from "./Section";
import { Modal } from "./modal/Modal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className="border-t-2">
      <div className="max-w-6xl flex flex-wrap justify-center md:justify-between items-center gap-3 mx-auto my-3">
        <div className="text-sm font-light">
          &copy;2025 nunofernandes-dev.com
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
          size={"sm"}
        >
          Legal notices
        </Button>
      </div>

      {/* ===== RGPD Modal ===== */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Legal Notices"
        ></Modal>
      )}
    </Section>
  );
}
