import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  small?: boolean;
}

export function Logo({ className, small = false }: LogoProps) {
  const height = small ? 36 : 48;
  const width = Math.round(height * (600 / 172));

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-90",
        className
      )}
      aria-label="Hausverwaltung Hürland Dorsten – Zur Startseite"
    >
      <Image
        src="/logo.png"
        alt="Hausverwaltung Hürland Dorsten"
        width={width}
        height={height}
        priority
        className="h-9 w-auto sm:h-11"
      />
    </Link>
  );
}
