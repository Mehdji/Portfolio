import { TableCellsIcon } from "@heroicons/react/24/solid";

import matrice from "../assets/matrice2.pdf";

export default function Skillsmatrix() {
  return (
    <section
      id="skills_matrix"
      className=" text-sky-950 dark:text-blue-100 body-font"
    >
      <div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40 ">
        <div className="text-center">
          <TableCellsIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-sky-950 dark:text-blue-100">
            Skills Matrix
          </h1>
          <p className="g:w-2/3 mx-auto leading-relaxed text-base">
            The skill matrix summarizes the competencies I acquired during my
            education and internships. It highlights my proficiency in various
            technologies and tools, showcasing my ability to adapt and excel in
            different environments.
          </p>
          <div className=" my-10 text-center">
            <iframe src={matrice} width="100%" height="1200px"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
