"use client"

import { GradientBackground } from "@/components/ui/gradient-background"
import { motion } from "framer-motion"
import { ArrowLeft, PlayCircle } from "lucide-react"
import Link from "next/link"
import { ImageZoom } from "@/components/ui/zoomable-image"

export default function FilmsGalleryPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">AI Films</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
            Short films generated using MidJourney and Runway ML
          </p>
        </motion.div>
        
        <div className="mx-auto max-w-5xl space-y-16">
          {/* First Film */}
          <div className="space-y-6">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageZoom
                  src="/images/film1_thumbnail.jpg"
                  alt="AI Film 1 Thumbnail"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold">Dreamscape Odyssey</h2>
              <p className="text-muted-foreground mt-2">
                A journey through surreal landscapes generated with MidJourney and animated with Runway ML. 
                This short film explores themes of transformation and discovery.
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <ImageZoom
                src="/images/film1_still1.jpg"
                alt="Film 1 - Still 1"
                width={300}
                height={200}
                className="rounded-md"
              />
              <ImageZoom
                src="/images/film1_still2.jpg"
                alt="Film 1 - Still 2"
                width={300}
                height={200}
                className="rounded-md"
              />
              <ImageZoom
                src="/images/film1_still3.jpg"
                alt="Film 1 - Still 3"
                width={300}
                height={200}
                className="rounded-md"
              />
              <ImageZoom
                src="/images/film1_still4.jpg"
                alt="Film 1 - Still 4"
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>
          
          {/* Second Film */}
          <div className="space-y-6">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageZoom
                  src="/images/film2_thumbnail.jpg"
                  alt="AI Film 2 Thumbnail"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold">Neon Reverie</h2>
              <p className="text-muted-foreground mt-2">
                A cyberpunk-inspired visual narrative created with MidJourney and brought to life with Runway ML motion models.
                This film explores futuristic cityscapes and AI entities.
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <ImageZoom
                src="/images/film2_still1.jpg"
                alt="Film 2 - Still 1"
                width={300}
                height={200}
                className="rounded-md"
              />
              <ImageZoom
                src="/images/film2_still2.jpg"
                alt="Film 2 - Still 2"
                width={300}
                height={200}
                className="rounded-md"
              />
              <ImageZoom
                src="/images/film2_still3.jpg"
                alt="Film 2 - Still 3"
                width={300}
                height={200}
                className="rounded-md"
              />
              <ImageZoom
                src="/images/film2_still4.jpg"
                alt="Film 2 - Still 4"
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>
          
          <div className="mt-12 bg-black/5 dark:bg-white/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p className="text-muted-foreground">
              These AI-generated films were created using a two-stage process. First, key frames were generated
              using MidJourney with specialized prompts to ensure stylistic consistency. Then, these frames were
              animated using Runway MLs Gen-2 and motion brush tools to create smooth transitions and camera movements.
              The audio was designed to complement the visual aesthetic of each film.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
