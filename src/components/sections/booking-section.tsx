import { Reveal } from "../ui/reveal";

export const BookingSection = () => {
  return (
    <section
      className="relative grid min-h-[760px] place-items-center overflow-hidden bg-navy text-center text-ivory mobile:min-h-[680px]"
      id="booking"
    >
      <img
        src="/images/booking.avif"
        alt="夕暮れの瀬戸内海に浮かぶ船"
        width="1600"
        height="900"
        className="absolute inset-0 h-full w-full object-cover mobile:object-[58%_center]"
        loading="lazy"
      />
      <div className="absolute inset-0 h-full bg-[rgba(18,27,47,0.54)]" />
      <Reveal className="relative z-10 w-[min(90vw,900px)]">
        <p className="text-[0.68rem] font-medium leading-[1.6] tracking-[0.22em] mobile:text-[0.62rem]">
          A JOURNEY INTO STILLNESS
        </p>
        <h2 className="my-[42px] mb-[58px] font-serif text-[clamp(2.7rem,5.1vw,5.2rem)] font-normal leading-[1.55] tracking-[0.05em] mobile:my-[34px] mobile:mb-[52px] mobile:text-[clamp(2rem,9vw,2.8rem)]">
          ここでしか流れない時間を。
        </h2>
        <a
          className="mx-auto grid min-h-16 w-[min(300px,82vw)] place-items-center bg-ivory text-[0.7rem] tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold hover:text-ivory"
          href="#contact"
        >
          BOOK YOUR STAY
        </a>
        <a
          className="mt-[30px] inline-block min-h-11 border-b border-ivory/60 p-[14px] text-[0.62rem] tracking-[0.18em]"
          href="#contact"
        >
          CONTACT US
        </a>
      </Reveal>
    </section>
  );
};
