import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20 px-3 h-screen text-gray-900 w-screen flex justify-center items-center">
      <div className="">
        <h2 className="text-2xl font-bold">
          Hello, I'm Teguh Dwi Cahya Kusuma
        </h2>
        <h1 className="text-5xl font-bold">Welcome to Diama.dev</h1>
        <p className="leading-5 mt-10">
          This is my personal Portofolio Website, <br /> take a look at my
          project{" "}
          <Link className="hover:underline bg-orange-500 px-2 text-white rounded-md" to={"/project"}>
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
