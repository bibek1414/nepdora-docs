"use client"
import { useState, useEffect } from "react"
import { ArrowRight, Code2, FileText, Rocket, Menu, X, Search, Palette, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { cn } from "@/lib/utils"
import { useScroll } from "motion/react"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Documentation", href: "/docs" },
  { name: "Showcase", href: "#showcase" },
]

export default function NepdoraLanding() {
  const [menuState, setMenuState] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const testimonials = [
    {
      name: "shadcn",
      role: "Creator of Shadcn UI",
      content:
        "Major shoutout to @nepdora for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.",
      avatar: "SC",
    },
    {
      name: "Anthony Shew",
      role: "Turbo DX at Vercel",
      content: "nepdora is the best Next.js docs framework",
      avatar: "AS",
    },
    {
      name: "Aiden Bai",
      role: "Creator of Million.js",
      content: "I'd have no shot building @arktypeio docs that looked half this good without it 😍",
      avatar: "AB",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
    

      {/* Hero Section */}
      <main className="overflow-hidden">
        <section>
          <div className="relative">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto">
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        filter: "blur(12px)",
                        y: 12,
                      },
                      visible: {
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                      },
                    },
                  }}
                >
                
                  <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
                    Build excellent documentation with less effort
                  </h1>
                  <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
                    Nepdora is a beautiful documentation framework for developers — flexible, performant, and running on
                    your React framework.
                  </p>
                  <div className="mt-12 flex items-center gap-2">
                    <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                      <Button asChild size="lg" className="rounded-xl px-5 text-base">
                        <Link href="/docs">
                          <span className="text-nowrap">Getting Started</span>
                        </Link>
                      </Button>
                    </div>
                    <Button asChild size="lg" variant="ghost" className="h-[42px] rounded-xl px-5 text-base">
                      <Link href="#showcase">
                        <span className="text-nowrap">View Demo</span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: "blur(12px)",
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  },
                },
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-[15/8] relative hidden rounded-2xl dark:block"
                    src="/docs.png"
                    alt="Documentation interface preview"
                    width={2700}
                    height={1440}
                  />
                  <Image
                    className="z-2 border-border/25 aspect-[15/8] relative rounded-2xl border dark:hidden"
                    src="/docs.png"
                    alt="Documentation interface preview"
                    width={2700}
                    height={1440}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

     

        {/* Three Step Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create it.</h3>
                <p className="text-muted-foreground">Initialize a new docs with a command.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Write.</h3>
                <p className="text-muted-foreground">
                  Write content, with automation tools & type-safe data validation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ship.</h3>
                <p className="text-muted-foreground">Deploy your docs easily with any hosting platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              You know how you end up rebuilding a full docs site every time you start a new project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nepdora fixes this by giving you all the right blocks that you compose together. Like headless docs to
              build exactly what you need.
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Source Agnostic</h3>
                <p className="text-muted-foreground">
                  Designed to integrate with any content source: MDX, Content Collections, and even your own CMS.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Search Integration</h3>
                <p className="text-muted-foreground">
                  Integrate with Orama Search and Algolia Search in your docs easily.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">The Shadcn UI for docs</h3>
                <p className="text-muted-foreground">
                  Beautiful components for your docs, offering a rich experience to your users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted by awesome teams and developers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-muted/50 border">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-semibold mr-3 text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to build better documentation?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Join thousands of developers using Nepdora to create amazing documentation
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
              <p className="text-muted-foreground text-sm">The framework for building documentation</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link href="#features" className="hover:text-foreground transition">
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
                  <Link href="/docs" className="hover:text-foreground transition">
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
            © 2025 Nepdora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
