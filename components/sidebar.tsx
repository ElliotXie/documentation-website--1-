"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Dna } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Updated chapters to include all CASSIA documentation sections with groupings
const chapters = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Setting Up CASSIA", slug: "setting-up-cassia" },
    ],
  },
  {
    title: "Basic CASSIA Workflow",
    items: [
      { title: "Fast Mode", slug: "fast-mode" },
      { title: "Single Cluster Analysis", slug: "single-cluster-analysis" },
      { title: "Batch Processing", slug: "batch-processing" },
      { title: "Quality Scoring and Report Generation", slug: "quality-scoring-and-report-generation" },
    ],
  },
  {
    title: "Advanced CASSIA Workflow",
    items: [
      { title: "Introduction to Optional Agents", slug: "introduction-to-optional-agents" },
      { title: "Uncertainty Quantification (Optional)", slug: "uncertainty-quantification" },
      { title: "Annotation Boost Agent (Optional)", slug: "annotation-boost" },
      { title: "Compare Cell Types (Optional)", slug: "compare-cell-types" },
      { title: "Subclustering Analysis (Optional)", slug: "subclustering-analysis" },
      { title: "Annotation Boost Plus Agent (Optional)", slug: "annotation-boost-extra" },
      { title: "Retrieve Augmented Agent (Optional)", slug: "ragagent" },
    ],
  },
  {
    title: "Help",
    items: [{ title: "Troubleshooting", slug: "troubleshooting" }],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [isMobile])

  // Close sidebar when navigating on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background/95 backdrop-blur-sm transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex h-20 items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Dna className="h-6 w-6" />
              </div>
              <span className="font-semibold text-xl tracking-tight">CASSIA</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto p-6">
            {chapters.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </div>
                <ul className="space-y-1">
                  {section.items.map((chapter) => (
                    <li key={chapter.slug}>
                      <Link
                        href={`/docs/${chapter.slug}`}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          pathname === `/docs/${chapter.slug}`
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {chapter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-8 mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Resources
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://github.com/ElliotXie/CASSIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.biorxiv.org/content/10.1101/2024.12.04.626476v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Research Paper
                </Link>
              </li>
              <li>
                <Link
                  href="/comments"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Comment Section
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t p-4">
            <div className="text-xs text-muted-foreground">CASSIA v1.2.0</div>
          </div>
        </div>
      </div>
    </>
  )
}
