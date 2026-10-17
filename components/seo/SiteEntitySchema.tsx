import { buildNewbridgeEntityGraph } from "@/lib/newbridge-entity-schema";

export default function SiteEntitySchema() {
  const schema = buildNewbridgeEntityGraph();
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
