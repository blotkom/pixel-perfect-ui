import { createFileRoute } from "@tanstack/react-router";

import { WyloWelcome } from "@/components/wylo-welcome";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: "وايلو — افهم فلوسك وفكّر أحسن" },
      { name: "description", content: "وايلو شريكك الذكي في التعلم المالي واتخاذ قرارات أفضل." },
      { property: "og:title", content: "وايلو — افهم فلوسك وفكّر أحسن" },
      { property: "og:description", content: "تعلّم واتخذ قراراتك وشاهد النتائج مع وايلو." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArabicWelcome,
});

function ArabicWelcome() {
  return <WyloWelcome language="ar" />;
}