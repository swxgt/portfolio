"use client"

import { BentoGridDemo } from "@/components/blocks/bento-grid-demo"
import { GradientBackground } from "@/components/ui/gradient-background"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="relative pt-24 pb-12">
      <GradientBackground intensity="medium" />
      
      <div className="container relative z-10 mx-auto px-4">
        <Link 
          href="/" 
          className="absolute left-4 top-4 md:left-24 md:top-0 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back to home</span>
        </Link>
        
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
            Explore our latest projects and innovations
          </p>
        </motion.div>
        <BentoGridDemo />
      </div>
    </main>
  )
} 