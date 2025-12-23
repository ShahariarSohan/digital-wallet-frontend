export default function Menu4({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="5" x2="21" y2="5" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}
