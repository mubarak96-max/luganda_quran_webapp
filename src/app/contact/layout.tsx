import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Luganda Quran – Sheikh Nkata Audio",
  description:
    "Get in touch with the team behind lugandaquran.online. Report issues, ask questions, or share feedback about the Luganda Quran audio website.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
