"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BentoGridItemProps {
  className?: string;
  title: string;
  techStack: string[];
  image: string;
  dataAiHint?: string;
  github: string;
  live: string;
}

export const BentoGridItem = ({
  className,
  title,
  techStack,
  image,
  dataAiHint,
  github,
  live,
}: BentoGridItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, duration: 0.15 } },
  };

  const hoverVariant = {
    scale: 1.02,
    boxShadow: "0px 10px 30px -5px hsl(var(--primary) / 0.2)",
    transition: { duration: 0.15 }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={hoverVariant}
      className={cn("relative flex flex-col justify-between h-full p-0 overflow-hidden rounded-lg group bg-card border", className)}
    >
      {/* <Link href={live} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${title} live project`}></Link> */}
      
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          data-ai-hint={dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
        <h3 className="text-xl font-bold font-headline">{title}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm">
                {tech}
              </Badge>
            ))}
        </div>
        <div className="flex items-center justify-end mt-4 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={github} target="_blank" rel="noopener noreferrer" className="relative z-30 p-2 transition-colors rounded-full bg-black/30 hover:bg-white/20" aria-label={`${title} GitHub`}>
            <Github className="w-5 h-5 text-white" />
          </Link>
          <Link href={live} target="_blank" rel="noopener noreferrer" className="relative z-30 p-2 transition-colors rounded-full bg-black/30 hover:bg-white/20" aria-label={`${title} live project`}>
            <ExternalLink className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
