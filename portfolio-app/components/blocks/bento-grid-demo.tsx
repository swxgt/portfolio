import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
    Images,
} from "lucide-react";


const itemsSample: BentoItem[] = [
    {
        title: "AI-Powered Personalized Portrait Generator",
        meta: "v1",
        description:
            "Identity-preserving portraits from a single photo and text prompt",
        icon: <Images className="w-4 h-4 text-blue-500" />,
        status: "Gallery",
        tags: ["ComfyUI", "SDXL", "InstantID"],
        colSpan: 2,
        href: "/gallery/portraits",
    },
    {
        title: "AI Film",
        meta: "I2V",
        description: "AI Generated film made using MidJourney and Runway ML",
        icon: <Video className="w-4 h-4 text-emerald-500" />,
        status: "TBA",
        tags: ["MidJourney", "RunwayML"],
        href: "/gallery/films",
    },
    {
        title: "AI Artistic Text Generator",
        meta: "v1",
        description: "Stylized text in images using custom LoRA",
        icon: <Images className="w-4 h-4 text-blue-500" />,
        status: "Gallery",
        tags: ["ComfyUI", "FLUX", "LoRA"],
        colSpan: 2,
        href: "/gallery/text-art",
    },
    {
        title: "AI Film",
        meta: "I2V",
        description: "AI Generated film made using MidJourney and Runway ML",
        icon: <Video className="w-4 h-4 text-emerald-500" />,
        status: "TBA",
        tags: ["MidJourney", "RunwayML"],
        href: "/gallery/films",
    },
];

function BentoGridDemo() {
    return <BentoGrid items={itemsSample} />
}

export { BentoGridDemo } 