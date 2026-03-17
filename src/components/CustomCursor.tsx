import { useEffect, useRef } from 'react'

export const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches
    if (!hasHover) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let rafId = 0
    let enlarged = false

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    dot.style.display  = 'block'
    ring.style.display = 'block'

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top  = `${mouseY}px`
    }

    const onMouseEnterLink = () => {
      enlarged = true
      dot.style.transform  = 'translate(-50%, -50%) scale(1.8)'
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)'
    }

    const onMouseLeaveLink = () => {
      enlarged = false
      dot.style.transform  = 'translate(-50%, -50%) scale(1)'
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top  = `${ringY}px`
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMouseMove)

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
      void enlarged
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ display: 'none' }} />
      <div ref={ringRef} className="cursor-ring" style={{ display: 'none' }} />
    </>
  )
}
