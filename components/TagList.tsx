interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2.5 py-1 rounded-full bg-card-border text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
