import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Raynanda Aqiyas",
  lastName: "Pramardhika",
  name: `Raynanda Aqiyas Pramardhika`,
  role: "Web Developer",
  avatar: "/images/raynanda-aqiyas.jpg",
  email: "raynanda.aqiyas.p@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/teenagemess",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pramardhika/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Driven by curiosity. Focused on users. Powered by technology.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Padi Melati</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Raynanda Aqiyas. As a Fullstack Web Developer, I specialize in Laravel
      and Tailwind CSS, building apps that are reliable, responsive, and
      impactful.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m a certified Web Developer accredited by the National
        Professional Certification Agency (BNSP) and HTML5 Certified by
        Certiport. I specialize in Laravel and Tailwind CSS, building
        responsive, modern, and maintainable web applications. I have strong
        experience in HTML, CSS, JavaScript, MVC architecture, RBAC models, REST
        API development, and database design, ensuring every project is
        scalable, secure, and well-structured.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Dinas Komunikasi dan Informatika Yogyakarta (Internship)",
        timeframe: "2024",
        role: "Fullstack Web Developer",
        achievements: [
          <>
            Developed a CMS web application using Laravel with scalable and
            maintainable architecture.
          </>,
          <>
            Designed intuitive UI/UX with Figma for a responsive and
            user-friendly interface.
          </>,
          <>
            Created and optimized database schema to ensure secure and efficient
            data management.
          </>,
          <>
            Handled end-to-end development process, from planning and design to
            implementation, ensuring the project was delivered with high quality
            and maintainability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/magang.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Muhammadiyah University of Yogyakarta",
        timeframe: "2024",
        role: "Teaching Assistant (Web Application Development)",
        achievements: [
          <>
            Supported students in understanding key concepts of web application
            development, including Laravel, MVC architecture, REST APIs, and
            database integration.
          </>,
          <>
            Mentored students during practical sessions, offering guidance on
            coding practices, debugging, and project development.
          </>,
          <>
            Assisted the lecturer in preparing course materials, supervising lab
            work, and reviewing student projects.
          </>,
        ],
        images: [],
      },
      {
        company: "Muhammadiyah University of Yogyakarta",
        timeframe: "2023",
        role: "Teaching Assistant (Web Design and Development)",
        achievements: [
          <>
            Assisted students in learning core web design concepts, including
            HTML, CSS, responsive design, and UI/UX fundamentals.
          </>,
          <>
            Guided students during lab sessions, providing feedback on layout,
            accessibility, and usability improvements.
          </>,
          <>
            Collaborated with the lecturer to prepare design-related teaching
            materials and evaluate student assignments.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Muhammadiyah University of Yogyakarta",
        description: <>Studied Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Laravel",
        description: (
          <>Strong background in Laravel development, creating efficient backend systems and well-structured web applications.</>
        ),
      },
      {
        title: "Tailwind CSS",
        description: (
          <>Skilled in crafting responsive, modern, and user-friendly interfaces with Tailwind CSS, enabling fast development and consistent design systems.</>
        ),
      },
      {
        title: "Spring Boot",
        description: (
          <>Hands-on experience with Spring Boot for creating simple backend services and exploring scalable architecture..</>
        ),
      },
      {
        title: "HTML, CSS, JavaScript",
        description: (
          <>Skilled in building responsive, interactive, and user-friendly websites using HTML, CSS, and JavaScript, applying clean code practices and modern web standards.</>
        ),
      },
      {
        title: "Express.js",
        description: (
          <>Familiar with building simple backend services and REST APIs using Express.js, with hands-on practice during my role as a teaching assistant.</>
        ),
      },
      {
        title: "Flutter",
        description: (
          <>Familiar with building cross-platform mobile applications using Flutter, focusing on responsive layouts and basic state management.</>
        ),
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Certificate",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/bnsp.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bnsp-bagian-belakang.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/raynanda-aqiyas-international-certificate.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/asisten-paw.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/asisten-pdw.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sertifikat-magang.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
