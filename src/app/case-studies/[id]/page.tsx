import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyView } from "@/components/views/CaseStudyView";

interface CaseStudyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyView caseStudy={caseStudy} />;
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    id: caseStudy.id,
  }));
}