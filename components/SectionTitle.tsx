interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-accent mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted mt-3 max-w-2xl text-base">{description}</p>
      )}
    </div>
  );
}
