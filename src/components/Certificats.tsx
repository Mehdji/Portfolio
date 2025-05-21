// src/components/Certificats.tsx
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import anssi1 from "../assets/anssi1.png";
import cnil from "../assets/cnil.jpg";
import fcc from "../assets/freecodecamp.png";
import openc from "../assets/open.jpg";
// src/components/About.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Certificats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="certificats"
      className=" text-sky-950 dark:text-blue-100 body-font mt-20 mb-20 scroll-mt-28"
    >
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className="min-h-screen flex justify-center px-10  text-sky-950 dark:text-blue-100"
      >
        <div className="container px-5 h-auto pt-10 mx-auto text-center lg:px-40">
          <div className="text-center">
            <AcademicCapIcon className="mx-auto inline-block w-10 mb-4 text-sky-600 font-bold" />
            <h1 className="sm:text-4xl mb-10 text-3xl font-medium title-font  text-sky-950 dark:text-blue-100">
              Certifications
            </h1>
            <div>
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={anssi1}
                      className="mx-auto h-[450px] w-auto object-contain  shadow-sky-950 shadow-lg rounded-3xl"
                      alt="anssi1"
                    />
                    <h1 className="text-xl font-medium mt-5 mb-3">
                      Certificat ANSSI – SecNumAcadémie
                    </h1>
                    <p>
                      Formation en cybersécurité visant à sensibiliser aux
                      bonnes pratiques de sécurité informatique.
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={fcc}
                      className="mx-auto h-[450px] w-auto object-contain"
                      alt="fcc"
                    />
                    <h1 className="text-xl font-medium mt-5 mb-3">
                      Certificat FreeCodeCamp – Responsive Web Design
                    </h1>
                    <p>
                      Compétences acquises pour concevoir des interfaces web
                      adaptatives sur tous les écrans.
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={cnil}
                      className="mx-auto h-[450px] w-auto object-contain  shadow-sky-950 shadow-lg rounded-3xl"
                      alt="cnil"
                    />
                    <h1 className="text-xl font-medium mt-5 mb-3">
                      Certificat CNIL – Atelier RGPD
                    </h1>
                    <p>
                      Sensibilisation à la protection des données personnelles
                      et aux règles du RGPD.
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={openc}
                      className="mx-auto h-[450px] w-auto object-contain  shadow-sky-950 shadow-lg rounded-3xl"
                      alt="openc"
                    />
                    <h1 className="text-xl font-medium mt-5 mb-3">
                      MOOC OpenClassrooms – Méthode Agile
                    </h1>
                    <p>
                      Introduction aux principes fondamentaux de la gestion de
                      projet agile.
                    </p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
