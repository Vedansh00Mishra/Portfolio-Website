export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'GifStar',
      desc: ' GifStar, a web application that allows users to search for and discover GIFs effortlessly. This project was a great learning experience and allowed me to explore various aspects of React and API integration.Although i may find the UI not that appealing that is because i focused more on the functionality rather than the CSS part.This is a pure frontend project but also has scopes for a full-stack project.',
      subdesc:
        'It has used React.js + Vite and used Giphy API for the gifs integration',
      href: 'https://gif-star-deployment.vercel.app/',
      texture: '/textures/project/project3.mp4',
      // logo: '/assets/project-logo3.png',
      // logoStyle: {
      //   backgroundColor: '#60f5a1',
      //   background:
      //     'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      //   border: '0.2px solid rgba(208, 213, 221, 1)',
      //   boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      // },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        // {
        //   id: 3,
        //   name: 'TypeScript',
        //   path: '/assets/typescript.png',
        // },
        // {
        //   id: 4,
        //   name: 'Framer Motion',
        //   path: '/assets/framer.png',
        // },
      ],
    },
    {
      title: 'Brain-Wave',
      desc: 'Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.',
      subdesc:
        'Built as a unique Website using unique Designs with the help of React.js and Tailwind CSS.',
      href: 'https://brainwave-frontend-projecto.vercel.app/',
      texture: '/textures/project/project1.mp4',
      // logo: '/assets/project-logo1.png',
      // logoStyle: {
      //   backgroundColor: '#2A1816',
      //   border: '0.2px solid #36201D',
      //   boxShadow: '0px 0px 60px 0px #AA3C304D',
      // },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        // {
          // id: 3,
        //   name: 'TypeScript',
        //   path: '/assets/typescript.png',
        // },
        // {
        //   id: 4,
        //   name: 'Framer Motion',
        //   path: '/assets/framer.png',
        // },
      ],
    },
    
    {
      title: 'HooBank - Online Banking Platform',
      desc: 'A sleek, responsive banking website built with React.js and Tailwind CSS, showcasing modern design principles and intuitive user experience. The project features reusable components, smooth scroll-based animations, and mobile-first responsiveness. It focuses on a clean layout, clear call-to-actions, and optimized performance, providing users with an engaging digital banking interface.',
      subdesc:
        'A modern, fully responsive banking website UI built with React and Tailwind CSS — clean design, smooth animations, and optimized user experience.',
      href: 'https://project-hoobank-main-frontend.vercel.app/',
      // texture: '/textures/project/project4.mp4',
      // logo: '/assets/project-logo4.png',
      // logoStyle: {
      //   backgroundColor: '#0E1F38',
      //   border: '0.2px solid #0E2D58',
      //   boxShadow: '0px 0px 60px 0px #2F67B64D',
      // },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        // {
        //   id: 3,
        //   name: 'TypeScript',
        //   path: '/assets/typescript.png',
        // },
        // {
        //   id: 4,
        //   name: 'Framer Motion',
        //   path: '/assets/framer.png',
        // },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Pie-Infocomm',
      pos: 'MERN Stack Intern',
      duration: 'Jun 2024 - August 2024',
      title: [
        "Developed a full-stack pet adoption platform using the MERN stack (MongoDB, Express.js, React, Node.js), enabling users to adopt pets online.",
        "Designed and optimized responsive, intuitive user interfaces with React.js to improve user interaction and overall site usability.",
        "Created and managed the backend with Node.js and Express.js, developing RESTful APIs for user authentication, pet listings, and other core features.",
        "Utilized MongoDB for efficient data storage, retrieval, and management of pet profiles and user information.",
        "Collaborated with cross-functional teams to gather requirements, implement new features, and ensure the site met user needs."
      ],
      icon: '/assets/framer.svg',
    }
  ];