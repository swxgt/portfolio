"use client"

import Image, { type ImageProps } from "next/image"
import Zoom from "react-medium-image-zoom"
import { cn } from "@/lib/utils"
import "react-medium-image-zoom/dist/styles.css"

export interface ImageZoomProps extends Omit<ImageProps, "className"> {
  className?: string
}

export function ImageZoom({
  className,
  ...props
}: ImageZoomProps) {
  return (
    <Zoom>
      <Image
        className={cn(
          "cursor-zoom-in rounded-md transition-all",
          className
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
        {...props}
      />
    </Zoom>
  )
} 