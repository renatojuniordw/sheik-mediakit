export const useScrollSnap = () => {
  const scrollTo = (sectionId: string): void => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return { scrollTo }
}
