import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseParallaxOptions {
  range?: number;
  offset?: ["start end" | "start start" | "end start" | "end end", "start end" | "start start" | "end start" | "end end"];
}

export const useParallax = (options?: UseParallaxOptions): { ref: React.RefObject<HTMLDivElement>; y: MotionValue<number> } => {
  const range = options?.range ?? 100;
  const offset = options?.offset ?? ["start end", "end start"];
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return { ref, y };
};
