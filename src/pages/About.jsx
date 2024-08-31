import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
const About = () => {
  return (
    <div className="pt-20 px-3 text-gray-900">
      <div className="max-w-full w-[40%] mx-auto px-3">
        <h1 className="text-3xl font-semibold">About me</h1>
        <div className="space-y-4 text-lg mt-3 tracking-wide text-justify">
          <p>
            Hi, I'm Teguh Dwi Cahya Kusuma, a software engineer based in
            Indonesia. I have a passion for software engineering and love to
            create things that can help people. I have experience in building
            web applications using React, Node.js, and Express.js. I also have
            experience in building mobile applications using React Native. I am
            a fast learner and always eager to learn new things. I am looking
            for opportunities to work with a team of talented engineers to build
            amazing products.
          </p>

          <p>
            I have a Bachelor's degree in Information System from the Ahmad Dahlan University. I have worked as a software engineer for 2 years and
            have experience working in both startups and large companies from
            Internships. I am proficient in JavaScript, HTML, and CSS. I have
            experience working with databases such as MySQL and MongoDB. I am
            also familiar with version control systems like Git.
          </p>

          <p>
            In my free time, I like to read books, play video games, and watch
            movies. I also enjoy traveling and exploring new places. I am
            passionate about technology and always keep up to date with the
            latest trends in the tech industry. I am a team player and enjoy
            working with others to achieve common goals.
          </p>

          <p>
            If you have a project that you would like to discuss or if you would
            like to collaborate on something, feel free to contact me. I am
            always open to new opportunities and challenges. Let's build
            something amazing together!
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white flex gap-2 justify-center items-center px-2 py-1 rounded-md">
            <img className="aspect-auto h-4" src={github} alt="Github Icon" />
            <a href="https://github.com/wicahma" target="_blank">Github</a>
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white flex gap-2 justify-center items-center px-2 py-1 rounded-md">
            <img className="aspect-auto h-4" src={linkedin} alt="Linkedin Icon" />
            <a href="https://www.linkedin.com/in/u-diama/">Linkedin</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
