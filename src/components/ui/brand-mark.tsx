interface BrandMarkProps {
  compact?: boolean;
  dark?: boolean;
}

export const BrandMark = ({
  compact = false,
  dark = false,
}: BrandMarkProps) => {
  return (
    <a
      className={`inline-flex min-w-[72px] flex-col items-center font-serif leading-none tracking-[0.16em] sm:min-w-[88px] ${
        compact
          ? `${dark ? "text-ink" : "text-ivory"} transition-colors duration-500`
          : ""
      }`}
      href="#top"
      aria-label="SETOUCHI AZURE トップへ"
    >
      <span className="mb-[7px] font-sans text-[0.43rem] font-light sm:text-[0.5rem]">
        SETOUCHI
      </span>
      <strong className="text-[0.85rem] font-normal sm:text-base">AZURE</strong>
    </a>
  );
};
