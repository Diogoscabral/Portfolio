import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-background via-secondary/50 to-background relative"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <Card className="card-gradient border-blue-500/10 max-w-2xl mx-auto">
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-teal-600"></div>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Here's how you can reach me directly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 mr-3">
                <Mail className="h-5 w-5" />
              </div>
              <span>diogocabral880@gmail.com</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/10 text-teal-400 mr-3">
                <Phone className="h-5 w-5" />
              </div>
              <span>+351 917 112 825</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 mr-3">
                <MapPin className="h-5 w-5" />
              </div>
              <span>Vila Real, Portugal</span>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/diogo-cabral-2ba7222b7/"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Diogoscabral"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

