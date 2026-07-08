import type { Metadata } from "next"
import { notFound } from "next/navigation"
import CaseStudyView from "@/components/case-study-view"
import {
  getAdjacentCaseStudies,
  getAllCaseStudySlugs,
  getCaseStudy,
} from "@/lib/case-studies"
import { absoluteUrl } from "@/lib/site"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}

  const path = `/portfolio/${slug}`

  return {
    title: `${study.title} — Case Study`,
    description: study.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${study.title} · Umbrelabs`,
      description: study.seoDescription,
      url: absoluteUrl(path),
      images: study.coverImage ? [{ url: study.coverImage }] : undefined,
    },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const { prev, next } = getAdjacentCaseStudies(slug)

  return <CaseStudyView study={study} prev={prev} next={next} />
}
