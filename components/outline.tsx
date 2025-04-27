"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Heading {
  id: string
  text: string
  level: number
}

export function Outline() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Function to collect headings
    const collectHeadings = () => {
      const headingElements = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"))

      const headings = headingElements
        .filter((element) => element.id) // Only include headings with IDs
        .map((element) => {
          const id = element.id
          const text = element.textContent || ""
          const level = Number.parseInt(element.tagName.substring(1))
          return { id, text, level }
        })

      setHeadings(headings)

      // Set up intersection observer for the collected headings
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the first heading that's intersecting
          const intersectingEntry = entries.find((entry) => entry.isIntersecting)
          if (intersectingEntry) {
            setActiveId(intersectingEntry.target.id)
          }
        },
        { rootMargin: "0px 0px -80% 0px", threshold: 0.1 },
      )

      // Observe all heading elements
      headingElements.forEach((element) => {
        if (element.id) {
          observer.observe(element)
        }
      })

      return observer
    }

    // Initial collection
    const observer = collectHeadings()

    // Set up a mutation observer to detect changes in the DOM
    const mutationObserver = new MutationObserver(() => {
      // Clean up previous observer
      observer.disconnect()
      // Recollect headings
      collectHeadings()
    })

    // Start observing the document for changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Clean up function
    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="hidden lg:block">
      <div className="fixed right-8 top-20 w-56">
        <div className="text-sm font-medium text-primary/80">On this page</div>
        <ul className="mt-2 space-y-1 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block py-1 text-muted-foreground transition-colors hover:text-foreground no-underline",
                  activeId === heading.id && "text-primary font-medium",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    // Smooth scroll to the element with offset
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: "smooth",
                    })
                    // Update URL hash without jumping
                    window.history.pushState(null, "", `#${heading.id}`)
                    setActiveId(heading.id)

                    // Force focus on the element for accessibility
                    element.tabIndex = -1
                    element.focus({ preventScroll: true })
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
