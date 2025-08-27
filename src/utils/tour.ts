/* eslint-disable @typescript-eslint/no-explicit-any */
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "../tour.css";

let currentTour: any = null;

export const createTour = () => {
  if (window.innerWidth < 768) return null;

  // If a tour already exists, destroy it to avoid duplicate steps
  if (currentTour) {
    currentTour.cancel();
    currentTour = null;
  }

  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      classes: "shepherd-element",
      scrollTo: { behavior: "smooth", block: "center" },
      cancelIcon: { enabled: true },
    },
    useModalOverlay: true,
  });

  // Step 1
  tour.addStep({
    id: "step-theme",
    title: "Light / Dark Mode",
    text: "Click here to switch between light and dark themes.",
    attachTo: { element: "#theme-toggle", on: "left" },
    buttons: [
      { text: "Next", action: () => tour.next(), classes: "shepherd-button" },
    ],
  });

  // Step 2
  tour.addStep({
    id: "step-readMore",
    title: "Read More",
    text: "Use this menu to know more about us.",
    attachTo: { element: "#read-more", on: "right" },
    buttons: [
      { text: "Next", action: () => tour.next(), classes: "shepherd-button" },
    ],
  });

  // Step 3
  tour.addStep({
    id: "step-basic",
    title: "Get Started",
    text: "By clicking this button you can get basic features.",
    attachTo: { element: "#basic-plan", on: "right" },
    buttons: [
      { text: "Next", action: () => tour.next(), classes: "shepherd-button" },
    ],
  });

  // Step 4
  tour.addStep({
    id: "step-pro",
    title: "Upgrade To Pro",
    text: "By clicking this button you can get Pro plan.",
    attachTo: { element: "#pro-plan", on: "right" },
    buttons: [
      { text: "Next", action: () => tour.next(), classes: "shepherd-button" },
    ],
  });

  // Step 5
  tour.addStep({
    id: "step-business",
    title: "Business Plan",
    text: "By clicking this button you can access business features.",
    attachTo: { element: "#business-plan", on: "right" },
    buttons: [
      {
        text: "Finish",
        action: () => tour.complete(),
        classes: "shepherd-button",
      },
    ],
  });

  // Store the tour globally so it can be cancelled before creating a new one
  currentTour = tour;

  return tour;
};
