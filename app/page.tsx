import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Folder, Search, Plus } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <span className="text-lg font-bold">N</span>
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">Notely</h1>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search notes</span>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground text-balance">
              Your notes, beautifully organized
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Capture ideas, organize thoughts, and stay productive with Notely. A modern note-taking experience
              designed for clarity and focus.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Button size="lg" className="rounded-lg gap-2 shadow-sm">
                <Plus className="h-4 w-4" />
                Create Note
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg bg-transparent">
                Browse Templates
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 space-y-4 border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Rich Text Editor</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Format your notes with ease using our intuitive editor with markdown support.
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Folder className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Smart Organization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Keep your notes organized with folders, tags, and powerful search capabilities.
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Fast Search</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find any note instantly with our lightning-fast full-text search engine.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 rounded-xl bg-muted/50 p-8 border border-border/50">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Theme Customization</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Switch between light, dark, and system themes using the toggle in the top right. Your preference is
              automatically saved and synced across sessions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Light Mode
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Dark Mode
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                System Sync
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 mt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Built with React, TypeScript, and Tailwind CSS</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
