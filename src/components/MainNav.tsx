"use client";

import { useState } from "react";
import { NavLink } from "@/components/ui";
import { cn } from "@/lib/utils";

export const MainNav = ({ variant }: { variant?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 mt-1.5 z-50"
      >
        <span
          className={`bg-purple block transition-all duration-300 ease-out h-1 w-9 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`bg-purple block transition-all duration-300 ease-out h-1 w-9 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-purple block transition-all duration-300 ease-out h-1 w-9 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
          }`}
        ></span>
      </button>
      <nav
        className={cn([
          "absolute left-0 top-0 z-40 w-full h-dvh flex-col items-center justify-center",
          "bg-white dark:bg-black text-center text-md",
          "md:relative md:flex-row md:w-full md:h-auto md:text-xl",
          !isOpen ? "hidden md:flex" : "flex",
        ])}
      >
        <ul
          className={cn([
            "hidden w-full",
            variant === "horizontal"
              ? "md:grid grid-cols-1 md:grid-cols-5 max-w-max m-auto gap-4"
              : "md:grid grid-cols-1 gap-4 m-auto",
            isOpen &&
              "max-sm:flex max-sm:left-0 max-sm:bottom-0 max-sm:bg-white max-sm:dark:bg-black max-sm:w-full max-sm:flex-col",
          ])}
        >
          <li className="w-auto md:w-full">
            <NavLink
              href="/about/"
              className="decoration-blue underline-offset-4 decoration-2 hover:underline"
              activeClasses="underline"
              onClick={() => setIsOpen(false)}
            >
              about
            </NavLink>
          </li>
          <li className="w-auto md:w-full">
            <NavLink
              href="/experience/"
              className="decoration-blue underline-offset-4 decoration-2 hover:underline"
              activeClasses="underline"
              onClick={() => setIsOpen(false)}
            >
              experience
            </NavLink>
          </li>
          <li className="w-auto md:w-full">
            <NavLink
              href="/projects/"
              className="decoration-blue underline-offset-4 decoration-2 hover:underline"
              activeClasses="underline"
              onClick={() => setIsOpen(false)}
            >
              projects
            </NavLink>
          </li>
          <li className="w-auto md:w-full">
            <NavLink
              href="/just-another-sudoku/"
              className="decoration-blue underline-offset-4 decoration-2 hover:underline"
              activeClasses="underline"
              onClick={() => setIsOpen(false)}
            >
              sudoku
            </NavLink>
          </li>
          <li className="w-auto md:w-full">
            <NavLink
              href="/contact/"
              className="decoration-blue underline-offset-4 decoration-2 hover:underline"
              activeClasses="underline"
              onClick={() => setIsOpen(false)}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
