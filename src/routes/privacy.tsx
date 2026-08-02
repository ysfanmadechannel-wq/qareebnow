import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Qareeb" },
      { name: "description", content: "How Qareeb collects, uses, protects and deletes your personal information." },
      { property: "og:title", content: "Privacy Policy — Qareeb" },
      { property: "og:description", content: "How Qareeb collects, uses, protects and deletes your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const paragraphs = [
  "We collect personal details such as your name, phone number, CNIC, location, and profile photo to verify identities, ensure safety, and connect Users with Helpers.",
  "We also record ratings, reviews, and in-app communication for quality control and dispute resolution.",
  "Your information may be shared with trusted third parties such as payment processors (e.g. Easypaisa, JazzCash) or law enforcement if required by law.",
  "We never sell your data to advertisers.",
  "Location information is only accessed during active jobs to enable accurate matching and navigation.",
  "CNIC images and sensitive data are encrypted and deleted within 90 days unless required for legal reasons.",
  "You can request to update or delete your data anytime via the in-app support feature. However, certain records may be retained for legal compliance and security purposes.",
  "Users under 18 years of age are not permitted to use Qareeb.",
  "By continuing to use Qareeb, you agree to this Privacy Policy.",
];

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy and data security are important to us. By using Qareeb, you consent to the collection and use of your information as described here."
      paragraphs={paragraphs}
    />
  );
}
