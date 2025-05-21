// srx/components/TechnologyMonitoring.tsx

import { EyeIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import code from "../assets/code.gif";
import owasp from "../assets/cybersec.png";
import feedly from "../assets/feddly.jpg";
import genai from "../assets/genai.gif";

export default function TechnologyMonitoring() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="TechnologyMonitoring"
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
        {/*<div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40">
        <div className="text-center">
          <EyeIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
          <h1 className="sm:text-4xl mb-10 text-3xl font-medium title-font  text-sky-950 dark:text-blue-100">
            Veille technologique
          </h1>
        </div>
      </div>*/}

        <div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40">
          <div className="text-center">
            <EyeIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
            <h1 className="sm:text-4xl mb-10 text-3xl font-medium title-font text-sky-950 dark:text-blue-100">
              Veille Technologique
            </h1>
            <img
              src={feedly}
              className="mx-auto h-80 w-auto mb-28 object-contain  shadow-sky-950 shadow-lg rounded-3xl"
              alt="anssi1"
            />
            <p className="mb-10 text-justify leading-relaxed font-body text-sky-950 dark:text-blue-100 m mx-auto">
              Pour organiser et suivre efficacement ma{" "}
              <strong>veille technologique</strong>, j’ai utilisé la plateforme{" "}
              <a
                href="https://feedly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>Feedly</strong>
              </a>
              . Elle m’a permis de centraliser mes{" "}
              <strong>sources d’information</strong>, de suivre les{" "}
              <strong>flux RSS</strong> de blogs, de sites spécialisés et de
              communautés, et de rester constamment à jour sur les sujets qui
              m’intéressent dans les domaines de l’
              <strong>intelligence artificielle</strong>, de la{" "}
              <strong>cybersécurité</strong> et du{" "}
              <strong>développement web</strong>.
            </p>
            {/* IA Générative */}
            <p className="mb-10 text-justify leading-relaxed font-body text-sky-950 dark:text-blue-100 ">
              Dans le cadre de ma veille technologique, je me suis intéressé à
              l’évolution rapide de l’
              <strong>intelligence artificielle générative</strong>, un domaine
              en constante mutation. J’ai suivi des sources comme le{" "}
              <a
                href="https://blog.openai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                blog d’OpenAI
              </a>
              ,{" "}
              <a
                href="https://www.theguardian.com/technology/artificialintelligenceai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>The Guardian</strong>
              </a>{" "}
              ou encore{" "}
              <a
                href="https://generativeai.pub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>Generative AI Pub</strong>
              </a>{" "}
              pour suivre les <strong>tendances</strong>,{" "}
              <strong>innovations</strong> et{" "}
              <strong>cas concrets d’application de l’IA</strong>.
            </p>
            <img
              src={genai}
              className="mx-auto h-80 w-auto mb-28 object-contain  shadow-sky-950 shadow-lg rounded-3xl"
              alt="genai"
            />
            {/* Cybersécurité */}
            <p className="mb-10 text-justify leading-relaxed font-body text-sky-950 dark:text-blue-100 ">
              Une autre partie de ma veille est consacrée à la{" "}
              <strong>cybersécurité</strong>, un enjeu essentiel pour tout
              développeur. J’ai consulté des ressources telles que les{" "}
              <a
                href="https://owasp.org/www-project-podcast/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>podcasts OWASP</strong>
              </a>
              , les bulletins du{" "}
              <a
                href="https://www.cert.ssi.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>CERT-FR</strong>
              </a>
              , ainsi que{" "}
              <a
                href="https://www.itsecurityguru.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>IT Security Guru</strong>
              </a>
              ,{" "}
              <a
                href="https://www.01net.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>01NET</strong>
              </a>{" "}
              et{" "}
              <a
                href="https://www.darkreading.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>Dark Reading</strong>
              </a>{" "}
              pour rester informé des <strong>vulnérabilités</strong>,{" "}
              <strong>outils de sécurité</strong> et{" "}
              <strong>bonnes pratiques</strong>.
            </p>
            <img
              src={owasp}
              className="mx-auto h-80 w-auto mb-28 object-contain  shadow-sky-950 shadow-lg rounded-3xl"
              alt="anssi1"
            />

            {/* Développement Web */}
            <p className="mb-10 text-justify leading-relaxed font-body text-sky-950 dark:text-blue-100 ">
              Enfin, je maintiens une veille sur le{" "}
              <strong>développement web</strong> en consultant les échanges
              communautaires sur{" "}
              <a
                href="https://www.reddit.com/r/webdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>Reddit WebDev</strong>
              </a>
              ,{" "}
              <a
                href="https://www.reddit.com/r/reactjs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>ReactJS</strong>
              </a>{" "}
              et{" "}
              <a
                href="https://www.reddit.com/r/symfony/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>Symfony</strong>
              </a>
              . Je consulte également le{" "}
              <a
                href="https://symfony.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                <strong>blog officiel Symfony</strong>
              </a>{" "}
              pour suivre l’évolution du <strong>framework</strong> et découvrir
              les <strong>bonnes pratiques</strong>.
            </p>
            <img
              src={code}
              className="mx-auto h-80 w-auto mb-28 object-contain  shadow-sky-950 shadow-lg rounded-3xl"
              alt="anssi1"
            />
          </div>
        </div>
      </motion.section>
    </section>
  );
}
