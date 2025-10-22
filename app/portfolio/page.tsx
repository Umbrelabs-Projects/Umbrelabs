"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Smartphone,
  Globe,
  Database,
  Palette,
  ArrowRight
} from "lucide-react"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import Footer from "@/components/footer"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      category: "Technology Development",
      client: "RetailTech Solutions",
      description: "Complete digital transformation for a traditional retail chain, including custom e-commerce platform, inventory management system, and customer analytics dashboard.",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      duration: "6 months",
      team: "8 members",
      results: ["300% increase in online sales", "50% reduction in operational costs", "95% customer satisfaction"],
      icon: Globe
    },
    {
      id: 2,
      title: "Healthcare Management Platform",
      category: "Business Solutions",
      client: "MedCare Systems",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, telemedicine integration, and compliance reporting.",
      image: "/placeholder.jpg",
      technologies: ["React", "Python", "MongoDB", "Docker"],
      duration: "8 months",
      team: "12 members",
      results: ["HIPAA compliant", "Reduced patient wait times by 40%", "Integrated with 50+ clinics"],
      icon: Database
    },
    {
      id: 3,
      title: "Brand Identity & Mobile App",
      category: "Creative Design",
      client: "FitLife Nutrition",
      description: "Complete brand redesign including logo, packaging, website, and companion mobile app for personalized nutrition tracking.",
      image: "/placeholder.jpg",
      technologies: ["React Native", "Firebase", "Figma", "Adobe Creative Suite"],
      duration: "4 months",
      team: "6 members",
      results: ["150K+ app downloads", "Brand recognition increased by 200%", "4.8/5 app store rating"],
      icon: Smartphone
    },
    {
      id: 4,
      title: "Financial Analytics Dashboard",
      category: "Data Analytics",
      client: "Capital Insights",
      description: "Real-time financial analytics platform with predictive modeling, risk assessment, and automated reporting for investment firms.",
      image: "/placeholder.jpg",
      technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
      duration: "5 months",
      team: "7 members",
      results: ["99.9% uptime", "Reduced analysis time by 75%", "ROI of 350% in first year"],
      icon: TrendingUp
    },
    {
      id: 5,
      title: "Smart City Infrastructure",
      category: "Innovation Labs",
      client: "MetroTech City",
      description: "IoT-based smart city infrastructure including traffic management, environmental monitoring, and citizen engagement platform.",
      image: "/placeholder.jpg",
      technologies: ["IoT", "Machine Learning", "React", "Kubernetes"],
      duration: "12 months",
      team: "15 members",
      results: ["25% reduction in traffic congestion", "30% improvement in air quality", "City-wide deployment"],
      icon: Target
    },
    {
      id: 6,
      title: "Educational Platform Redesign",
      category: "Digital Consulting",
      client: "LearnHub Academy",
      description: "Complete platform redesign with modern UX, gamification features, progress tracking, and integration with learning management systems.",
      image: "/placeholder.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      duration: "7 months",
      team: "9 members",
      results: ["Student engagement up 180%", "Completion rates improved by 60%", "Expanded to 10 countries"],
      icon: Users
    }
  ]

  const stats = [
    { label: "Projects Completed", value: "150+", icon: Target },
    { label: "Happy Clients", value: "98%", icon: Users },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Years Experience", value: "8+", icon: Calendar }
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
              Our
              <span className="text-primary bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their vision into reality.
              Each project represents our commitment to excellence and innovation.
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

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card key={project.id} className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-16 left-12 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute top-1/3 left-8 w-2.5 h-2.5 bg-amber-300 rounded-full animate-bounce delay-200"></div>
                    <div className="absolute bottom-16 right-12 w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-2/3 right-8 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping delay-400"></div>
                    <div className="absolute bottom-8 left-16 w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute top-12 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-600"></div>
                    <div className="absolute bottom-12 right-1/4 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping delay-700"></div>
                  </div>
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-amber-500" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.duration} • {project.team}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses that have transformed their operations with Umbrelabs.
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Book Free Consultation
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