//Mehdi NAOUI
//BTS SIO SLAM 2024
// src/components/Skills.tsx
import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // true = 1 seule fois
  return (
    /*Creation of "skills" section */
    <section id="skills" className="scroll-mt-10">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen p-10 text-sky-950 dark:text-blue-100"
      >
        {/*Container class set the max width to the min-width of the current breakpoint. */}
        {/*Here we use a px-5 for horizontal padding, py-5 for vertical padding  mx-auto to center the div  */}
        <div className="container  px-5 py-10 mx-auto ">
          {/*Centerring the div and margin of 20*/}
          <div className="text-center mb-20">
            {/*Adding a "chip icon" for illustration; w-10 for the width inline-block for the layout and mb-4 for the margin bottom*/}
            <CpuChipIcon className="w-10 inline-block  text-sky-600 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font  text-sky-950 dark:text-blue-100  mb-4">
              {/*Title for the section; set up text size to 4xl for sm; sm is for responsive(small screen= max-width 640px) */}
              {/*text-3xl and font-medium for the font size and title font for the font family; mb-4 for the margin bottom*/}
              Solutions et technologies
            </h1>
            <p className="text-base  text-sky-950 dark:text-blue-100 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {/*Adding a paragraph; using text base for the font size and leading-relaxed to set the line height; xl and lg to set the width responsiveness mx for horiz margin*/}
              Un aperçu des technologies et outils que j’utilise dans mes
              projets.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {/*Set up flex container with flexwrap; responsive for large and small screen: set the with and the margin and for margin bottom*/}
            {/*We use a map method to go trough our list of skills*/}

            {skills.map((skill) => (
              <div key={skill.title} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded hover:bg-gray-900 flex p-4 h-full items-center">
                  <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font flex w-full justify-center items-center  text-4xl font-medium text-white">
                    <span className="px-4">
                      {" "}
                      <skill.logo />{" "}
                    </span>
                    {skill.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}
