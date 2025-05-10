// src/components/Certificats.tsx
import { AcademicCapIcon } from "@heroicons/react/24/solid";
export default function Certificats() {
  return (
    <section
      id="certificats"
      className=" text-sky-950 dark:text-blue-100 body-font"
    >
      <div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40">
        <div className="text-center">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
          <h1 className="sm:text-4xl mb-10 text-3xl font-medium title-font  text-sky-950 dark:text-blue-100">
            Certifications
          </h1>
        </div>
      </div>
    </section>
  );
}
