import { ImageZoom } from "@/components/ui/zoomable-image"

function ImageZoomDemo() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <ImageZoom
          src="/images/ComfyUI_00486_.png"
          alt="Project Image 1"
          width={400}
          height={300}
        />
        
        <ImageZoom
          src="/images/ComfyUI_00490_.png"
          alt="Project Image 2"
          width={400}
          height={300}
        />

        <ImageZoom
          src="/images/ComfyUI_00496_ (1).png"
          alt="Project Image 2"
          width={400}
          height={300}
        />
        
        <ImageZoom
          src="/images/ComfyUI_00522_.png"
          alt="Project Image 2"
          width={400}
          height={300}
        />
        
      </div>
      
    </div>
  )
}

export { ImageZoomDemo } 