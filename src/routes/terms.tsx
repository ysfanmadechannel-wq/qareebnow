import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site-chrome";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Qareeb" },
      { name: "description", content: "The terms that govern the use of Qareeb by Users and Helpers." },
      { property: "og:title", content: "Terms & Conditions — Qareeb" },
      { property: "og:description", content: "The terms that govern the use of Qareeb by Users and Helpers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const paragraphs = [
  'Qareeb is a platform that connects people in need of assistance ("Users") with independent service providers ("Helpers"). We do not employ Helpers and are not responsible for their actions, behavior, or unlawful acts.',
  "All interactions, payments, and agreements are made at your own risk.",
  "Users and Helpers must provide accurate identification and contact details.",
  "Misuse of the app, false information, harassment, unsafe conduct, or illegal activities will result in suspension or permanent removal from the platform.",
  "All payments for services must be settled as agreed between User and Helper, and any disputes should be reported through the in-app complaint system.",
  "Qareeb may assist in resolving disputes but does not guarantee refunds unless required by applicable law.",
  "For safety, both Users and Helpers must complete ratings and reviews after each job.",
  "Qareeb may suspend accounts with poor ratings, repeated complaints, or unverified information.",
  "By continuing, you acknowledge that Qareeb is not liable for any damage, loss, injury, or legal claim arising from your use of the platform.",
  "You agree to use Qareeb lawfully, responsibly, and respectfully towards all parties.",
];

function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="By using Qareeb, you agree to our terms and conditions."
      paragraphs={paragraphs}
    />
  );
}
