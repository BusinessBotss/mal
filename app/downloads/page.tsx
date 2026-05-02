import type { Metadata } from "next";
import { getDownloads } from "../../../content/utils";
import { PageIntro } from "@/components/PageIntro";
import { WhatsappCTA } from "@/components/WhatsappCTA";

export const metadata: Metadata = {
  title: "Downloads — MallorcasLocal",
  description: "Free and premium downloadable guides for Mallorca.",
};

export default function DownloadsPage() {
  const downloads = getDownloads();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <PageIntro
        eyebrow="Resources"
        title="Downloads"
        subtitle="Curated guides, itineraries and checklists to plan your Mallorca trip."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {downloads.map((dl) => (
          <div
            key={dl.id}
            className="rounded-2xl border border-card-border bg-card-bg p-6 flex flex-col justify-between hover:border-accent/20 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] uppercase tracking-widest text-accent px-2.5 py-1 rounded-full border border-accent/20">
                  {dl.type}
                </span>
                {dl.isLocked && (
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    Premium
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{dl.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{dl.description}</p>
            </div>
            <div className="mt-6">
              {dl.isLocked && !dl.fileUrl ? (
                <a
                  href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola, quiero acceso al recurso: ${dl.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full text-sm font-medium px-6 py-3 rounded-full bg-accent text-background hover:bg-accent/90 transition-colors"
                >
                  Unlock via WhatsApp
                </a>
              ) : (
                <a
                  href={dl.fileUrl ?? "#"}
                  target={dl.fileUrl ? "_blank" : undefined}
                  rel={dl.fileUrl ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center w-full text-sm font-medium px-6 py-3 rounded-full border border-card-border text-foreground hover:bg-card-hover transition-colors"
                >
                  {dl.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <WhatsappCTA label="Need a custom guide? Chat with us" message="Hola, quiero una guía personalizada" />
    </div>
  );
}
