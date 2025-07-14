import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyView } from "@/components/views/CaseStudyView";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyView caseStudy={caseStudy} />;
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}