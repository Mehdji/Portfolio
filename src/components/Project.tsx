//Mehdi NAOUI
//BTS SIO 2024
//Portfolio
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
//Importing icon library from heroic icons.
import { CodeBracketIcon } from "@heroicons/react/24/solid";
//importing project object from data.ts
import { projects } from "../data";
// src/components/Project.tsx
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="projects"
      className=" text-sky-950  dark:text-blue-100 body-font scroll-mt-28"
    >
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen  flex justify-center px-10  text-sky-950 dark:text-blue-100"
      >
        <div className="container  px-5 py-1 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CodeBracketIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-sky-950 dark:text-blue-100">
              Réalisations
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Découvrez ce que j’ai eu plaisir à développer.
            </p>
          </div>
          <div className="flex flex-wrap h-auto -m-4 ">
            {/*border-red-400 border-4*/}
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-screen h-96 p-4"
              >
                <div className="flex relative rounded-lg overflow-hidden object-contain h-full shadow-sky-950 shadow-lg">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full  object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-5 relative z-5 w-full h-fit border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed title-body text-lg font-normal text-white mb-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}
