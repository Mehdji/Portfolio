import { TableCellsIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import matrice from "../assets/matrice2.pdf";

export default function Skillsmatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills_matrix"
      className=" text-sky-950 dark:text-blue-100 body-font scroll-mt-28"
    >
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen px-10 text-sky-950 dark:text-blue-100"
      >
        <div className="container px-5 h-auto pt-3 mx-auto text-center lg:px-40 ">
          <div className="text-center">
            <TableCellsIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-sky-950 dark:text-blue-100">
              Matrice de compétences
            </h1>
            <p className="g:w-2/3 mx-auto leading-relaxed text-base">
              La matrice de compétences résume les savoir-faire que j’ai acquis
              au cours de ma formation et de mes stages. Elle met en avant ma
              maîtrise de différentes technologies et outils, illustrant ma
              capacité à m’adapter et à évoluer dans des environnements variés.
            </p>
            <div className=" my-10 text-center">
              <iframe src={matrice} width="100%" height="1200px"></iframe>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
