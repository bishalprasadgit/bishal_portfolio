import self from "../../assests/Images/self.png";
import aichatbot from "../../assests/Images/aichatbot.png";
import danam from "../../assests/Images/danam.png";
import rathi from "../../assests/Images/rathi.png";
import vast from "../../assests/Images/vast.png";
import ahhelpline from "../../assests/Images/ahhelpline.png";
import wynk from "../../assests/Images/wynk.png";
import dictionary from "../../assests/Images/dictionary.png";
import calculator from "../../assests/Images/calculator.png";
import clock from "../../assests/Images/clock.png";
import needz from "../../assests/Images/needz.png";


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Bishal",
    lastName: "Prasad",
    initials: "js",
    position: "a Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    miniBio: [
        { emoji: '☕', text: 'fueled by coffee' },
        { emoji: '🌎', text: 'based in India' },
        { emoji: "💼", text: "Software Developer" },
        { emoji: "📧", text: "bishal.prasad3787@gmail.com" }
    ],
    socials: [
        {
            link: "https://www.facebook.com/people/Bishal-Prasad/100070793490333/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/thebishalprasad/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/thebishalprasad",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/thebishalprasad",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/thebishalprasad",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: `Hey, I'm Bishal! A passionate Software Developer with nearly 2 years of professional experience in building full-stack applications and delivering impactful digital solutions. I currently hold the designation of Software Developer and have a strong foundation in Computer Science & Engineering from the Academy of Technology.\n\nI'm deeply enthusiastic about tech—whether it's working on scalable web applications, contributing to mobile-first experiences, or diving into the fascinating world of AI/ML. Recently, I’ve worked on two AI-driven projects, which have further sparked my curiosity about intelligent systems and data-driven innovation.\n\nOutside the lines of code, I'm an explorer at heart—keen on traveling, discovering new places, and soaking in different cultures. I believe in using technology as a tool for problem-solving, creativity, and meaningful impact.\n\nLet’s connect and build something extraordinary together!`,

    hobbies: [
        { label: 'Travelling', emoji: '🌍' },
        { label: 'Movies', emoji: '🎥' }
    ],

    skills: {
        Frontend: [
            { icon: "FaHtml5", label: "HTML", color: "#e34c26" },
            { icon: "FaCss3Alt", label: "CSS", color: "#264de4" },
            { icon: "FaJs", label: "JavaScript", color: "#f0db4f" },
            { icon: "FaReact", label: "React", color: "#61dafb" },
            { icon: "SiNextdotjs", label: "Next.js", color: "#ffffff" },
            { icon: "SiBootstrap", label: "Bootstrap", color: "#7952b3" },
            { icon: "SiTailwindcss", label: "Tailwind CSS", color: "#38bdf8" }
        ],
        Backend: [
            { icon: "FaNodeJs", label: "Node.js", color: "#3c873a" },
            { icon: "SiExpress", label: "Express.js", color: "#ffffff" },
            { icon: "SiSpringboot", label: "Spring Boot", color: "#6DB33F" },
            { icon: "FaJava", label: "Java", color: "#f89820" }
        ],
        Mobile: [
            { icon: "SiFlutter", label: "Flutter", color: "#02569B" }
        ],
        "Tools & Design": [
            { icon: "FaGitAlt", label: "Git", color: "#f34f29" },
            { icon: "FaGithub", label: "GitHub", color: "#ffffff" },
            { icon: "FaGitlab", label: "GitLab", color: "#ffffff" },
            { icon: "SiJira", label: "Jira", color: "#ffffff" },
            { icon: "SiPostman", label: "Postman", color: "#ff6c37" },
            { icon: "SiFigma", label: "Figma", color: "#a259ff" }
        ]
    },

    portfolio: [
        {
          title: "AI Chatbot",
          image: aichatbot,
          description: "An AI-powered chatbot leveraging Gemini API and Pinecone for intelligent vector search and seamless user interactions.",
          stack: ["React", "Nextjs", "Gemini API", "Pinecone"],
          live: "https://aichatbotbybishal.vercel.app/",
        },
        {
          title: "Danam - Donate & Share Resources",
          image: danam,
          description: "A platform enabling students to donate books and resources, promoting sustainability, accessibility, and community-driven support.",
          stack: ["React", "Vite", "Tailwind CSS", "Express", "Node.js"],
          live: "https://danam.vercel.app/",
        },
        {
          title: "Rathi Overseas",
          image: rathi,
          description: "Responsive website for Rathi Overseas highlighting services, global trade expertise, and user-friendly navigation.",
          stack: ["React", "NextJS", "Tailwind CSS", "Express", "Node.js"],
          live: "https://rathioverseas.com/",
        },
        {
          title: "Vast Exim",
          image: vast,
          description: "Corporate site for Vast Exim showcasing rice export services with a focus on quality, performance, and global reach.",
          stack: ["NextJS", "Tailwind CSS", "Express", "Node.js"],
          live: "https://rathioverseas.com/",
        },
        {
          title: "Ah Helpline",
          image: ahhelpline,
          description: "A support platform for IGNOU students offering academic resources, expert guidance, and personalized assistance.",
          stack: ["React", "Tailwind CSS", "Java", "Spring Boot", "MySQL"],
          live: "https://ahhelpline.com/",
        },
        {
          title: "Wynk Music Clone",
          image: wynk,
          description: "A frontend replica of the Wynk Music website featuring modern UI components and responsive design.",
          stack: ["React", "NextJS", "Tailwind CSS", "Express", "Node.js"],
          live: "https://wynk-clone-by-bishal-prasad.netlify.app/",
        },
        {
          title: "My Dictionary App",
          image: dictionary,
          description: "A user-friendly dictionary app allowing real-time word lookup with definitions and usage examples.",
          stack: ["HTML", "CSS", "JavaScript"],
          live: "https://thebishalprasad.github.io/My-Dictionary/",
        },
        {
          title: "Calculator",
          image: calculator,
          description: "A simple and elegant calculator with all essential arithmetic operations and a clean UI design.",
          stack: ["HTML", "CSS", "JavaScript"],
          live: "https://thebishalprasad.github.io/Calculator/",
        },
        {
          title: "Clock with Dark Mode",
          image: clock,
          description: "An animated analog clock with dark mode support, built using vanilla JavaScript and CSS transitions.",
          stack: ["HTML", "CSS", "JavaScript"],
          live: "https://analogclock-with-dark-mode.netlify.app/",
        },
        {
          title: "Grocery App",
          image: needz,
          description: "A mobile grocery shopping app built with Flutter, integrated with Firebase and Spring Boot backend.",
          stack: ["Flutter", "Dart", "Firebase", "Spring Boot", "MySQL"],
          live: "https://play.google.com/store/apps/details?id=com.needzindia.fresh_mart",
        }
      ] 
};
