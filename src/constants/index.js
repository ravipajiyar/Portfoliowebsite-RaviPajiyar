import { data } from "autoprefixer";
import {
  logo,
  mobile,
  hult,
  kuhackfest,
  kuhack,
  scaler,
  web,
  github,
  netflix,
  agniparikshya,
  healthlensmob,
  projectnest,
  rentandread,
  menu,
  close,
  figma,
  git,
  aws,
  coursecraft,
  threejs,
  project,
  webdev,
  mobiledev,
  ai,
  machine,
  react,
  node,
  api,
  datascience,
  database,
  datacamplogo,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Tech Stack",
  },
  {
    id: "certificate",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Frontend Development",
      icon: react,
  },
  {
    title: "Backend Development",
      icon: node,
  },
  {
    title: "Web App Development",
      icon: webdev,
  },
{
   title: "Mobile App Development",
     icon: mobiledev,
 },
{
  title: "AI Integration",
    icon: ai,
},
  {
      title: "Machine Learning",
    icon: machine,
  },
  {
    title: "Data Science",
  icon: datascience,
},

];

const technologies = [
  {
    name: "React.js",
    icon: react,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: database,
  },
  {
    name: "Data Science",
    icon: datascience,
  },
  {
    name: "AI",
    icon: ai,
  },
  {
    name: "Machine Learining",
    icon: machine,
  },
  {
    name: "API",
    icon: api,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Project",
    icon: project,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Kathmandu University Youth Red Cross Circle",
    icon: webdev, // Replace with a suitable web development icon
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developed the official website for Kathmandu University Youth Red Cross Circle.",
       "Utilized React.js for frontend development and Node.js for the backend.",
       "Implemented responsive design and user-friendly features for smooth navigation."
    ],
  },
  {
    title: "Frontend Web Developer (Intern)",
    company_name: "Yagya.ai",
      icon: react, // Replace with a road design icon
    iconBg: "#E6DEDD",
    date: "August 2023 - November 2023",
    points: [
      "Contributed to the development of the company website for Yagya.ai.",
      "Primarily focused on frontend development using React.js.",
     "Worked collaboratively with the team to implement UI designs and optimize performance.",
    ],
  },
   {
    title: "Mobile App Developer",
      company_name: "Engineers Without Borders Nepal KU Chapter",
    icon: mobiledev, // Replace with a water analysis icon
      iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Developing a mobile application using React Native for Autism support.",
         "Using Node.js for the app's backend and working with other team members",
         "Focusing on creating an accessible app for diverse communities.",
    ],
  },
];

const testimonials = [
  {
    "testimonial": "Ravi's dedication, innovative problem-solving, and multidisciplinary expertise make me incredibly proud as his father.",
    "name": "Radhe Shyam Pajiyar",
    "designation": "Businessman",
    "company": "Self Employed",
    "image": "https://via.placeholder.com/100x100?text=RSP"
  },

  {
    "testimonial": "His innovative approach to full-stack web development and meticulous attention to detail have been an asset to our projects.",
    "name": "Prof. Dr. Sudan Jha",
    "designation": "Professor",
    "company": "Kathmandu University",
    "image": "https://via.placeholder.com/100x100?text=SJ",
  },
  {
    "testimonial": "Ravi's ability to analyze complex data and implement actionable insights in AI-driven solutions is remarkable.",
    "name": "Dr. Prakash Poudyal",
    "designation": "Associae Professor",
    "company": "Kathmandu University",
    "image": "https://via.placeholder.com/100x100?text=PP",
  },
];


const projects = [
  {
    name: "ProjectNest",
    description:
      "Developed a MERN-based project management app with role-based views for Admin, Supervisor, and Student. Enabled task allocation, real-time chat, project tracking, and secure access with API integration.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "project-management",
        color: "green-text-gradient",
      },
      {
        name: "real-time",
        color: "pink-text-gradient",
      },
    ],
    image: projectnest, // Replace with a suitable project image
    report: "/path-to-projectnest-report.pdf", // Replace with a suitable pdf link
    source_code_link: "https://github.com/ravipajiyar/ProjectNest",
  },
  {
    name: "CourseCraft",
    description:
      "Developed a MERN and Python-based web app using generative AI to create course modules for targeted subjects. Integrated frontend & backend with Lama API for generating structured study modules & content.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "generative-ai",
        color: "green-text-gradient",
      },
      {
        name: "lama-api",
        color: "pink-text-gradient",
      },
    ],
    image: coursecraft, // Replace with a suitable project image
    report: "/path-to-coursecraft-report.pdf", // Replace with a suitable pdf link
    source_code_link: "https://github.com/ravipajiyar/Course-Craft",
  },
  {
    name: "Health Lens",
    description:
      "Built a React Native mobile app with a Node.js and Express.js backend for personalized health and nutrition guidance. Integrated AI-powered food scanning to analyze nutritional values and provide tailored dietary recommendations.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: healthlensmob, // Replace with a suitable project image
    report: "/path-to-healthlens-report.pdf", // Replace with a suitable pdf link
    source_code_link: "https://github.com/ravipajiyar/HealthLens",
  },
  {
    name: "Rent and Read",
    description:
      "A web app developed using pure HTML, CSS, and JavaScript as frontend and Django for backend with SQL database integration. This app provides solutions to rent books online and read them directly.",
    tags: [
      {
        name: "html-css-js",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: rentandread, // Replace with a suitable project image
    report: "/path-to-rent-and-read-report.pdf", // Replace with a suitable pdf link
    source_code_link: "https://github.com/", // Replace with your repo link
  },
  {
    name: "Agniparikshya",
    description:
      "Developed Agniparikshya, an OSM-based project utilizing Dijkstra's algorithm to determine the shortest paths for fire brigade vehicles in crowded areas.",
    tags: [
      {
        name: "osm",
        color: "blue-text-gradient",
      },
      {
        name: "dijkstra",
        color: "green-text-gradient",
      },
      {
        name: "pathfinding",
        color: "pink-text-gradient",
      },
    ],
    image: agniparikshya, // Replace with a suitable project image
    report: "/path-to-agniparikshya-report.pdf", // Replace with a suitable pdf link
    source_code_link: "https://github.com/", // Replace with your repo link
  },
  {
    name: "Netflix Clone",
    description:
      "Developed a Netflix Clone using the MERN stack, featuring user authentication, movie browsing, and video streaming capabilities.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "streaming",
        color: "green-text-gradient",
      },
      {
        name: "ui-design",
        color: "pink-text-gradient",
      },
    ],
    image: netflix, // Replace with a suitable project image
    report: "/path-to-netflix-clone-report.pdf", // Replace with a suitable pdf link
    source_code_link: "https://github.com/", // Replace with your repo link
  },
];

// Professional certificates
const additionalCertificates = [
  {
    title: "Hult Prize Participation",
    issuer: "Hult Prize Foundation",
    year: "2024",
    credentialId: null,
    downloadLink: "/path-to-hult-prize-participation.pdf",
    icon: hult,
  },
  {
    title: "KU HackFest 2023 Winner - Sustainable Development Category",
    issuer: "Kathmandu University",
    year: "2023",
    credentialId: null,
    downloadLink: "/path-to-ku-hackfest-2023-winner.pdf",
    icon: kuhackfest
  },
  {
    title: "KU HackFest 2023 Participation",
    issuer: "Kathmandu University",
    year: "2023",
    credentialId: null,
    downloadLink: "/path-to-ku-hackfest-2023-participation.pdf",
    icon: kuhackfest
  },
  {
    title: "KU HackFest 2022 Participation",
    issuer: "Kathmandu University",
    year: "2022",
    credentialId: null,
    downloadLink: "/path-to-ku-hackfest-2022-participation.pdf",
    icon: kuhack
  },
  {
    title: "Project Management Certificate",
    issuer: "PMI Certified Associate",
    year: "2024",
    credentialId: "PMC-2024-456",
    downloadLink: "/path-to-project-management-2024.pdf",
    icon: project
  },
];


// Additional certificates with more dummy data
const certificates = [
  // Professional Certifications
  {
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "ADA-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Data Manipulation in SQL",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "DMS-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Exploratory Data Analysis in SQL",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "EDAS-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Functions for Manipulating Data in PostgreSQL",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "FMDP-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  // Additional Certifications
  {
    title: "Intermediate Python",
    issuer: "Sololearn",
    year: "2023",
    credentialId: "ed1549d9-1919-4f13-bb62-d672f6669587",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "IS-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Introduction LLMs in Python",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "LLMP-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Introduction to SQL",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "ITS-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Introduction to Statistics",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "ITS-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "JavaScirpt Core Concepts",
    issuer: "Scaler",
    year: "2023",
    credentialId: "JCC-2023",
    downloadLink: "#",
    icon: scaler,
  },
  {
    title: "Joining Data in SQL",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "JDS-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "PostgreSQL Summary Stats and Window Functions",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "PSSWF-2023",
    downloadLink: "#",
    icon: datacamplogo,
  },
  {
    title: "Unsupervised Learning in Python",
    issuer: "DataCamp",
    year: "2023",
    credentialId: "ULP-2023",
    downloadLink: "#",
    icon: datacamplogo,
  }
];

export { services, technologies, experiences, testimonials, projects, certificates,additionalCertificates };
