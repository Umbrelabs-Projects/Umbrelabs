"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield
} from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and drive real results."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, becoming trusted partners in their success journey."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative thinking to solve complex challenges in novel ways."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in everything we do."
    }
  ]

  const team = [
    {
      name: "Atta papa",
      role: "CEO & Co-Founder",
      bio: "Former tech executive with 15+ years in product strategy and digital transformation.",
      image: "/placeholder-user.jpg",
      expertise: ["Strategy", "Leadership", "Product Development"]
    },
    {
      name: "Atta Maame",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect specializing in scalable systems and emerging technologies.",
      image: "/placeholder-user.jpg",
      expertise: ["Architecture", "DevOps", "AI/ML"]
    },
    {
      name: "Atta",
      role: "Head of Design",
      bio: "Award-winning UX/UI designer with a passion for human-centered design solutions.",
      image: "/placeholder-user.jpg",
      expertise: ["UX Design", "Brand Strategy", "Design Systems"]
    },
    {
      name: "Koo",
      role: "Head of Engineering",
      bio: "Engineering leader with expertise in agile development and team scaling.",
      image: "/placeholder-user.jpg",
      expertise: ["Engineering", "Agile", "Team Leadership"]
    }
  ]

  const milestones = [
    { year: "2016", event: "Company founded with vision to democratize access to comprehensive tech solutions" },
    { year: "2018", event: "Expanded to full-service agency offering design, development, and consulting" },
    { year: "2020", event: "Launched innovation lab focusing on emerging technologies and AI" },
    { year: "2022", event: "Achieved unicorn status with 200+ successful projects across 15 industries" },
    { year: "2024", event: "Opened offices in 3 continents, serving clients worldwide" }
  ]

  const stats = [
    { label: "Years in Business", value: "8+", icon: Clock },
    { label: "Projects Completed", value: "200+", icon: CheckCircle },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Client Satisfaction", value: "98%", icon: Star }
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedBackground variant="default" />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/20 dark:to-yellow-950/20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About
              <span className="text-primary bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block">
                Umbrelabs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than a service provider — we're your strategic partner in digital transformation.
              With expertise across technology, design, and business domains, we turn ambitious visions into tangible results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="p-6 text-center border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2016, Umbrelabs began with a simple yet powerful vision: to make comprehensive,
                  high-quality technology solutions accessible to businesses of all sizes. We recognized that
                  many companies struggled to find a single partner who could handle everything from initial
                  strategy to final implementation.
                </p>
                <p>
                  What started as a small team of passionate technologists has grown into a full-service
                  innovation lab. We've expanded our capabilities to include not just development, but also
                  strategic consulting, creative design, data analytics, and cutting-edge innovation services.
                </p>
                <p>
                  Today, we serve clients across industries, from startups to Fortune 500 companies, helping
                  them navigate the complex digital landscape and achieve their most ambitious goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl flex items-center justify-center">
                <Globe className="w-24 h-24 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-r from-amber-50/30 to-yellow-50/30 dark:from-amber-950/10 dark:to-yellow-950/10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced leaders who guide our vision and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center border-border/50">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-r from-amber-50/30 to-yellow-50/30 dark:from-amber-950/10 dark:to-yellow-950/10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that have shaped who we are today.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-bold text-primary">{milestone.year}</h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing family of businesses that trust Umbrelabs to bring their vision to life.
            Let's discuss how we can help transform your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}