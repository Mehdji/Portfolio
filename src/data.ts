
import { FaHtml5, FaCss3,FaJs, FaReact,FaSymfony,FaPhp,FaNodeJs,FaLinux } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";
import landing from "/src/assets/landing.png";
import form from "/src/assets/form.png";
import python from "/src/assets/python.png";
import tribute from "/src/assets/tribute.png";
import  palindrome from "/src/assets/palindrome.png";
import  emargement from "/src/assets/emargement.png";
import  emargementmobile from "/src/assets/emargementmobile.png";

export const projects = [
  {
    title: "Landing",
    subtitle: "HTML and CSS",
    description:
      "This is a classic landing page made using only HTML and CSS without use of AI.",
    image: landing,
    link: "https://codepen.io/Mehdi787/full/QWXvXeJ",
  },
  {
    title: "Form",
    subtitle: "HTML and CSS",
    description: "A customer review form made in HTML and CSS.",
    image: form,
    link: "https://codepen.io/Mehdi787/full/zYVNJEE",
  },
  {
    title: "Python",
    subtitle: "HTML and CSS",
    description: "A web tutorial for the Python programming language.",
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
  {
    title: "Palindrome",
    subtitle: "JavaScript",
    image: palindrome,
    description: "Une application web en JS qui teste si une chaîne est un palindrome.", 
    link: "https://codepen.io/Mehdi787/full/VYZGOMb",
  },
  {
    title: "GEmargement",
    subtitle: "PHP et Symfony",
    description: "Application d'émargement web développé en Symfony.",
    image: emargement,
    link: "https://www.figma.com/design/i03DTcea1AlBzs3f7QunsI/PPE-App-Emargement-Web?node-id=0-1&m=dev&t=XtxoxzMex2zoccY8-1",
  },
    {
    title: "GEmargement mobile",
    subtitle: "PHP et Symfony",
    description: "Application d'émargement web sur mobile développé en React Native.",
    image: emargementmobile,
    link: "https://www.figma.com/design/zvFHjSohIDlnfAmvQWv5Xc/PPE-App-Emargmnt-Mobile?node-id=0-1&m=dev&t=0WZlZ3D10e0fqFqL-1",
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
    title:"React Native",
    logo: TbBrandReactNative
  },
  
   {
    title:"NodeJs",
    logo: FaNodeJs,
  },
    {
    title:"PHP",
    logo: FaPhp
  },
   {
    title:"Symfony",
    logo: FaSymfony
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
  },
   {
    title:"Linux",
    logo: FaLinux
  },
   {
    title:"VsCode",
    logo: VscVscode
  }
  
  
]

