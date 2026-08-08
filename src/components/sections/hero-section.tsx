export const HeroSection = () => {
  return (
    <section
      className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-navy text-ivory"
      id="top"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover object-center mobile:object-[58%_center]"
        src="/images/hero.avif"
        alt="夕暮れの瀬戸内海と島々"
        width="1920"
        height="1080"
        fetchPriority="high"
      />
      <div className="absolute inset-0 h-full bg-[linear-gradient(180deg,rgba(17,23,35,0.18)_0%,rgba(13,20,34,0.04)_46%,rgba(13,20,34,0.48)_100%)]" />
      <div className="relative z-10 w-[min(90vw,1100px)] animate-hero-copy pt-[8vh] text-center mobile:w-[calc(100%-24px)] mobile:pt-[4vh]">
        <p className="mb-[clamp(30px,5vh,52px)] text-[0.58rem] tracking-[0.24em] mobile:mb-[34px]">
          SETOUCHI AZURE
        </p>
        <h1
          className="font-serif text-[clamp(3.6rem,7.2vw,7rem)] font-normal leading-[1.35] tracking-[0.04em] drop-shadow-[0_2px_24px_rgba(0,0,0,0.18)] mobile:text-[clamp(2.05rem,8.8vw,3.7rem)] mobile:leading-[1.45]"
          id="hero-title"
        >
          瀬戸内の静けさに、
          <br />
          泊まる。
        </h1>
        <p className="mt-[clamp(28px,5vh,54px)] text-[clamp(0.7rem,1.2vw,0.92rem)] font-light tracking-[0.2em] mobile:mx-auto mobile:mt-[34px] mobile:max-w-[290px] mobile:text-[0.65rem] mobile:leading-[1.9]">
          A private retreat surrounded by sea, light, and silence.
        </p>
      </div>
      <a
        className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
        href="#concept"
      >
        <span className="mb-[14px] text-[0.48rem] tracking-[0.22em]">
          SCROLL
        </span>
        <span
          className="h-[70px] w-px overflow-hidden bg-ivory/35 after:block after:h-1/2 after:w-full after:animate-scroll-line after:bg-ivory after:content-[''] mobile:h-[50px]"
          aria-hidden="true"
        />
      </a>
    </section>
  );
};
