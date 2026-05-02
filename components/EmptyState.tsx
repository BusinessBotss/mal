interface EmptyStateProps {
  message?: string;
  suggestion?: string;
}

export function EmptyState({
  message = "No results match your filters.",
  suggestion = "Try adjusting your search or clearing a filter.",
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-card-border bg-card-bg p-12 text-center">
      <svg
        className="w-12 h-12 text-muted/40 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <p className="text-base text-muted font-medium">{message}</p>
      <p className="text-sm text-muted/70 mt-2">{suggestion}</p>
    </div>
  );
}
