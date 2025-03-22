
import { FaHtml5, FaCss3,FaJs, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";
import landing from "/src/assets/landing.png";
import form from "/src/assets/form.png";
import python from "/src/assets/python.png";
import tribute from "/src/assets/tribute.png";
export const projects = [
  {
    title: "Landing",
    subtitle: "HTML and CSS",
    description:
      "This is a classic landing page made using only html and css wihtout use of AI.",
    image: landing,
    link: "https://codepen.io/Mehdi787/full/QWXvXeJ",
  },
  {
    title: "Form",
    subtitle: "HTML and CSS",
    description: "A customer review form made in html and css.",
    image: form,
    link: "https://codepen.io/Mehdi787/full/zYVNJEE",
  },
  {
    title: "Python",
    subtitle: "HTML and CSS",
    description: "A web tutorial for the python programming language.",
    image: python,
    link: "https://codepen.io/Mehdi787/full/MWMmMLx",
  },
  {
    title: "Tribute",
    subtitle: "HTML and CSS",
    description: "A tribute page dedicated to my father.",
    image: tribute,
    link: "https://codepen.io/Mehdi787/full/XWLRvWW",
  },
];

interface skill {
  title: string;
  logo: React.ComponentType;

}

/*Creating an array of objects that we use in skills.tsx to render "skills"*/
/*Each object describe a skill with a title and a logo.Title is a string and logo is a React.ComponentType"*/
export const skills:skill[] = [
  {
    title:"HTML",
    logo: FaHtml5,
  },
  {
    title:"CSS",
    logo: FaCss3,
  },
  {
    title:"JavaScript",
    logo: FaJs,
  },
  {
    title:"React",
    logo: FaReact
  },

  {
    title:"SQL",
    logo: TbSql
  },
  {
    title:"Drone",
    logo: GiDeliveryDrone
  },
  {
    title:"Photoshop",
    logo: SiAdobephotoshop
  },
  {
    title:"PremierePro",
    logo: SiAdobepremierepro
  }
  
  
]

