// src/components/navbar.tsx
import git from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function Navbar() {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  useEffect(() => {
    //Here we decide if we turn on/off darkmode.
    //We are using a useEffect hooks to manage the side effect.
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  //toggle darmode using setDarkmode
  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
    console.log(darkmode);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flew-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font gont -medium text-white mb-4 md:mb-0">
          {/*<button
            className="ml-4 inline-flex font-title text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            onClick={toggleDarkmode}
          >
            {darkmode && `Dark`}
            {!darkmode && `Bright`}
          </button>*/}

          <a href="#about" className="ml-3 text-xl">
            Mehdi NAOUI
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l  md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#internship" className="mr-5 hover:text-white">
            Stage
          </a>
          <a href="#skills_matrix" className="mr-5 hover:text-white ">
            Matrice de compétences
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Solutions et technologies
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Réalisations
          </a>
          <a href="#certificats" className="mr-5 hover:text-white">
            Certifications
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Me contacter
            {/*<ArrowRightIcon className="w-4 h-4 ml-1" />*/}
          </a>
          <a
            href="https://github.com/Mehdji/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src={git}
              alt="GitHub"
              className="mx-3 w-8 h-auto filter invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mehdi-naoui-5a3718140/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800 transition-transform duration-200 hover:scale-110"
          >
            <img src={linkedin} alt="GitHub" className="w-8 h-auto mx-3  " />
          </a>
        </nav>

        {/*<label htmlFor="swith-dk-mode " className="mb-2">
            {darkmode ? <GoMoon /> : <GoSun />}
          </label>*/}
        {darkmode ? (
          <GoSun className="text-slate-500" />
        ) : (
          <GoSun className="text-white" />
        )}
        <Switch
          checked={darkmode}
          onCheckedChange={toggleDarkmode}
          id="swith-dk-mode"
          className="mx-2 "
        />
        {darkmode ? (
          <GoMoon className="text-white" />
        ) : (
          <GoMoon className="text-slate-500" />
        )}
      </div>
    </header>
  );
}
