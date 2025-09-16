import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sahith Chandra Poreddy — Web Developer",
  author: "Sahith Chandra Poreddy",
  description:
    "Software Engineer based in Hyderabad, India. I specialize in MERN stack development.",
  lang: "en",
  siteLogo: "/public/SahithChandraPoreddy.JPG",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sahith-chandra-poreddy-1b37b3242/" },
    { text: "Github", href: "https://github.com/SahithPoreddy" },
  ],
  socialImage: "/public/SahithChandraPoreddy.JPG",
  canonicalURL: "https://github.com/SahithPoreddy",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sahith Chandra Poreddy",
    specialty: "Web Developer",
    summary:
      "Developer based in Hyderabad, India. I specialize in MERN stack development.",
    email: "sahith12poreddy@gmail.com",
  },
  experience: [
    {
      company: "BluSapphire Cyber Systems Pvt Ltd",
      position: "Product Developer Intern",
      startDate: "Sept 2024",
      endDate: "May 2025",
      summary: [
        "Coordinated in a team of four to design and implement a threat hunting tool for Windows using Win32 APIs and C++ libraries, enhancing system security by proactively identifying and mitigating cyber threats.",
        "Tested and improved existing EDR software by using the concept of entropy to improve the effectiveness of the software on both Windows and Linux O.S.",
        "Developed and Tested a logger & shipper module for the EDR software using filebeat."
      ],
    },
    {
      company: "Geethanjali College of E&T",
      position: "Frontend Developer",
      startDate: "Feb 2023",
      endDate: "May 2023",
      summary: [
        "Designed and developed a full stack web application using React, Express and MySQL to aid exam branch of the college, enabling complete digitization of the exam registration process.",
        "The web app significantly boosted the registration process and also allowed for centralization of students data. This led to a 30% reduction in manual work for the exam branch staff.",
        "Implemented responsive design principles to ensure the application was accessible and user-friendly across various devices, enhancing the overall user experience.",
      ],
    },
  ],
  projects: [
    {
      name: "Chatbot Builder",
      summary: "A flowchart-based logic builder which can be used to create chatbots.",
      linkPreview: "https://chatbot-builder-olive.vercel.app/",
      linkSource: "https://github.com/SahithPoreddy/Chatbot-builder",
      image: "/public/Chatbot_builder.png",
    },
    // {
    //   name: "Shopp App",
    //   summary: "An e-commerce platform that replicates Shopify's key features.",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/shopify-clon.png",
    // },
    // {
    //   name: "ClonTagram",
    //   summary: "A social network that replicates the features of Instagram",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/clone-ig.png",
    // },
  ],
  about: {
    description: `
    Hi, I’m Sahith Chandra, a passionate Full Stack Developer and Product Developer with a strong foundation in Cyber Security. As a recent graduate, I’m eager to explore opportunities that challenge me and help me grow into a well-rounded professional.

    I bring hands-on experience in building user-friendly applications using the MERN stack (MongoDB, Express.js, React, Node.js), along with practical expertise in Endpoint Detection & Response (EDR) solutions for both Windows and Linux environments. My background allows me to bridge the gap between secure software development and innovative product design, ensuring that the applications I build are not only functional but also resilient and secure.
    `,
    image: "/public/SahithChandraPoreddy.JPG",
  },
};

// #5755ff
