import { LOGO_URL } from "@/lib/constants";

interface LogoImgProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function LogoImg({ size = 48, className = "" }: LogoImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_URL}
      alt="Dust & Wipes Ltd. Logo"
      width={size}
      height={size}
      className={className}
      loading="eager"
    />
  );
}
