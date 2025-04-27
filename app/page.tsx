import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dna, Microscope, FileSearch, CheckCircle } from "lucide-react"
import { GitHubCard } from "@/components/github-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-6">
          <Dna className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">CASSIA</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
          Advanced single cell analysis platform for researchers and bioinformaticians
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/docs/introduction">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8">
            <Link href="https://github.com/ElliotXie/CASSIA" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8">
            <Link
              href="https://www.biorxiv.org/content/10.1101/2024.12.04.626476v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Paper
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Microscope className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Interpretable</h3>
            <p className="mt-2 text-muted-foreground">
              Provides detailed reasoning for each annotation, making the process transparent and understandable.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileSearch className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Reference-Free</h3>
            <p className="mt-2 text-muted-foreground">
              Annotates cell types without requiring reference datasets, enabling discovery of novel cell populations.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">Accurate</h3>
            <p className="mt-2 text-muted-foreground">
              Delivers high-quality cell type annotations with precision comparable to expert manual annotation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
        <div className="max-w-md mx-auto">
          <GitHubCard />
        </div>
      </div>
    </div>
  )
}
