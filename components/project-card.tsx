import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  bgColor: string
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, bgColor }: ProjectCardProps) {
  return (
    <Card className={`${bgColor} backdrop-blur-xl bg-white/5 group hover:scale-[1.02] hover:bg-white/10 transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-3xl`}>
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardContent className="p-6 h-full flex flex-col justify-between min-h-[300px] relative z-10">
        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          {githubUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4 flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
