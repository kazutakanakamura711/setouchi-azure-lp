import { rooms } from "../../data/landing-page";
import { SectionIntro } from "../ui/section-intro";
import { TextLink } from "../ui/text-link";
import { Reveal } from "../ui/reveal";

export const StaySection = () => {
  return (
    <section
      className="mx-auto w-[calc(100%-44px)] pb-[clamp(170px,18vw,280px)] tablet:w-[min(100%-56px,860px)] desktop:w-[min(100%-96px,1240px)] mobile:pb-[150px]"
      id="stay"
    >
      <SectionIntro eyebrow="STAY">
        すべての客室から、
        <br />
        瀬戸内海を。
      </SectionIntro>
      <div className="grid grid-cols-2 gap-x-[clamp(40px,8vw,120px)] gap-y-[clamp(90px,12vw,180px)] mobile:flex mobile:flex-col mobile:gap-[94px]">
        {rooms.map((room) => (
          <Reveal
            as="article"
            className={`${room.featured ? "col-span-2 mobile:col-auto" : ""} ${
              room.number === "03" ? "mt-[14vw] mobile:mt-0" : ""
            }`}
            key={room.name}
            testId="room"
          >
            <a
              className={`group block overflow-hidden aspect-[3/4] bg-warm-white ${
                room.featured
                  ? "aspect-[3/1.72] mobile:aspect-[4/5]"
                  : "mobile:aspect-[4/5]"
              }`}
              href="#booking"
              aria-label={`${room.name}の予約へ`}
            >
              <img
                src={room.image}
                alt={room.alt}
                width={room.featured ? 1200 : 900}
                height={room.featured ? 800 : 1200}
                className={`h-full object-cover transition-transform duration-[1150ms] ease-[cubic-bezier(0.2,0.65,0.25,1)] group-hover:scale-[1.035] motion-reduce:transition-none ${room.featured ? "mobile:object-[56%_center]" : ""}`}
                loading="lazy"
              />
            </a>
            <div
              className={`grid gap-6 pt-[30px] mobile:grid-cols-[42px_1fr] mobile:gap-[14px] mobile:pt-6 ${room.featured ? "grid-cols-[1fr_0.92fr]" : "grid-cols-[72px_1fr]"}`}
            >
              <p className="font-serif text-[0.85rem] tracking-[0.12em] text-gold">
                {room.number}
              </p>
              <div>
                <h3 className="mb-[15px] font-serif text-[clamp(1.45rem,2.4vw,2rem)] font-normal tracking-[0.09em] mobile:text-[1.45rem]">
                  {room.name}
                </h3>
                <p className="flex flex-wrap gap-x-3 gap-y-[3px] text-[0.68rem] font-light leading-[1.8] tracking-[0.11em] text-[#5c6164]">
                  {room.details.join("　")}
                </p>
                <TextLink href="#booking">VIEW ROOM</TextLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
