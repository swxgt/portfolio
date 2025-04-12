import { Hero } from "@/components/blocks/hero"

function HeroDemo() {
  return (
    <Hero
      title="Swagat Karmakar"
      subtitle="Generative AI Generalist"
      actions={[
        {
          label: "Projects",
          href: "/projects",
          variant: "outline"
        },
       
        {
          label: "Contact",
          href: "#",
          variant: "outline"
        }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { HeroDemo } 