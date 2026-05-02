import Link from "next/link";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "whatsapp";
  external?: boolean;
}

export function CTAButton({ href, label, variant = "primary", external }: CTAButtonProps) {
  const base = "inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-full transition-colors";
  const variants = {
    primary: "bg-accent text-background hover:bg-accent/90",
    secondary: "border border-card-border text-foreground hover:bg-card-hover",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]}`}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {label}
    </Link>
  );
}
