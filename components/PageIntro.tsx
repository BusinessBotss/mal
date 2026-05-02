import { CTAButton } from "./CTAButton";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function PageIntro({ eyebrow, title, subtitle, ctaHref, ctaLabel }: PageIntroProps) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-accent mb-2">{eyebrow}</p>
      )}
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-lg text-muted mt-3 max-w-2xl">{subtitle}</p>
      )}
      {ctaHref && ctaLabel && (
        <div className="mt-6">
          <CTAButton href={ctaHref} label={ctaLabel} variant="whatsapp" external />
        </div>
      )}
    </div>
  );
}
