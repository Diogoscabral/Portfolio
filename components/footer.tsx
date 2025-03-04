import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-blue-500/10 bg-gradient-to-r from-blue-500/5 via-teal-500/5 to-amber-500/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center">
          © {currentYear} [Your Name]. Made with
          <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

