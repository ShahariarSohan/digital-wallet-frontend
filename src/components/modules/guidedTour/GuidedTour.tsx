"use client";
import { createTour } from "@/utils/tour";
import { useEffect } from "react";

export default function GuidedTour() {
  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");

    if (!hasSeenTour) {
      const tour = createTour();

      if (tour) {
        tour.start(); // ✅ safe, only runs if not null
        localStorage.setItem("hasSeenTour", "true");
      }
    }
  }, []);

  return null; // invisible component
}
