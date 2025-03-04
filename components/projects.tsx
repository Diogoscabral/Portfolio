import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "BartleZ: A Gamified Approach to Overturn Traditional Bartle Player Type Attribution",
      description:
        "Developed BartleZ, a Game With a Purpose (GWAP) designed to assess player typologies based on Bartle’s Taxonomy. Conducted research on player behaviors, comparing traditional questionnaires with in-game actions for improved classification accuracy.",
      image: "/BartleZ.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://aquamarine-kirby-45.tiiny.site",
      githubLink: "https://github.com/Diogoscabral/BratleZ",
      color: "from-blue-600 to-teal-600",
    },
    {
      title: "Biblioteca Online",
      description:
        "Desenvolvi uma biblioteca digital em ASP.NET, implementando funcionalidades para gestão de livros, utilizadores e empréstimos, garantindo uma interface intuitiva e eficiente para administração de aceervos.",
      image: "/Biblioteca.png",
      tags: ["C#", "SQL"],
      liveLink: "", // Remova ou deixe vazio para não exibir o botão
      githubLink: "https://github.com/Diogoscabral/Biblioteca",
      color: "from-teal-600 to-emerald-600",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative dark-gradient">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight gradient-text">My Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of projects I completed during my bachelor's degree, demonstrating my skills and problem-solving
            abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient overflow-hidden group border-blue-500/10">
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`}></div>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-background/5 backdrop-blur-sm border-blue-500/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild className="rounded-full border-blue-500/20">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.liveLink && (
                  <Button
                    size="sm"
                    asChild
                    className={`rounded-full bg-gradient-to-r ${project.color} hover:opacity-90 border-0`}
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

