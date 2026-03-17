import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[]): string => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const observedIds = new Set<string>()

    const connectObservers = () => {
      sectionIds.forEach((id) => {
        if (observedIds.has(id)) return

        const el = document.getElementById(id)
        if (!el) return

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveId(id)
            }
          },
          { threshold: 0.5 }
        )

        observer.observe(el)
        observers.push(observer)
        observedIds.add(id)
      })
    }

    connectObservers()

    const mutationObserver = new MutationObserver(() => {
      connectObservers()
    })
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      mutationObserver.disconnect()
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sectionIds])

  return activeId
}
