import { useEffect, useState, useMemo } from "react"
import { BentoGrid } from "./bento-box/bento-grid"
import { BentoGridItem } from "./bento-box/bento-grid-item"

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

export function ProjectsSection() {
  const gridSpanOptions = useMemo(() => [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
  ], []);

  const [shuffledSpans, setShuffledSpans] = useState(gridSpanOptions);

  useEffect(() => {
    // Shuffle immediately for faster effect
    setShuffledSpans(shuffle([...gridSpanOptions]));
  }, [gridSpanOptions]);

  const featuredProjects = [
    {
      title: "Mountain Mixology",
      techStack: ["Next.js", "Node.js", "TypeScript", "TailwindCSS v4", "Framer Motion"],
      image: "https://wallpapers.com/images/high/simple-desktop-racing-planes-ajcnliskttbq1ti3.webp",
      dataAiHint: "cocktail catering",
      github: "https://github.com/monteirok/kmdev-next",
      live: "https://mountainmixology.ca",
    },
    {
      title: "Labubu Order/Sales Tracker",
      techStack: ["Next.js", "Node.js", "TypeScript", "TailwindCSS v4", "Framer Motion"],
      image: "https://wallpapers.com/images/high/simple-desktop-racing-planes-ajcnliskttbq1ti3.webp",
      dataAiHint: "labubu order tracker",
      github: "https://github.com/monteirok/labubu-order-tracker",
      live: "https://labubu.karstenmonteiro.com/",
    },
    {
      title: "e-Commerce Website",
      techStack: ["Next.js", "Node.js", "TypeScript", "TailwindCSS v4", "Framer Motion"],
      image: "https://wallpapers.com/images/high/simple-desktop-racing-planes-ajcnliskttbq1ti3.webp",
      dataAiHint: "e-commerce",
      github: "https://github.com/monteirok/taba-squishy-ecommerce-store",
      live: "",
    },
  ].map((project, i) => ({
    ...project,
    className: shuffledSpans[i % shuffledSpans.length],
  }));

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/monteirok", icon: "🐙" },
    { name: "LinkedIn", url: "https://linkedin.com/in/karstenmonteiro", icon: "💼" },
    // { name: "CodePen", url: "https://codepen.io/karstenm", icon: "🖊️" },
    // { name: "Stack Overflow", url: "https://stackoverflow.com/users/karstenm", icon: "📚" },
    // { name: "Dev.to", url: "https://dev.to/karstenm", icon: "📝" },
    // { name: "Twitter", url: "https://twitter.com/karstenm", icon: "🐦" },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4">PORTFOLIO —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, modern frameworks, and creative problem-solving.
          </p>
        </div>
        <BentoGrid>
            {featuredProjects.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                techStack={item.techStack}
                image={item.image}
                dataAiHint={item.dataAiHint}
                github={item.github}
                live={item.live}
                className={item.className}
              />
            ))}
          </BentoGrid>
      </div>
    </section>
  )
}
