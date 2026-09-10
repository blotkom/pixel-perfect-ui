import { createFileRoute } from "@tanstack/react-router";
import { WyloWelcome } from "@/components/wylo-welcome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WYLO — Think Money Better" },
      { name: "description", content: "Your AI financial learning companion for better money decisions." },
      { property: "og:title", content: "WYLO — Think Money Better" },
      { property: "og:description", content: "Learn, make decisions, and build better money habits with WYLO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <WyloWelcome language="en" />;
}
