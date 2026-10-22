import { TextLink } from "../ui/text-link";
import { Reveal } from "../ui/reveal";

export const DiningSection = () => {
  return (
    <section
      className="grid min-h-[860px] grid-cols-[minmax(420px,0.92fr)_minmax(0,1.08fr)] bg-warm-white mobile:flex mobile:min-h-0 mobile:flex-col"
      id="dining"
    >
      <Reveal className="h-[min(80vw,960px)] max-h-full mobile:h-auto mobile:w-[calc(100%-44px)] mobile:aspect-[4/5]">
        <img
          src="/images/dining.avif"
          alt="瀬戸内の魚介と旬菜を使った会席料理"
          width="900"
          height="1100"
          className="h-full object-cover motion-reduce:transform-none!"
          loading="lazy"
        />
      </Reveal>
      <Reveal className="flex flex-col justify-center px-[clamp(60px,10vw,160px)] py-[100px] tablet:px-[50px] tablet:py-[72px] mobile:px-[22px] mobile:pb-[112px] mobile:pt-[86px]">
        <p className="text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:text-[0.62rem]">
          DINING
        </p>
        <h2 className="my-[46px] font-serif text-[clamp(2.8rem,4.8vw,4.8rem)] font-normal leading-[1.5] tracking-[0.04em] mobile:my-[34px] mobile:mb-[42px] mobile:text-[clamp(2.35rem,11vw,3.2rem)]">
          瀬戸内を、
          <br />
          一皿の中に。
        </h2>
        <p className="mt-[22px] text-[clamp(0.9rem,1.05vw,1.02rem)] font-light leading-[2.05] tracking-[0.08em]">
          Executive Chefが、
          <br />
          その日の海と畑から届いた食材をもとに
          <br />
          一皿ずつ仕立てます。
        </p>
        <p className="text-[clamp(0.9rem,1.05vw,1.02rem)] font-light leading-[2.05] tracking-[0.08em]">
          季節と土地を感じる、
          <br />
          ここでしか味わえないディナーを。
        </p>
        <div className="mt-[50px] flex justify-between gap-6 border-t border-ink/20 pt-[18px] text-[0.58rem] tracking-[0.16em] mobile:flex-col mobile:gap-3">
          <span>RESTAURANT</span>
          <span>DINNER 18:00 – 22:00</span>
        </div>
        <TextLink href="#booking">VIEW DINING</TextLink>
      </Reveal>
    </section>
  );
};
