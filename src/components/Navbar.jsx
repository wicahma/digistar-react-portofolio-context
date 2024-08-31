import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-200 p-2 top-3 shadow-lg fixed w-fit rounded-lg left-1/2 -translate-x-1/2 h-10">
      <div className="flex gap-3 items-center justify-between">
        <div className="bg-white shadow-md px-6 h-14 flex justify-center items-center rounded-md font-semibold text-orange-900 text-xl">
          <h1>Diama.dev</h1>
        </div>
        <ul className=" flex gap-10 h-14 text-white bg-orange-500 shadow-md px-10 justify-center items-center rounded-md">
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
      </div>
    </nav>
  );
};

export default Navbar;
