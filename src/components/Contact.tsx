import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [rgpdChecked, setRgpdChecked] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!rgpdChecked) {
      setFormError("Vous devez accepter la politique de confidentialité.");
      return;
    }
    setFormError("");
    fetch("/", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message envoyé !"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        id="intership"
        className=" flex justify-center px-10  text-sky-950 dark:text-blue-100"
      >
        {/*Set the max width to the min-width of the current breakpoint*/}
        {/*px-5: horizontal padding; py-10: Vertical padding; mx-auto: margin horizontal margin; flex: diplay flexbox sm:640px nowrap*/}
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap ">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=herblay&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md   ">
              <div className="lg:w-1/3 px-6">
                {/*border-red-400 border-2*/}
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADRESSE
                </h2>
                <p className="mt-1">Herblay</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 ">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  naouimehdi@hotmail.fr
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  TELEPHONE
                </h2>
                <p className="leading-relaxed">0687252953</p>
              </div>
            </div>
          </div>
          <form
            data-netlify="true"
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className=" text-sky-950 dark:text-blue-100 sm:text-4xl text-3xl mb-1 font-medium title-font">
              Collaborons ensemble
            </h2>
            <p className="  text-sky-950 dark:text-blue-100 leading-relaxed mb-5">
              Une question, une proposition ou un projet ? N'hésitez pas à me
              contacter via le formulaire ci-dessous.
            </p>
            <div className="relarive mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm  text-sky-950 dark:text-blue-100"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indogo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm  text-sky-950 dark:text-blue-100"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm  text-sky-950 dark:text-blue-100"
              >
                Méssage
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {/* RGPD Checkbox */}
            <div className="relative mb-4 flex items-start">
              <input
                type="checkbox"
                id="rgpd"
                name="rgpd"
                checked={rgpdChecked}
                onChange={(e) => setRgpdChecked(e.target.checked)}
                className="mt-1 mr-2"
                required
              />
              <label
                htmlFor="rgpd"
                className="text-xs text-sky-950 dark:text-blue-100"
              >
                J'ai lu et j'accepte la{" "}
                <a
                  href="/politique-confidentialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-indigo-500"
                >
                  politique de confidentialité
                </a>
                .<br />
                Les informations recueillies via ce formulaire sont enregistrées
                pour permettre de vous recontacter. Conformément au RGPD, vous
                pouvez exercer votre droit d'accès, de rectification ou de
                suppression de vos données en me contactant.
              </label>
            </div>
            {formError && (
              <p className="text-red-500 text-xs mb-2">{formError}</p>
            )}
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.section>
    </section>
  );
}
