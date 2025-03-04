"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Welcome to my Portfolio"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden dark-gradient pt-16">
      {/* Colorful background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-950/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-950/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-teal-950/20 rounded-full blur-3xl"></div>
      </div>

      <div className="space-y-6 max-w-3xl relative z-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          I'm a passionate graduate showcasing my journey, skills, and projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 border-0"
          >
            Explore My Work
          </Button>
          <Button size="lg" variant="outline" asChild className="gradient-border bg-background/80 backdrop-blur-sm">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="text-primary hover:text-primary/80 hover:bg-primary/10"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  )
}

