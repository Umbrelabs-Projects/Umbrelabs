"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Box,
  Smartphone,
  Palette,
  Mic,
  Shield,
  Database,
  Wrench,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import InteractiveUmbrella from "@/components/interactive-umbrella";
import AnimatedBackground from "@/components/animated-background";
import Navigation from "@/components/navigation";

// Fallback components
const FallbackBox = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-border/50 flex items-center justify-center">
    <div className="text-center">
      <Box className="w-12 h-12 mx-auto mb-4 text-primary" />
      <p className="text-sm text-muted-foreground">Interactive Box</p>
    </div>
  </div>
);

const FallbackBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
);

const FallbackNavigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Box className="w-8 h-8 text-primary" />
          <span className="ml-2 text-xl font-bold">Umbrelabs</span>
        </div>
      </div>
    </div>
  </nav>
);

export default function TechBoxLanding() {
  // Safe component rendering with fallbacks
  const SafeInteractiveUmbrella = () => {
    try {
      return <InteractiveUmbrella />;
    } catch (error) {
      console.error("InteractiveUmbrella failed to render:", error);
      return <FallbackBox />;
    }
  };

  const SafeAnimatedBackground = () => {
    try {
      return <AnimatedBackground variant="hero" />;
    } catch (error) {
      console.error("AnimatedBackground failed to render:", error);
      return <FallbackBackground />;
    }
  };

  const SafeNavigation = () => {
    try {
      return <Navigation />;
    } catch (error) {
      console.error("Navigation failed to render:", error);
      return <FallbackNavigation />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative w-full">
      {/* Background fixed and restored */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SafeAnimatedBackground />
      </div>

      {/* Navigation */}
      <SafeNavigation />

      <div className="relative z-10 w-full">
        {/* Hero Section - Reduced from min-h-screen to optimized height */}
        <section
          id="hero"
          className="h-screen max-h-[900px] min-h-[600px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 pt-20 pb-8 text-center md:text-left max-w-screen-2xl mx-auto"
        >
          <div className="flex-1 max-w-2xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
              Your All-in-One
              <br />
              <span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Umbrelabs
              </span>
              <br />
              Starts Here
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 md:mb-6 max-w-lg mx-auto md:mx-0">
              From idea to execution — solutions, apps, AI, design, cloud, and
              more. Everything in and out of tech. Built from one lab.{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start w-full">
              <Link href="#cta" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </Link>
              <Link href="#services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 text-base md:text-lg backdrop-blur-sm hover:bg-accent/50 bg-transparent"
                >
                  See Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="w-full max-w-[600px] h-[600px]">
              <SafeInteractiveUmbrella />
            </div>
          </div>
        </section>

        {/* Services Section - Reduced padding */}
        <section
          id="services"
          className="py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16"
        >
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-center">
              Everything in and out of Tech.
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-8 md:mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
              Under One Umbrella.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: Box,
                  title: "Business Solutions",
                  desc: "Strategic consulting",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  icon: Smartphone,
                  title: "Technology Development",
                  desc: "Custom tech solutions",
                  color: "from-green-500 to-blue-500",
                },
                {
                  icon: Palette,
                  title: "Creative Design",
                  desc: "Brand & digital design",
                  color: "from-pink-500 to-purple-500",
                },
                {
                  icon: Wrench,
                  title: "Project Management",
                  desc: "End-to-end delivery",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Database,
                  title: "Data Analytics",
                  desc: "Insights & intelligence",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: Shield,
                  title: "Digital Consulting",
                  desc: "Strategic guidance",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Mic,
                  title: "Innovation Labs",
                  desc: "Future-ready solutions",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: FileText,
                  title: "Process Optimization",
                  desc: "Efficiency & growth",
                  color: "from-gray-500 to-gray-700",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-border p-4 md:p-5 hover:bg-accent/50 transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${service.color} p-2 mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm md:text-base">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {service.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Reduced padding */}
        <section
          id="benefits"
          className="py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16"
        >
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">
              Why Choose Umbrelabs?
            </h2>

            <div className="space-y-3 md:space-y-4">
              {[
                {
                  text: "One-stop solution — no need to juggle vendors",
                  icon: "📦",
                },
                {
                  text: "Scalable teams for startups and enterprises",
                  icon: "🚀",
                },
                { text: "Transparent pricing and fast delivery", icon: "⚡" },
                { text: "Always up-to-date with latest tech", icon: "🔄" },
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 md:gap-4 group p-3 md:p-4 rounded-lg hover:bg-accent/30 transition-all duration-300"
                >
                  <div className="text-xl md:text-2xl group-hover:scale-125 transition-transform flex-shrink-0">
                    {point.icon}
                  </div>
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-base md:text-lg text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Reduced padding */}
        <section
          id="cta"
          className="py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16"
        >
          <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center lg:text-left">
                How Umbrelabs Works
              </h2>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "Tell Us What You Need",
                    desc: "We'll listen and understand your goals.",
                    icon: "💬",
                    step: "01",
                  },
                  {
                    title: "We Match You With Experts",
                    desc: "Top-tier tech talent for your project.",
                    icon: "🤝",
                    step: "02",
                  },
                  {
                    title: "Deliver, Launch, and Support",
                    desc: "We stay with you from launch to scale.",
                    icon: "🚀",
                    step: "03",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm md:text-base">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary flex items-center gap-2">
                        <span>{item.icon}</span>
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center lg:text-left">
                Start Building Today
              </h2>
              <p className="text-muted-foreground mb-4 md:mb-6 text-base md:text-lg text-center lg:text-left">
                Let's build your next big thing — or small thing — all from one
                lab.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full px-8 py-4 text-lg backdrop-blur-sm hover:bg-accent/50 bg-transparent"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
