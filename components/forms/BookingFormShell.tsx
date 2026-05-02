interface BookingFormShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function BookingFormShell({ title, subtitle, children }: BookingFormShellProps) {
  return (
    <div className="rounded-3xl border border-card-border bg-card-bg p-8 sm:p-10 max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted mt-2">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

export function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}

export const inputClass =
  "w-full bg-background border border-card-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors";

export const selectClass =
  "w-full bg-background border border-card-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer";
