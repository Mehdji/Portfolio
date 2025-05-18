// srx/components/TechnologyMonitoring.tsx

import { EyeIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function TechnologyMonitoring() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="certificats"
      className=" text-sky-950 dark:text-blue-100 body-font"
    >
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen p-10 text-sky-950 dark:text-blue-100"
      >
        <div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40">
          <div className="text-center">
            <EyeIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
            <h1 className="sm:text-4xl mb-10 text-3xl font-medium title-font  text-sky-950 dark:text-blue-100">
              Veille technologique
            </h1>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
