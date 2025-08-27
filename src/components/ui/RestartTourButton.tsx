import { Settings } from "lucide-react";

export default function RestartTourButton({
  restartTour,
}: {
  restartTour: () => void;
}) {
  return (
    <button
      onClick={restartTour}
      className="p-2 rounded-full hover:bg-muted transition-colors"
      aria-label="Restart Tour"
      title="Reset Tour"
    >
      <Settings className="h-5 w-5 text-primary" />
    </button>
  );
}
