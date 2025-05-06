//Mehdi NAOUI
//BTS SIO SLAM 2024
import React from "react";
import About from "./components/About";
import Certificats from "./components/Certificats";
import Contact from "./components/Contact";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Skillsmatrix from "./components/Skillsmatrix";

export default function App(): React.ReactNode {
  return (
    <main className="transition-colors duration-500  text-gray-400 bg-blue-100 dark:bg-gray-900 scroll-smooth">
      {/*<button
        className="ml-4 inline-flex font-title text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        onClick={toggleDarkmode}
      >
        {darkmode && `Dark`}
        {!darkmode && `Bright`}
      </button>*/}
      <Navbar />
      <About />

      <Internship />
      <Skillsmatrix />
      <Skills />
      <Certificats />
      <Project />
      <Contact />
      {/*<TechnologyMonitoring />*/}
    </main>
  );
}
