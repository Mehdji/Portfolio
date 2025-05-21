import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import autrice_logo from "../assets/autrice.jpg";
import autrice_app from "../assets/autriceapp.png";
import autrice_workplace from "../assets/espace_travail_autrice.jpg";
import autrice_front from "../assets/facade_ext_autrice.png";
import guerkin from "../assets/guerkin.png";
import playright_code from "../assets/playrightcode.png";
import playright_logo from "../assets/playrightlogo.png";
import autrice_workstation from "../assets/poste_de_travail_autrice.jpg";
import test from "../assets/test.png";

// src/components/Intership.tsx
export default function Internship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="internship"
      className=" text-sky-950 dark:text-blue-100 body-font scroll-mt-28"
    >
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen flex justify-center px-10  text-sky-950 dark:text-blue-100"
      >
        <div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40  ">
          <div className="text-center">
            <WrenchScrewdriverIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
            <h1 className="sm:text-4xl mb-10 text-3xl font-medium title-font  text-sky-950 dark:text-blue-100">
              Stage
            </h1>
            <div className="overflow-hidden mx-auto my-10  w-1/2 shadow-sky-950 shadow-lg rounded-3xl ">
              <img src={autrice_logo} className=" text-center "></img>
            </div>
            <div className="overflow-hidden mx-auto my-10  w-full shadow-sky-950 shadow-lg rounded-3xl ">
              <img src={autrice_app} className=" text-center "></img>
            </div>
            <p className="mb-8 first-letter:font-serif   first-letter:float-left first-letter:font-bold first-letter:text-6xl font-body leading-relaxed text-justify text-sky-950 dark:text-blue-100">
              Durant mon stage au sein de l'entreprise <span>Autrice</span>,
              j'ai eu l'opportunité de participer au développement d'une
              application web innovante, spécialisée dans la création
              d’e‑learning, Ce stage m'a permis de découvrir et de mettre en
              pratique de nombreuses compétences techniques et méthodologiques
              dans un environnement professionnel.
            </p>
            <div className="overflow-hidden mx-auto my-10  w-1/2 shadow-sky-950 shadow-lg rounded-3xl ">
              <img src={autrice_front} className=" text-center "></img>
            </div>
            <ul className="mb-8 font-body leading-loose list-disc  text-justify text-sky-950 dark:text-blue-100">
              <li className="">
                <span className="font-semibold">
                  Travail en équipe avec la méthode Agile :
                </span>{" "}
                J'ai collaboré avec une équipe multidisciplinaire en suivant les
                principes de la méthode Agile, notamment à travers des réunions
                quotidiennes et une gestion itérative des tâches.
              </li>
              <li>
                <span className="font-semibold">
                  Gestion de projet avec Jira :
                </span>{" "}
                J'ai appris à utiliser Jira pour organiser, prioriser et suivre
                les tickets liés aux fonctionnalités et corrections à
                implémenter.
              </li>
              <li>
                <span className="font-semibold">
                  Gestion de versions avec Git :
                </span>{" "}
                J'ai manipulé Git pour gérer les branches de développement,
                faciliter le travail collaboratif et assurer une intégration
                continue des modifications.
              </li>
              <div className="overflow-hidden mx-auto my-10  w-1/2 shadow-sky-950 shadow-lg rounded-3xl ">
                <img src={autrice_workplace} className=" text-center "></img>
              </div>
              Développement Front-end et Back-end en TypeScript:
              <li>
                <span className="font-semibold">Front-end :</span> J'ai
                développé des interfaces utilisateur avec React et TypeScript,
                en utilisant le bundler Vite pour optimiser les performances.
              </li>
              <li>
                <span className="font-semibold">Back-end :</span> J'ai contribué
                à la logique serveur en TypeScript, tout en utilisant Node.js
                pour faire tourner le serveur en local.
              </li>
              <li>
                <span className="font-semibold">Qualité logicielle (QA) :</span>{" "}
                J'ai réalisé des tests automatisés avec des outils comme
                Playwright et Cucumber pour garantir la fiabilité des
                fonctionnalités développées.
              </li>
              <li>
                <span className="font-semibold">API et test des routes :</span>{" "}
                Avec Postman, j'ai testé et vérifié le bon fonctionnement des
                différentes routes de l'application.
              </li>
              <div className="overflow-hidden mx-auto my-10 w-fit shadow-sky-950 shadow-lg rounded-3xl ">
                <img src={playright_logo} className=" text-center "></img>
              </div>
              <div className="overflow-hidden mx-auto my-10 w-fit shadow-sky-950 shadow-lg rounded-3xl ">
                <img src={playright_code} className="h-32 text-center "></img>
              </div>
              <div className="overflow-hidden mx-auto my-10 w-fit shadow-sky-950 shadow-lg rounded-3xl ">
                <img src={guerkin} className=" text-center "></img>
              </div>
              <div className="overflow-hidden mx-auto my-10  w-fit shadow-sky-950 shadow-lg rounded-3xl ">
                <img src={test} className=" text-center "></img>
              </div>
              <div className="overflow-hidden mx-auto my-10  w-1/2 shadow-sky-950 shadow-lg rounded-3xl ">
                <img src={autrice_workstation} className=" text-center "></img>
              </div>
            </ul>
            <div className=" my-10 text-center"></div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
