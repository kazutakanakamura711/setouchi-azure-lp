import { Reveal } from "../ui/reveal";

export const LocationSection = () => {
  return (
    <section
      className="mx-auto grid w-[calc(100%-44px)] grid-cols-[minmax(0,0.65fr)_minmax(460px,1fr)] gap-[clamp(50px,8vw,120px)] py-[clamp(170px,18vw,270px)] tablet:w-[min(100%-56px,860px)] desktop:w-[min(100%-96px,1240px)] mobile:flex mobile:flex-col mobile:gap-16 mobile:py-[140px]"
      id="access"
    >
      <Reveal>
        <p className="text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:text-[0.62rem]">
          LOCATION
        </p>
        <h2 className="mt-[42px] font-serif text-[clamp(3.5rem,6.7vw,7rem)] font-normal leading-[1.05] tracking-[0.04em] mobile:mt-[30px] mobile:text-[clamp(3.4rem,16vw,4.7rem)]">
          Setouchi,
          <br />
          Japan.
        </h2>
      </Reveal>
      <Reveal as="figure" className="row-span-2 m-0 aspect-[4/3]">
        <img
          src="/images/location.avif"
          alt="木々と海に沿って続く瀬戸内の散歩道"
          width="1000"
          height="750"
          className="h-full object-cover motion-reduce:transform-none!"
          loading="lazy"
        />
      </Reveal>
      <Reveal className="grid grid-cols-[0.9fr_1.1fr] self-end gap-10 tablet:grid-cols-1 mobile:flex mobile:flex-col mobile:gap-[46px]">
        <p className="text-[clamp(0.9rem,1.05vw,1.02rem)] font-light leading-[2.05] tracking-[0.08em]">
          瀬戸内海の穏やかな景色に
          <br />
          囲まれた場所。
        </p>
        <dl className="m-0 border-t border-ink/20">
          <div className="flex justify-between gap-6 border-b border-ink/20 py-[18px] text-[0.73rem] tracking-[0.06em]">
            <dt>松山空港から</dt>
            <dd>車で約45分</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-ink/20 py-[18px] text-[0.73rem] tracking-[0.06em]">
            <dt>JR松山駅から</dt>
            <dd>車で約35分</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-ink/20 py-[18px] text-[0.73rem] tracking-[0.06em]">
            <dt>専用送迎</dt>
            <dd>サービスあり</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
};
