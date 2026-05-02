import { TagList } from "./TagList";
import { MapsButton } from "./MapsButton";
import { CTAButton } from "./CTAButton";
import { WhatsappCTA } from "./WhatsappCTA";
import { zoneLabels, difficultyLabels } from "../../content/utils";
import type { IslandZone, AccessDifficulty } from "../../content/types";

interface DetailHeaderProps {
  name: string;
  description: string;
  zone: IslandZone;
  difficulty?: AccessDifficulty;
  priceText?: string;
  town?: string;
  googleMapsUrl: string;
  tags?: string[];
  notes?: string;
  cuisine?: string[];
  backHref: string;
  backLabel: string;
}

export function DetailHeader({
  name,
  description,
  zone,
  difficulty,
  priceText,
  town,
  googleMapsUrl,
  tags,
  notes,
  cuisine,
  backHref,
  backLabel,
}: DetailHeaderProps) {
  return (
    <div className="mb-12">
      <CTAButton href={backHref} label={`\u2190 ${backLabel}`} variant="secondary" />

      <div className="mt-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-widest text-accent">
            {zoneLabels[zone]}
          </span>
          {difficulty && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-card-border text-muted">
              {difficultyLabels[difficulty]}
            </span>
          )}
          {priceText && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-card-border text-muted">
              {priceText}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">{name}</h1>

        {town && (
          <p className="text-muted mt-2 text-lg">{town}</p>
        )}

        {/* Description */}
        <p className="text-lg text-muted mt-4 max-w-2xl leading-relaxed">{description}</p>

        {/* Notes */}
        {notes && (
          <div className="mt-6 rounded-xl border border-card-border bg-card-bg p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Notes</p>
            <p className="text-sm text-muted">{notes}</p>
          </div>
        )}

        {/* Cuisine */}
        {cuisine && cuisine.length > 0 && (
          <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-2">Cuisine</p>
            <div className="flex flex-wrap gap-2">
              {cuisine.map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <MapsButton url={googleMapsUrl} />
          <WhatsappCTA
            variant="inline"
            label="Reservar por WhatsApp"
            message={`Hola, quiero info sobre ${name}`}
          />
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-6">
            <TagList tags={tags} />
          </div>
        )}
      </div>
    </div>
  );
}
