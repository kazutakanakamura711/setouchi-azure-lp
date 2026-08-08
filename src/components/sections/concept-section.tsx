import { Reveal } from "../ui/reveal";

export const ConceptSection = () => {
  return (
    <section
      className="mx-auto grid w-[calc(100%-44px)] grid-cols-[minmax(0,0.82fr)_minmax(380px,0.72fr)] items-center gap-[clamp(60px,10vw,150px)] py-[clamp(150px,17vw,260px)] tablet:w-[min(100%-56px,860px)] desktop:w-[min(100%-96px,1240px)] mobile:flex mobile:flex-col mobile:gap-[70px] mobile:py-[120px] mobile:pb-[150px]"
      id="concept"
    >
      <Reveal className="pl-[clamp(0px,5vw,72px)] tablet:pl-0 mobile:w-full">
        <p className="text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:text-[0.62rem]">
          THE ART OF SILENCE
        </p>
        <h2 className="my-12 font-serif text-[clamp(2.4rem,4.1vw,4.25rem)] font-normal leading-[1.55] tracking-[0.04em] mobile:my-[34px] mobile:mb-[42px] mobile:text-[clamp(2rem,9.6vw,2.8rem)]">
          何もしない時間が、
          <br />
          いちばん贅沢になる。
        </h2>
        <p className="mt-7 text-[clamp(0.9rem,1.05vw,1.02rem)] font-light leading-[2.05] tracking-[0.08em]">
          穏やかな瀬戸内海。
          <br />
          ゆっくりと移ろう光。
          <br />
          土地の恵みを味わう料理。
        </p>
        <p className="text-[clamp(0.9rem,1.05vw,1.02rem)] font-light leading-[2.05] tracking-[0.08em]">
          SETOUCHI AZUREは、
          <br />
          日常から少し離れ、
          <br />
          本来の時間を取り戻すための場所です。
        </p>
      </Reveal>
      <Reveal
        as="figure"
        className="m-0 aspect-[3/4] mobile:ml-auto mobile:w-[calc(100%-36px)]"
      >
        <img
          src="/images/concept.avif"
          alt="島々が浮かぶ静かな瀬戸内海"
          width="900"
          height="1200"
          className="h-full object-cover motion-reduce:!transform-none"
          loading="lazy"
        />
      </Reveal>
    </section>
  );
};
