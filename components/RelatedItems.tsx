import { CardGrid, type CardItem } from "./CardGrid";
import { SectionTitle } from "./SectionTitle";

interface RelatedItemsProps {
  items: CardItem[];
  basePath: string;
  title?: string;
}

export function RelatedItems({ items, basePath, title = "You might also like" }: RelatedItemsProps) {
  if (items.length === 0) return null;
  return (
    <section className="mt-20">
      <SectionTitle title={title} />
      <CardGrid items={items} basePath={basePath} columns={4} />
    </section>
  );
}
