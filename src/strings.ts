interface Strings {
  siteTitle: string;
  location: string;
  titleNavbar: string;
  footerText: string;
}

interface ContactInfo {
  icon: string;
  alt: string;
  text: string;
  link: string | null;
}

interface NavigationItem {
  name: string;
  path: string;
}

export const STRINGS: Strings = {
  siteTitle: "Andri CV",
  location: "Riau, Indonesia",
  titleNavbar: "ANDRI WAHYUDI",
  footerText: "Andri Wahyudi. All rights reserved.",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "https://img.icons8.com/color/48/marker--v1.png",
    alt: "marker--v1",
    text: "Riau, Indonesia",
    link: null,
  },
  {
    icon: "https://img.icons8.com/color/48/new-post.png",
    alt: "new-post",
    text: "andriiwah@gmail.com",
    link: "mailto:andriiwah@gmail.com",
  },
  {
    icon: "https://img.icons8.com/fluency/48/github.png",
    alt: "github",
    text: "andriwah",
    link: "https://github.com/andriwah",
  },
  {
    icon: "https://img.icons8.com/color/48/linkedin.png",
    alt: "linkedin",
    text: "Andri Wahyudi",
    link: "https://www.linkedin.com/in/andri-wahyudi-bb4286242/",
  },
];

export const NAVIGATION: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
];

export const EXPERIENCES = [
  {
    company: "Assist.id",
    subtitle: "(PT.JAGA)",
    role: "as Frontend Developer",
    date: "May 2023 - Current",
    responsibilities: [
      "Develop and maintain Assist Enterprise, a management system for clinics and hospitals using React.js, Material UI, Webpack, Redux.",
      "Build add-on applications such as accounting applications to complement the main system.",
      "Collaborate with cross-functional teams to ensure UI/UX consistency, scalability, and responsiveness.",
      "Involved in system integration with B2B.",
      "Ensure application performance optimization, bug fixing, and deployment readiness.",
    ],
  },
  {
    company: "kosthub.online",
    subtitle: "(Final Project SYNRGY Academy Batch 5 by BCA)",
    role: "as Full Stack Web Developer",
    date: "January 2023 - February 2023",
    responsibilities: [
      "Collaborated with developers and cross-functional teams to deliver the project using Agile methodology, ensuring timely completion.",
      "Implemented responsive user interfaces that matched design specifications.",
      "Coordinated with product and design teams to maintain UI/UX consistency, scalability, and performance.",
      "Developed RESTful APIs.",
      "Integrated and consumed external and internal APIs.",
      "Performed testing and resolved bugs prior to production deployment.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "SYNRGY ACADEMY BATCH 5 by BCA - Full Stack Web Developer",
    subtitle: "Full Stack Web Developer (JavaScript) - 2023",
  },
];

export const EDUCATIONS = [
  {
    title: "Full Stack Web Developer",
    subtitle: "SYNRGY ACADEMY BATCH 5 by BCA - 2023 - Score : 92.2",
  },
  {
    title: "Bachelor’s Degree in Government Studies",
    subtitle:
      "Universitas Islam Riau, Pekanbaru - Riau - Indonesia. - 2021 - GPA : 3.35",
  },
];

export const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "Git",
  "Vite",
];

export default STRINGS;

export type { Strings, ContactInfo, NavigationItem };
