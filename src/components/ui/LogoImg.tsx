import Image from "next/image";
import { LOGO_URL } from "@/lib/constants";

interface LogoImgProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function LogoImg({ size = 48, className = "", priority = true }: LogoImgProps) {
  return (
    <Image
      src={LOGO_URL}
      alt="Dust & Wipes Ltd. Logo"
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
