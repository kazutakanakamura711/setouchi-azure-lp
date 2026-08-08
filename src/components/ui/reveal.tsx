import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealElement = "article" | "div" | "figure" | "p";

interface RevealProps {
  as?: RevealElement;
  children: ReactNode;
  className?: string;
  testId?: string;
}

const transition = { duration: 1, ease: [0.2, 0.65, 0.25, 1] as const };

export const Reveal = ({
  as = "div",
  children,
  className,
  testId,
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    amount: 0.12,
    margin: "0px 0px -6% 0px",
    once: true,
  });
  const setRef = (element: HTMLElement | null) => {
    ref.current = element;
  };
  const animation = {
    animate: isInView ? { opacity: 1, y: 0 } : undefined,
    className,
    initial: { opacity: 0, y: 28 },
    "data-testid": testId,
    transition,
  };

  if (as === "article")
    return (
      <motion.article {...animation} ref={setRef}>
        {children}
      </motion.article>
    );
  if (as === "figure")
    return (
      <motion.figure {...animation} ref={setRef}>
        {children}
      </motion.figure>
    );
  if (as === "p")
    return (
      <motion.p {...animation} ref={setRef}>
        {children}
      </motion.p>
    );
  return (
    <motion.div {...animation} ref={setRef}>
      {children}
    </motion.div>
  );
};
