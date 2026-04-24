import React from "react";
import { ArrowRight, Code2, FileText, Rocket, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { HeroSection } from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Nepdora | Build Excellent Documentation with Less Effort",
    description:
      "Nepdora is a beautiful documentation framework for developers — flexible, performant, and running on your React framework. ThaiThinks powered documentation solution.",
    keywords: [
      "documentation",
      "builder",
      "nepdora",
      "thaithinks",
      "nextjs",
      "react",
      "mdx",
    ],
    openGraph: {
      title: "Nepdora | Build Excellent Documentation",
      description:
        "The framework for building gorgeous, high-performance documentation sites.",
      images: ["/docs.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nepdora | Documentation Framework",
      description: "Build documentation sites that WOW your users.",
      images: ["/docs.png"],
    },
  };
};

export default function NepdoraLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Custom Script */}
      <Script
        id="thaithinks-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('Welcome to Nepdora - Powered by ThaiThinks');
          `,
        }}
      />

      <main className="overflow-hidden">
        <HeroSection />

        {/* Three Step Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create it.</h3>
                <p className="text-muted-foreground">
                  Initialize a new docs with a command.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Write.</h3>
                <p className="text-muted-foreground">
                  Write content, with automation tools & type-safe data
                  validation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ship.</h3>
                <p className="text-muted-foreground">
                  Deploy your docs easily with any hosting platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              You know how you end up rebuilding a full docs site every time you
              start a new project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nepdora fixes this by giving you all the right blocks that you
              compose together. Like headless docs to build exactly what you
              need.
            </p>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Source Agnostic</h3>
                <p className="text-muted-foreground">
                  Designed to integrate with any content source: MDX, Content
                  Collections, and even your own CMS.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  The Shadcn UI for docs
                </h3>
                <p className="text-muted-foreground">
                  Beautiful components for your docs, offering a rich experience
                  to your users.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Edits</h3>
                <p className="text-muted-foreground">
                  See changes instantly as you write. No more waiting for builds
                  to see your progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to build better documentation?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Join thousands of developers using Nepdora to create amazing
              documentation
            </p>
            <Link href="/docs">
              <Button size="lg" className="text-lg">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">Nepdora</span>
              </div>
              <p className="text-muted-foreground text-sm">
                The framework for building documentation
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-foreground transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-foreground transition"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nepdora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
