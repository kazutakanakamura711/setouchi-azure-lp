import { experiences } from "../../data/landing-page";
import { Reveal } from "../ui/reveal";

export const ExperienceSection = () => {
  return (
    <section
      className="mx-auto w-[calc(100%-44px)] py-[clamp(170px,19vw,280px)] tablet:w-[min(100%-56px,860px)] desktop:w-[min(100%-96px,1240px)] mobile:py-[140px]"
      id="experience"
    >
      <Reveal
        as="p"
        className="mb-[clamp(76px,9vw,130px)] text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:mb-[74px] mobile:text-[0.62rem]"
      >
        EXPERIENCE
      </Reveal>
      <div className="flex flex-col gap-[clamp(120px,16vw,220px)] mobile:gap-[110px]">
        {experiences.map((item) => (
          <Reveal
            as="article"
            className={`grid grid-cols-[minmax(0,1.15fr)_minmax(280px,0.7fr)] items-center gap-[clamp(50px,9vw,130px)] mobile:flex mobile:flex-col mobile:items-stretch mobile:gap-[34px] ${
              Number(item.number) % 2 === 0
                ? "grid-cols-[minmax(280px,0.7fr)_minmax(0,1.15fr)]"
                : ""
            }`}
            key={item.name}
            testId="experience"
          >
            <div
              className={`group overflow-hidden aspect-[3/2] mobile:aspect-[4/3] ${Number(item.number) % 2 === 0 ? "col-start-2" : ""}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                width="900"
                height="600"
                className="h-full object-cover transition-transform duration-[1150ms] ease-[cubic-bezier(0.2,0.65,0.25,1)] group-hover:scale-[1.035] motion-reduce:transition-none"
                loading="lazy"
              />
            </div>
            <div
              className={`mobile:pl-[22px] ${Number(item.number) % 2 === 0 ? "col-start-1 row-start-1 pl-[clamp(0px,5vw,70px)] mobile:pl-[22px]" : ""}`}
            >
              <p className="font-serif text-[0.85rem] tracking-[0.12em] text-gold">
                {item.number}
              </p>
              <h3 className="my-[26px] mb-[30px] font-serif text-[clamp(1.8rem,3.3vw,3rem)] font-normal tracking-[0.09em] mobile:my-[18px] mobile:mb-[22px] mobile:text-[1.7rem]">
                {item.name}
              </h3>
              <p className="text-[0.92rem] font-light leading-[2] tracking-[0.08em]">
                {item.description.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
