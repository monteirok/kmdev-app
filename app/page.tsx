"use client";

// import { Navbar } from "@/components/navbar"
import { Logo } from "@/components/logo" 
import HamburgerMenu from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const portfolioItems = [
  {
    title: "Project Alpha",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/800x600.png",
    dataAiHint: "abstract technology",
    github: "https://github.com",
    live: "https://example.com",
    className: "md:col-span-2",
  },
  {
    title: "Project Beta",
    techStack: ["Next.js", "TailwindCSS", "Stripe"],
    image: "https://placehold.co/600x600.png",
    dataAiHint: "modern storefront",
    github: "https://github.com",
    live: "https://example.com",
    className: "md:col-span-1",
  },
  {
    title: "Project Gamma",
    techStack: ["React Native", "Firebase"],
    image: "https://placehold.co/600x800.png",
    dataAiHint: "social media",
    github: "https://github.com",
    live: "https://example.com",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Project Delta",
    techStack: ["D3.js", "JavaScript", "HTML/CSS"],
    image: "https://placehold.co/800x400.png",
    dataAiHint: "data dashboard",
    github: "https://github.com",
    live: "https://example.com",
    className: "md:col-span-2",
  },
   {
    title: "Project Epsilon",
    techStack: ["Gatsby", "GraphQL", "Contentful"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "personal website",
    github: "https://github.com",
    live: "https://example.com",
    className: "md:col-span-1",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      <div className="pt-[.6rem] pl-[1.4rem] border-2w-fit">
        <Logo width={200} height={200} />
      </div>
      <HamburgerMenu />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
