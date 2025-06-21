// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import pythonlogo from "./assets/tech_logo/python.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import cilogo from "./assets/tech_logo/coigniter.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import intellijlogo from "./assets/tech_logo/intellij-idea-logo.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import mspllogo from "./assets/work_logo/mspl.png";

// Education Section Logo's
import prpcemlogo from "./assets/education_logo/prp_logo.png";
import dcpelogo from "./assets/education_logo/dcpelogo.png";
import lbhs from "./assets/education_logo/lbhs.png";
import ssclogo from "./assets/education_logo/ssclogo.png";

// Project Section Logo's
import multi_ecomfront from "./assets/work_logo/multiecom_frontend.png";
import multi_ecomback from "./assets/work_logo/multiecom_backend.png";
import graphico from "./assets/work_logo/grapphico.png";

export const SkillsInfo = [
     {
          title: "Frontend",
          skills: [
               { name: "HTML", logo: htmlLogo },
               { name: "CSS", logo: cssLogo },
               { name: "JavaScript", logo: javascriptLogo },
               { name: "React JS", logo: reactjsLogo },
               { name: "Tailwind CSS", logo: tailwindcssLogo },
               { name: "Material UI", logo: materialuiLogo },
               { name: "Bootstrap", logo: bootstrapLogo },
          ],
     },
     {
          title: "Backend",
          skills: [
               { name: "Springboot", logo: springbootLogo },
               { name: "Cogeigniter", logo: cilogo },
               { name: "MySQL", logo: mysqlLogo },
          ],
     },
     {
          title: "Languages",
          skills: [
               { name: "C", logo: cLogo },
               { name: "C++", logo: cppLogo },
               { name: "Java", logo: javaLogo },
               { name: "Python", logo: pythonlogo },
               { name: "JavaScript", logo: javascriptLogo },
               { name: "TypeScript", logo: typescriptLogo },
          ],
     },
     {
          title: "Tools",
          skills: [
               { name: "Git", logo: gitLogo },
               { name: "GitHub", logo: githubLogo },
               { name: "VS Code", logo: vscodeLogo },
               { name: "IntelliJ IDEA", logo: intellijlogo },
               { name: "Postman", logo: postmanLogo },
               { name: "Vercel", logo: vercelLogo },
          ],
     },
];

export const experiences = [
     {
          id: 0,
          img: mspllogo,
          role: "Programmer Analyst Trainee",
          company: "Mastiff Solutions Pvt. Ltd.",
          date: "July 2024 - Present",
          desc: "Developed dynamic and scalable web applications using the CodeIgniter framework, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, optimize application performance, and ensure smooth user experience.",
          skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "CodeIgniter", "MySQL", "PHP"],
     },
     {
          id: 1,
          img: mspllogo,
          role: "Programmer Analyst Intern",
          company: "Mastiff Solutions Pvt. Ltd.",
          date: "Jan 2024 - June 2024",
          desc: "Learn the development process and tools. Work on projects to learn about the development cycle and get hands-on experience in software development.",
          skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "CodeIgniter", "MySQL", "PHP"],
     },
];

export const education = [
     {
          id: 0,
          img: prpcemlogo,
          school: "P.R. Pote Patil College of Engineering and Management, Amravati",
          date: "Nov 2022 - June 2024",
          grade: "7.91 CGPA",
          desc: "I have completed my Master's degree (MCA) in Computer Applications from P.R. Pote Patil College of Engineering and Management, Amravati. During my time at PRPCEM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at PRPCEM has been instrumental in shaping my technical abilities and professional growth.",
          degree: "Master of Computer Applications - MCA",
     },
     {
          id: 1,
          img: dcpelogo,
          school: "Degree Collge of Physical Education, Amravati",
          date: "Aug 2019 - May 2022",
          grade: "8.02 CGPA",
          desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Degree College of Physical Education, Amravati. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at DCPE allowed me to work on projects that applied theoretical concepts to real-world problems.",
          degree: "Bachelor of Science - BSC (Computer Science)",
     },
     {
          id: 2,
          img: lbhs,
          school: "Lakhotiya Bhutda Junior College, Kondhali",
          date: "June 2018 - March 2019",
          grade: "55.08%",
          desc: "I completed my class 12 education from Lakhotiya Bhutda Junior College, Kondhali, under the Maharashtra State board (HSC), where I studied Physics, Chemistry, Mathematics and Biology (PCMB).",
          degree: "Maharashtra State Board- HSC(XII)",
     },
     {
          id: 3,
          img: ssclogo,
          school: "Madan Maharaj Vidhyalaya, Ful Amala",
          date: "June 2016 - March 2017",
          grade: "80.00%",
          desc: "I completed my class 10 education from Madan Maharaj Vidhyalaya, Ful Amala, under the Maharastra State board (SSC), where I studied Science with Computer.",
          degree: "Maharashtra State Board- SSC(X)",
     },
];

export const projects = [
     {
          id: 0,
          title: "Multivendor E-Commerce Frontend",
          description:
               "Created a multi-vendor e-commerce application with a React frontend and Spring Boot backend, featuring modular architecture, user/vendor management, and seamless API communication.",
          image: multi_ecomfront,
          tags: ["React JS", "Typescript", "Tailwind CSS"],
          github: "https://github.com/Tejascharjan/multivendor-ecom-frontend",
          webapp: "#",
     },
     {
          id: 1,
          title: "Multivendor E-Commerce Backend",
          description:
               "Created a multi-vendor e-commerce application with Spring Boot backend, featuring modular architecture, user/vendor management, and seamless API communication.",
          image: multi_ecomback,
          tags: ["Spring Boot", "Java", "MySQL"],
          github: "https://github.com/Tejascharjan/multivendor-ecom-backend",
          webapp: "#",
     },
     {
          id: 2,
          title: "Smart Contact Manager",
          description:
               "Built a smart contact manager application with user-friendly contact organization and integrated Google OAuth for secure authentication using Spring Boot backend and React frontend.",
          image: prpcemlogo,
          tags: ["React JS", "Tailwind CSS", "Spring Boot", "Google OAuth"],
          github: "https://github.com/Tejascharjan/Smart_contact_manager",
          webapp: "#",
     },
     {
          id: 3,
          title: "Graphico",
          description:
               "Developed a web-based Printing Management System as part of an internship using CodeIgniter 4 (PHP), aimed at streamlining order and print job management. The system includes features like order tracking, user roles, and job scheduling for efficient workflow handling.",
          image: graphico,
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "CodeIgniter", "PHP", "MySQL"],
          github: "https://github.com/Tejascharjan/Smart_contact_manager_backend",
          webapp: "#",
     },
     {
          id: 4,
          title: "Farmer's Online Shop",
          description:
               "Developed a farmers' online shop as a college project using JSP, enabling farmers to list and sell their products directly to customers.The platform includes features like product browsing, ordering, and basic user management.",
          image: prpcemlogo,
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Jsp", "MySql"],
          github: "https://github.com/Tejascharjan/Farmers_online_shop",
          webapp: "#",
     },
];
