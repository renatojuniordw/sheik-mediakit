import { Suspense, lazy, useEffect, useState } from 'react'
import { MotionProvider } from './components/MotionProvider'
import { Nav } from './components/Nav'
import { SeoMeta } from './components/SeoMeta'
import { ScrollSnapContainer } from './components/ScrollSnapContainer'
import { useActiveSection } from './hooks/useActiveSection'
import { HeroSection } from './sections/HeroSection'
import { SobreSection } from './sections/SobreSection'

const CustomCursor = lazy(() =>
  import('./components/CustomCursor').then((module) => ({
    default: module.CustomCursor,
  })),
)
const NumerosSection = lazy(() =>
  import('./sections/NumerosSection').then((module) => ({
    default: module.NumerosSection,
  })),
)
const AudienciaSection = lazy(() =>
  import('./sections/AudienciaSection').then((module) => ({
    default: module.AudienciaSection,
  })),
)
const FormatosSection = lazy(() =>
  import('./sections/FormatosSection').then((module) => ({
    default: module.FormatosSection,
  })),
)
const CasesSection = lazy(() =>
  import('./sections/CasesSection').then((module) => ({
    default: module.CasesSection,
  })),
)
const ContatoSection = lazy(() =>
  import('./sections/ContatoSection').then((module) => ({
    default: module.ContatoSection,
  })),
)

const SECTION_IDS = ['hero', 'sobre', 'numeros', 'audiencia', 'formatos', 'cases', 'contato']

function App() {
  const activeSection = useActiveSection(SECTION_IDS)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    const idleCallback = window.requestIdleCallback?.(() => setShowCursor(true))
    if (idleCallback) return () => window.cancelIdleCallback?.(idleCallback)

    const timeoutId = window.setTimeout(() => setShowCursor(true), 400)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <MotionProvider>
      <>
        <SeoMeta />
        {showCursor ? (
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
        ) : null}
        <Nav activeSection={activeSection} />
        <main>
          <ScrollSnapContainer>
            <HeroSection />
            <SobreSection />
            <Suspense fallback={null}>
              <NumerosSection />
              <AudienciaSection />
              <FormatosSection />
              <CasesSection />
              <ContatoSection />
            </Suspense>
          </ScrollSnapContainer>
        </main>
      </>
    </MotionProvider>
  )
}

export default App
