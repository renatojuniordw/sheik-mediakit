import { CustomCursor } from './components/CustomCursor'
import { Nav } from './components/Nav'
import { ScrollSnapContainer } from './components/ScrollSnapContainer'
import { useActiveSection } from './hooks/useActiveSection'
import { HeroSection } from './sections/HeroSection'
import { SobreSection } from './sections/SobreSection'
import { NumerosSection } from './sections/NumerosSection'
import { AudienciaSection } from './sections/AudienciaSection'
import { FormatosSection } from './sections/FormatosSection'
import { CasesSection } from './sections/CasesSection'
import { ContatoSection } from './sections/ContatoSection'

const SECTION_IDS = ['hero', 'sobre', 'numeros', 'audiencia', 'formatos', 'cases', 'contato']

function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <CustomCursor />
      <Nav activeSection={activeSection} />
      <ScrollSnapContainer>
        <HeroSection />
        <SobreSection />
        <NumerosSection />
        <AudienciaSection />
        <FormatosSection />
        <CasesSection />
        <ContatoSection />
      </ScrollSnapContainer>
    </>
  )
}

export default App
