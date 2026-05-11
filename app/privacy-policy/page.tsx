import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Hub Plumbing & Mechanical",
  description:
    "Privacy policy for Hub Plumbing & Mechanical. Learn how we collect, use, and protect your information.",
  alternates: { canonical: "https://hub-plumbing-nyc.vercel.app/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
