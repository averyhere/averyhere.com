"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const NavLink = ({
  children,
  className,
  href,
  activeClasses,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
  activeClasses: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(`${className} ${isActive ? activeClasses : ''}`)}
    >
      {children}
    </Link>
  )
}