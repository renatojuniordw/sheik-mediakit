import { LazyMotion, domAnimation, m } from "framer-motion";
import { type ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

export { m };

export const MotionProvider = ({ children }: MotionProviderProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
