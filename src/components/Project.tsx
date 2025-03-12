//Mehdi NAOUI
//BTS SIO 2024
//Portfolio

//Importing icon library from heroic icons.
import { CodeBracketIcon } from "@heroicons/react/24/solid";
//importing project object from data.ts
import { projects } from "../data";
// src/components/Project.tsx
export default function Projects() {
  return (
    <section
      id="projects"
      className=" text-sky-950 dark:text-blue-100 body-font"
    >
      <div className="container px-5 py-1 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-sky-950 dark:text-blue-100">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here you can take a look at my creations.
          </p>
        </div>
        <div className="flex flex-wrap h-screen -m-4 ">
          {/*border-red-400 border-4*/}
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-screen  p-4"
            >
              <div className="flex relative rounded-lg overflow-hidden h-full shadow-sky-950 shadow-lg">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full  object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-5 relative z-10 w-full h-1/3 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
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
    </section>
  );
}
