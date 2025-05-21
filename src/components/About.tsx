// src/components/About.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mehdi from "../assets/mehdi.jpeg";

export default function About(): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="about">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen flex justify-center px-10  text-sky-950 dark:text-blue-100"
      >
        <div className="scroll-mt-28 container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-950 dark:text-blue-100 ">
              {" "}
              Bonjour, je suis Mehdi.
              <br className="hidden  lg:inline-block" />
            </h1>
            <p className="mb-8 font-body  leading-relaxed  text-sky-950 dark:text-blue-100">
              Bienvenue sur mon portfolio ! Je suis étudiant en BTS SIO
              passionné par l'informatique et surtout par le développement.
              J'aime apprendre chaque jour de nouvelles choses, expérimenter, et
              créer des projets concrets. J’ai remarqué que c’est avec de la
              régularité, de la curiosité et une bonne dose de créativité qu’on
              obtient les meilleurs résultats. Mon objectif est simple :
              développer des solutions numériques à la fois utiles et agréables
              à utiliser, que ce soit pour mettre en valeur une entreprise sur
              le web ou pour concevoir des applications innovantes. Ce qui
              m’anime, c’est avant tout résoudre des problèmes concrets en
              proposant des interfaces claires, efficaces et esthétiques.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex font-body text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Collaborons ensemble
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex font-title text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Découvrez mes réalisations
              </a>
            </div>
          </div>
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-contain object-center rounded-full s shadow-sky-950 shadow-lg"
              alt="hero"
              src={mehdi}
            />
          </div>
        </div>
      </motion.section>
    </section>
  );
}
