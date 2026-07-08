/**
 * Case study content — single source of truth for portfolio detail pages.
 * Add screenshots under /public/projects/<slug>/ (see public/projects/README.md).
 */

export type CaseStudyMetric = {
  value: string
  label: string
}

export type CaseStudySection = {
  title: string
  body: string
  bullets?: string[]
}

export type CaseStudyGalleryItem = {
  /** Path under /public, e.g. /projects/hostella/dashboard.png */
  src: string
  alt: string
  caption?: string
  /** Use "mobile" for tall portrait screenshots; "wide" for hero banners */
  variant?: "standard" | "wide" | "mobile"
}

export type CaseStudy = {
  slug: string
  title: string
  category: string
  tagline: string
  summary: string
  client: string
  year: string
  role: string
  status: string
  liveUrl?: string
  accentFrom: string
  accentTo: string
  coverImage: string
  tech: string[]
  metrics: CaseStudyMetric[]
  challenge: CaseStudySection
  approach: CaseStudySection
  solution: CaseStudySection
  outcomes: CaseStudySection
  gallery: CaseStudyGalleryItem[]
  seoDescription: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "hostella",
    title: "Hostella",
    category: "Technical Engineering",
    tagline: "End-to-end hostel operations for modern campuses.",
    summary:
      "A full-stack hostel management platform that unifies room booking, fee collection, and student self-service, replacing fragmented spreadsheets and manual queues with a single, reliable system.",
    client: "Hostella",
    year: "2025",
    role: "Product design & full-stack engineering",
    status: "Completed · Live",
    liveUrl: "https://hostellapp.com",
    accentFrom: "#1a160e",
    accentTo: "#4a3a12",
    coverImage: "/projects/hostella.png",
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Paystack", "Tawk.to"],
    metrics: [
      { value: "100%", label: "Digital fee collection" },
      { value: "24/7", label: "Student self-service" },
      { value: "1", label: "Unified admin console" },
      { value: "Live", label: "Production deployment" },
    ],
    challenge: {
      title: "The challenge",
      body:
        "University and private hostels were running on paper ledgers, WhatsApp threads, and ad-hoc payment tracking. Students queued for room assignments; administrators reconciled fees by hand. The client needed a trustworthy platform that could handle bookings, payments, and reporting without adding operational overhead.",
      bullets: [
        "Fragmented booking and payment workflows across channels",
        "No single source of truth for room availability and occupancy",
        "Manual reconciliation of hostel fees and student records",
        "Limited visibility for students on booking status and payments",
      ],
    },
    approach: {
      title: "Our approach",
      body:
        "We started with operational mapping; shadowing admin workflows and identifying the minimum viable path from inquiry to confirmed booking and paid fees. Architecture favoured a clear separation between the student-facing app and the admin console, with PostgreSQL as the system of record and Paystack for secure payments.",
      bullets: [
        "Mapped admin and student journeys before writing production code",
        "Designed a role-aware data model for rooms, beds, and allocations",
        "Prioritised mobile-friendly flows for students on campus networks",
        "Integrated live chat support for onboarding and student enquiries",
      ],
    },
    solution: {
      title: "What we built",
      body:
        "Hostella delivers a student portal for browsing availability, reserving rooms, and paying fees, alongside an admin dashboard for allocations, occupancy, and financial reporting. Real-time validation prevents double-booking; payment webhooks keep ledger state in sync.",
      bullets: [
        "Room and bed inventory with live availability",
        "Secure online payments via Paystack",
        "Student booking history and receipt access",
        "Admin dashboards for occupancy and fee tracking",
        "Embedded support chat for student assistance",
      ],
    },
    outcomes: {
      title: "Outcomes",
      body:
        "The platform replaced manual coordination with a single operational hub. Students complete bookings and payments independently; administrators gain accurate occupancy and revenue visibility from day one.",
      bullets: [
        "Streamlined end-to-end booking and payment flow",
        "Reduced admin time spent on manual reconciliation",
        "Improved student experience with transparent status updates",
        "Scalable foundation for additional hostels and campuses",
      ],
    },
    gallery: [
      {
        src: "/projects/hostella.png",
        alt: "Hostella: landing and marketing view",
        caption: "Public-facing entry point and brand presence",
      },
      {
        src: "/projects/hostella/admin_dashboard.png",
        alt: "Hostella: admin dashboard",
        caption: "Admin dashboard: occupancy, allocations, and fee overview",
      },
      {
        src: "/projects/hostella/student_booking.png",
        alt: "Hostella: student booking flow",
        caption: "Student booking flow: browse, select, and confirm",
      },
      {
        src: "/projects/hostella/mobile_view.png",
        alt: "Hostella: mobile experience",
        caption: "Mobile-optimised experience for on-campus use",
        variant: "mobile",
      },
    ],
    seoDescription:
      "How Umbrelabs designed and engineered Hostella; a full-stack hostel management platform with room booking, Paystack payments, and admin reporting.",
  },
  {
    slug: "procobiz",
    title: "Procobiz",
    category: "Process Optimisation",
    tagline: "A procurement partner positioned for trust at first glance.",
    summary:
      "A corporate web presence for a procurement and supply company, translating complex service lines into a clear, credible digital experience optimised for performance, responsiveness, and future growth.",
    client: "Procobiz",
    year: "2025",
    role: "Brand experience & web engineering",
    status: "Completed · Live",
    liveUrl: "https://procobiz.com",
    accentFrom: "#0b3b38",
    accentTo: "#0b6b63",
    coverImage: "/projects/procobiz.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    metrics: [
      { value: "< 2s", label: "Target load time" },
      { value: "100%", label: "Responsive layouts" },
      { value: "SEO", label: "Structured metadata" },
      { value: "Live", label: "Production on Vercel" },
    ],
    challenge: {
      title: "The challenge",
      body:
        "Procobiz needed more than a brochure site; they required a professional platform that communicated procurement expertise, service breadth, and reliability to enterprise buyers. The previous digital footprint did not reflect the calibre of their operations or support their growth into new markets.",
      bullets: [
        "Weak brand positioning relative to offline reputation",
        "Unclear presentation of services and capabilities",
        "No scalable structure for future case studies and content",
        "Performance and mobile experience below modern expectations",
      ],
    },
    approach: {
      title: "Our approach",
      body:
        "We led with information architecture, grouping services, process, and credibility signals into a narrative that guides visitors from awareness to enquiry. The stack was chosen for speed of iteration, excellent Core Web Vitals, and a component system that keeps the UI consistent as content grows.",
      bullets: [
        "Content hierarchy aligned to procurement buyer journeys",
        "Component-driven UI with shadcn/ui for consistency",
        "Performance-first Next.js architecture on Vercel",
        "SEO foundations: metadata, semantic structure, and share previews",
      ],
    },
    solution: {
      title: "What we built",
      body:
        "A polished corporate site with dedicated service sections, trust indicators, and clear calls to action — built on a modular page system that Procobiz can extend without re-engineering the foundation.",
      bullets: [
        "Service and capability pages with clear value propositions",
        "Responsive layouts tuned for executive and mobile audiences",
        "Contact and enquiry pathways with low friction",
        "Deploy pipeline via Vercel for reliable releases",
        "Extensible content structure for future growth",
      ],
    },
    outcomes: {
      title: "Outcomes",
      body:
        "Procobiz now presents a cohesive, professional digital identity that matches their in-person credibility with a technical foundation ready for new service lines, case studies, and regional expansion.",
      bullets: [
        "Elevated brand perception for enterprise procurement buyers",
        "Faster, more accessible experience across devices",
        "Clear service storytelling that supports sales conversations",
        "Scalable codebase for ongoing content and feature work",
      ],
    },
    gallery: [
      {
        src: "/projects/procobiz.png",
        alt: "Procobiz — homepage hero",
        caption: "Homepage: immediate clarity on services and positioning",
      },
      {
        src: "/projects/procobiz/procobiz_services.png",
        alt: "Procobiz — services section",
        caption: "Services: structured capability presentation",
      },
      {
        src: "/projects/procobiz/procobiz_about.png",
        alt: "Procobiz — about and credibility",
        caption: "About: trust, process, and company narrative",
      },
      {
        src: "/projects/procobiz/procobiz_contact.png",
        alt: "Procobiz — contact and enquiry",
        caption: "Contact: low-friction enquiry pathways",
      },
    ],
    seoDescription:
      "How Umbrelabs built Procobiz — a performance-optimised corporate website for a procurement and supply company, with clear service positioning and scalable architecture.",
  },

]

const bySlug = new Map(caseStudies.map((cs) => [cs.slug, cs]))

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return bySlug.get(slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug)
}

export function getAdjacentCaseStudies(slug: string): { prev?: CaseStudy; next?: CaseStudy } {
  const index = caseStudies.findIndex((cs) => cs.slug === slug)
  if (index === -1) return {}
  return {
    prev: index > 0 ? caseStudies[index - 1] : undefined,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined,
  }
}
