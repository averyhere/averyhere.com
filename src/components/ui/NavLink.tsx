"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const NavLink = ({
  children,
  className,
  href,
  activeClasses,
  exactMatchOnly = false,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
  activeClasses: string;
  exactMatchOnly?: boolean;
  onClick?: (e?: any) => void;
}) => {
  const pathname = usePathname();
  const isActive = exactMatchOnly ? pathname === href : pathname.includes(href);

  return (
    <Link
      href={href}
      className={cn(`${className} ${isActive ? activeClasses : ""}`)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
