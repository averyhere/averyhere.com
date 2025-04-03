"use client"

import { AboutSection } from "@/components/about"
import { Navigation } from "@/components/navigation"
import { MyWorkSlider } from "@/components/my-work"
import { ContactSection } from "@/components/contact"

import { usePathname } from "next/navigation"

export default function DefaultPage() {
  const pathname = usePathname();
  
  return (
    <>
      <Navigation variant="horizontal" />

      <div className={`transition-all duration-300 ${pathname === '/about' ? 'max-h-full' : 'h-0 max-h-0 opacity-0 pointer-events-none'}`}>
        <AboutSection />
      </div>

      <div className={`transition-all duration-300 ${pathname === '/my-work' ? 'max-h-full' : 'h-0 max-h-0 opacity-0 pointer-events-none'}`}>
        <MyWorkSlider />
      </div>

      <div className={`transition-all duration-300 ${pathname === '/contact' ? 'max-h-full' : 'h-0 max-h-0 opacity-0 pointer-events-none'}`}>
        <ContactSection />
      </div>
    </>
  );
}
