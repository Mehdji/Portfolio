// src/components/About.tsx
export default function About(): JSX.Element {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-sky-950 dark:text-blue-100 ">
            {" "}
            HI, I'm Mehdi.
            <br className="hidden  lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 font-body leading-relaxed  text-sky-950 dark:text-blue-100">
            Welcome on board.I'm monastically engaged in computer science and
            especially in coding.I discovered that discpline and daily routine
            are a the most important quality to aquire new knowledge and produce
            better and more original creations.I propose, following those
            rules,fine-tuned digital solutions for companies's web showcase and
            applications development. Core of this dedication is rooted in my
            curiosity to solve problem and exposed pleasant and util visual
            information for users.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex font-body text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex font-title text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./dev1.svg"
          />
        </div>
      </div>
    </section>
  );
}
