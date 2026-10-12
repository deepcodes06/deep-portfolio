
import type { Metadata } from "next";
import CV from "@/components/CV";

export const metadata: Metadata = {
  title: "CV — Deep Soni",
  description:
    "View Deep Soni's developer CV, including internship experience at DAM Networks LLP, technical skills, and professional contributions.",
};

export default function CVPage() {
  return <CV />;
}
