import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="text-lg font-bold">N</span>
            </div>
            <h1 className="text-xl font-semibold text-foreground">Notely</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Welcome to Notely</h2>
          <p className="text-muted-foreground">
            Your notes, beautifully organized. Try toggling between light, dark, and system themes using the button in
            the top right corner.
          </p>
        </div>
      </main>
    </div>
  )
}
