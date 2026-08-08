import { TextLink } from "../ui/text-link";
import { Reveal } from "../ui/reveal";

export const SpaSection = () => {
  return (
    <section
      className="relative min-h-[1050px] overflow-hidden bg-navy text-ivory mobile:min-h-0"
      id="spa"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-30 mobile:object-[60%_center]"
        src="/images/spa-wide.avif"
        alt=""
        width="1600"
        height="900"
        loading="lazy"
      />
      <div className="absolute inset-0 h-full bg-[linear-gradient(90deg,rgba(15,27,52,0.92),rgba(17,31,59,0.62))]" />
      <div className="relative mx-auto grid min-h-[1050px] w-[calc(100%-44px)] grid-cols-[minmax(330px,0.72fr)_minmax(0,1fr)] items-center gap-[clamp(70px,11vw,170px)] tablet:w-[min(100%-56px,860px)] desktop:w-[min(100%-96px,1240px)] mobile:flex mobile:min-h-0 mobile:flex-col mobile:items-stretch mobile:gap-[70px] mobile:py-[110px] mobile:pb-[130px]">
        <Reveal
          as="figure"
          className="m-0 aspect-[8/11] mobile:w-[70%] mobile:self-end"
        >
          <img
            src="/images/spa-detail.avif"
            alt="静かな水面に浮かぶ一艘の舟"
            width="800"
            height="1100"
            className="h-full object-cover motion-reduce:!transform-none"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <p className="text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:text-[0.62rem]">
            SPA
          </p>
          <h2 className="my-12 mb-[62px] max-w-[780px] font-serif text-[clamp(2.6rem,4.5vw,4.6rem)] font-normal leading-[1.55] tracking-[0.04em] mobile:my-[34px] mobile:mb-12 mobile:text-[clamp(2.1rem,9.6vw,2.8rem)]">
            海に身をゆだねるような、
            <br />
            静かな時間。
          </h2>
          <h3 className="mb-5 font-serif text-[1.1rem] font-normal tracking-[0.1em] text-gold">
            Ocean View Spa
          </h3>
          <p className="text-[clamp(0.9rem,1.05vw,1.02rem)] font-light leading-[2.05] tracking-[0.08em]">
            海を眺めながら受ける
            <br />
            オリジナルトリートメント。
          </p>
          <TextLink href="#booking">VIEW SPA</TextLink>
        </Reveal>
      </div>
    </section>
  );
};
