import type { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionIntroProps {
  eyebrow: string;
  children: ReactNode;
}

export const SectionIntro = ({ eyebrow, children }: SectionIntroProps) => {
  return (
    <Reveal className="mb-[74px] block tabletUp:mb-[clamp(72px,10vw,150px)] tabletUp:grid tabletUp:grid-cols-[0.5fr_1fr] tabletUp:items-start">
      <p className="text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:text-[0.62rem]">
        {eyebrow}
      </p>
      <h2 className="mt-8 font-serif text-[clamp(2.15rem,10vw,3rem)] font-normal leading-[1.5] tracking-[0.05em] tabletUp:mt-0 tabletUp:text-[clamp(2.6rem,5vw,5rem)]">
        {children}
      </h2>
    </Reveal>
  );
};
