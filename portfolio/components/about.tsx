import { Building, Clock, Code, Lightbulb } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "HTML/CSS",
    "Node.js",
    "Python",
    "Data Analysis",
    "C#/C++",
    "SQL",
    "Git",
    "Problem Solving",
    "Team Collaboration",
  ]

  const experiences = [
    {
      title: "Bachelor's degree in Computer Engineering",
      company: "Universidade de Trás-os-Montes e Alto Douro",
      period: "Jun 2022 - Present",
      description:
        "Gained strong foundations in software development, algorithms, and computer systems. Worked on projects involving web development, artificial intelligence, and networking.",
      icon: <Building className="h-5 w-5 text-blue-400" />,
      color: "border-blue-500/20",
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background via-secondary/50 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight gradient-text">About Me</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Learn about my background, education, and the skills I've developed during my academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <div className="p-1 rounded-full gradient-bg">
              <Avatar className="h-40 w-40 border-4 border-background">
                <AvatarImage src="/Diogo.jpg" alt="Profile" />
                <AvatarFallback className="text-4xl">ME</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hello, I'm Diogo Cabral</h3>
            <p className="text-muted-foreground mb-4">
              I am currently in my final year of a Bachelor's degree in Computer Engineering at UTAD. Throughout my 
              academic journey, I have developed a strong ability to learn quicly and apply new concepts effectiely 
              in practical scenarios.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about building meaningful relationships and deeply value, discipline, understanding
              and a positive attitude in all aspects of life. Engaging in inspiring projects motivates me, and I 
              always strive to foster collaboration and mutual growth.
            </p>
          </div>
        </div>

        <div className="mb-8"></div>

        {/* Experience Timeline Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center gradient-text">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className={`card-gradient ${exp.color}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

