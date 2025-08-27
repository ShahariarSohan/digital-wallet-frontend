// SettingsPage.tsx


import RestartTourButton from "@/components/ui/RestartTourButton";
import { createTour } from "@/utils/tour";


export default function SettingsPage() {
  const restartTour = () => {
    localStorage.removeItem("hasSeenTour");
    const tour = createTour();
    tour.start();
  };

  return (
    
      <div onClick={restartTour} className="flex justify-end">
        <RestartTourButton restartTour={restartTour} />
      </div>
    
  );
}
