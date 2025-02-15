//Mehdi NAOUI
//BTS SIO SLAM 2024
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Certificats from "./components/Certificats";
import Contact from "./components/Contact";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Skillsmatrix from "./components/skillsmatrix";
import TechnologyMonitoring from "./components/TechnologyMonitoring";

export default function App(): React.ReactNode {
  //Darkmode 'useState' hooks initialization, origninally false.
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
    <main className="text-gray-400 bg-blue-100 dark:bg-gray-900">
      <button
        className="ml-4 inline-flex font-title text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        onClick={toggleDarkmode}
      >
        {darkmode && `Dark`}
        {!darkmode && `Bright`}
      </button>
      <About />
      <Certificats />
      <Internship />
      <Skillsmatrix />
      <Navbar />
      <Skills />
      <Project />
      <Contact />
      <TechnologyMonitoring />
    </main>
  );
}
