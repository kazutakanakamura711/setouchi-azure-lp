import { navigation } from "../../data/landing-page";
import { BrandMark } from "../ui/brand-mark";

interface FooterProps {
  inert?: boolean;
}

export const Footer = ({ inert = false }: FooterProps) => {
  return (
    <footer
      className="bg-charcoal px-[max(6.5vw,32px)] pb-9 pt-[90px] text-[rgba(248,245,239,0.75)] mobile:px-[22px] mobile:pb-8 mobile:pt-[72px]"
      id="contact"
      inert={inert}
    >
      <div className="grid min-h-[260px] grid-cols-[1fr_0.7fr_0.8fr] gap-[70px] mobile:grid-cols-2 mobile:gap-x-8 mobile:gap-y-[58px] mobile:pb-[68px]">
        <BrandMark />
        <nav
          className="flex flex-col items-start gap-[18px] text-[0.58rem] tracking-[0.16em]"
          aria-label="フッターナビゲーション"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="flex flex-col gap-[42px] text-[0.6rem] tracking-[0.08em] mobile:col-span-2 mobile:flex-row mobile:justify-between mobile:gap-6">
          <div className="flex gap-[30px] mobile:flex-col mobile:gap-[15px]">
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
          <div className="flex gap-[30px] mobile:flex-col mobile:gap-[15px]">
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 pt-[30px] text-[0.52rem] tracking-[0.14em]">
        © SETOUCHI AZURE
      </p>
    </footer>
  );
};
