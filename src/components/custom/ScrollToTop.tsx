"use client";

import { useState, useEffect, useRef } from "react";
import { TbChevronsUp } from "react-icons/tb";
import { Button } from "@/components/ui/shadcn/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInHeader, setIsInHeader] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Trouver le header dans le DOM
    headerRef.current =
      document.querySelector("header") || document.querySelector(".header");

    const toggleVisibility = () => {
      // Afficher le bouton après 300px de scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Vérifier si on est dans le header
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        setIsInHeader(window.scrollY < headerRect.height);
      } else {
        // Fallback si le header n'est pas trouvé
        setIsInHeader(window.scrollY < 100);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Vérifier aussi au chargement
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isInHeader || !isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full p-0 cursor-pointer bg-purple-500/50 border-purple-500/10 shadow-md shadow-purple-500/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
      aria-label="Back to top"
    >
      <TbChevronsUp />
    </Button>
  );
}
