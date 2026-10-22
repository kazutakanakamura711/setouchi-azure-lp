import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";

import { navigation } from "../../data/landing-page";
import { cn } from "../../lib/cn";
import { BrandMark } from "../ui/brand-mark";

interface HeaderProps {
  menuOpen: boolean;
  onMenuOpenChange: (menuOpen: boolean) => void;
}

export const Header = ({ menuOpen, onMenuOpenChange }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileBookingRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const menuButton = menuButtonRef.current;
    const focusFrame = window.requestAnimationFrame(() => menuButton?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      menuButton?.focus();
    };
  }, [menuOpen, onMenuOpenChange]);

  const closeMenu = () => onMenuOpenChange(false);

  const handleKeyDownCapture = (event: KeyboardEvent<HTMLElement>) => {
    if (!menuOpen) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = [
      menuButtonRef.current,
      ...mobileLinkRefs.current,
      mobileBookingRef.current,
    ].filter(
      (element): element is HTMLAnchorElement | HTMLButtonElement =>
        element !== null,
    );
    const first = focusable[0];
    const last = focusable.at(-1);
    const activeElement = event.target;

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[6.5vw] transition-[height,background-color,box-shadow] duration-500 tablet:h-[74px] tablet:px-7",
        scrolled || menuOpen
          ? "h-[74px] bg-ivory/95 shadow-[0_1px_0_rgba(36,42,49,0.1)] tablet:h-[68px]"
          : "h-[88px]",
      )}
      onKeyDownCapture={handleKeyDownCapture}
    >
      <BrandMark compact dark={scrolled || menuOpen} />
      <nav
        className={cn(
          "hidden items-center gap-[clamp(26px,3.25vw,56px)] text-[0.62rem] font-normal tracking-[0.18em] transition-colors duration-500 desktop:flex",
          scrolled || menuOpen ? "text-ink" : "text-ivory",
        )}
        aria-label="メインナビゲーション"
      >
        {navigation.map((item) => (
          <a
            className="relative py-[14px] after:absolute after:inset-x-0 after:bottom-[6px] after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
        <a
          className={`grid min-h-[46px] min-w-[124px] place-items-center transition-colors duration-300 hover:bg-gold hover:text-ivory ${
            scrolled || menuOpen ? "bg-navy text-ivory" : "bg-ivory text-ink"
          }`}
          href="#booking"
        >
          BOOK NOW
        </a>
      </nav>
      <button
        ref={menuButtonRef}
        data-testid="menu-toggle"
        className={`relative z-10 hidden min-h-[46px] min-w-[52px] cursor-pointer place-items-center border-0 bg-transparent p-0 text-[0.58rem] tracking-[0.16em] tablet:grid ${
          scrolled || menuOpen ? "text-ink" : "text-ivory"
        }`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => onMenuOpenChange(!menuOpen)}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>
      <nav
        id="mobile-navigation"
        className={`fixed inset-0 z-0 flex flex-col justify-center bg-ivory px-[max(28px,8vw)] pb-[50px] pt-[100px] text-ink transition-[opacity,visibility] duration-500 desktop:hidden ${
          menuOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-label="モバイルナビゲーション"
        aria-hidden={!menuOpen}
        data-open={menuOpen}
      >
        {navigation.map((item, index) => (
          <a
            ref={(element) => {
              mobileLinkRefs.current[index] = element;
            }}
            className="flex min-h-[60px] items-center gap-[22px] border-b border-ink/20 font-serif text-[clamp(1.35rem,5vw,2rem)] tracking-[0.12em]"
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="text-[0.56rem] text-gold">0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <a
          ref={mobileBookingRef}
          className="mt-[38px] flex min-h-[60px] items-center justify-center border-0 bg-navy font-sans text-[0.65rem] tracking-[0.12em] text-ivory"
          href="#booking"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          BOOK NOW
        </a>
      </nav>
    </motion.header>
  );
};
