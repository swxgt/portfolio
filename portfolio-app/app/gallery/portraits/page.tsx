"use client"

import { GradientBackground } from "@/components/ui/gradient-background"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ImageZoom } from "@/components/ui/zoomable-image"

export default function PortraitsGalleryPage() {
  return (
    <main className="relative pt-24 pb-12">
      <GradientBackground intensity="medium" />
      
      <div className="container relative z-10 mx-auto px-4">
        <Link 
          href="/projects" 
          className="absolute left-4 top-4 md:left-8 md:top-8 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back to projects</span>
        </Link>
        
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">AI Portraits</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
            Identity-preserving portraits generated with SDXL
          </p>
        </motion.div>
        
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <ImageZoom
              src="/images/ComfyUI_00486_.png"
              alt="AI-generated portrait 1"
              width={400}
              height={300}
            />
            
            <ImageZoom
              src="/images/ComfyUI_00490_.png" 
              alt="AI-generated portrait 2"
              width={400}
              height={300}
            />
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <ImageZoom
              src="/images/ComfyUI_00496_ (1).png"
              alt="AI-generated portrait 3"
              width={400}
              height={300}
            />
            
            <ImageZoom
              src="/images/ComfyUI_00522_.png"
              alt="AI-generated portrait 4" 
              width={400}
              height={300}
            />
          </div>
          
          
        </div>
      </div>
    </main>
  )
} 