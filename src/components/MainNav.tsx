import { NavLink } from "@/components/ui";

export const MainNav = ({ variant }: { variant?: string }) => {
  const classes =
    variant === "horizontal"
      ? "grid grid-cols-1 md:grid-cols-5 max-w-max m-auto gap-4"
      : "flex flex-row flex-wrap gap-4 m-auto justify-center";
  return (
    <nav className="w-full text-center text-md md:text-xl">
      <ul className={classes}>
        <li className="w-auto md:w-full">
          <NavLink
            href="/about/"
            className="decoration-blue underline-offset-4 hover:underline"
            activeClasses="underline"
          >
            about
          </NavLink>
        </li>
        <li className="w-auto md:w-full">
          <NavLink
            href="/experience/"
            className="decoration-blue underline-offset-4 hover:underline"
            activeClasses="underline"
          >
            experience
          </NavLink>
        </li>
        <li className="w-auto md:w-full">
          <NavLink
            href="/projects/"
            className="decoration-blue underline-offset-4 hover:underline"
            activeClasses="underline"
          >
            projects
          </NavLink>
        </li>
        <li className="w-auto md:w-full">
          <NavLink
            href="/just-another-sudoku/"
            className="decoration-blue underline-offset-4 hover:underline"
            activeClasses="underline"
          >
            sudoku
          </NavLink>
        </li>
        <li className="w-auto md:w-full">
          <NavLink
            href="/contact/"
            className="decoration-blue underline-offset-4 hover:underline"
            activeClasses="underline"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
