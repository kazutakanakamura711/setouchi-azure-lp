interface TextLinkProps {
  children: string;
  href: string;
}

export const TextLink = ({ children, href }: TextLinkProps) => {
  return (
    <a
      className="group mt-7 inline-flex min-h-11 items-center gap-[22px] text-[0.65rem] tracking-[0.19em]"
      href={href}
    >
      <span>{children}</span>
      <span
        className="relative h-px w-[60px] overflow-hidden bg-current opacity-70 after:absolute after:inset-0 after:translate-x-[-105%] after:bg-gold after:content-[''] after:transition-transform after:duration-[450ms] group-hover:after:translate-x-0"
        aria-hidden="true"
      />
    </a>
  );
};
