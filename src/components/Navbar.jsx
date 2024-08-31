import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };
  return (
    <nav className="bg-orange-200 p-2 top-3 shadow-lg fixed w-fit rounded-lg left-1/2 -translate-x-1/2 h-10">
      <div className="flex gap-3 items-center justify-between">
        <div className="bg-white dark:bg-gray-900 dark:text-orange-50 shadow-md px-6 h-14 flex justify-center items-center rounded-md font-semibold text-orange-900 text-xl">
          <h1>Diama.dev</h1>
        </div>
        <ul className=" flex gap-10 h-14 text-white bg-orange-500 dark:bg-orange-950 shadow-md px-10 justify-center items-center rounded-md">
          <li>
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to={"/project"}>
              Projects
            </Link>
          </li>
        </ul>
        <button
          onClick={handleThemeChange}
          className="aspect-square bg-orange-500 dark:bg-orange-950 text-white rounded-lg flex justify-center items-center p-4 "
        >
          {theme === "light" ? "🌞" : "🌜"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
