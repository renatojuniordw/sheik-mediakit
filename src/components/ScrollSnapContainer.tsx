import { type ReactNode } from 'react'

interface ScrollSnapContainerProps {
  children: ReactNode
}

export const ScrollSnapContainer = ({ children }: ScrollSnapContainerProps) => {
  return (
    <div id="snap-root">
      {children}
    </div>
  )
}
