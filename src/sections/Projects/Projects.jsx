import styles from "./ProjectsStyles.module.css";
import twitterClone from "../../assets/logotipo-twitter.png";
import nikeWebsite from "../../assets/logotipo-nike.png";
import Promptopia from "../../assets/logotipo-promptopia.png";
import tinderClone from "../../assets/logotipo-tinder.jpg";
import chatApp from "../../assets/logotipo-chatApp.png";
import Socially from "../../assets/logotipo-socially.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={twitterClone}
          link="https://mern-clone-twitter.onrender.com/"
          h3="Twitter Clone"
          p="App with the most basic features of Twitter, like posting tweets, following users, and liking tweets."
        />
        <ProjectCard
          src={Socially}
          link="https://next-socially.vercel.app/"
          h3="Socially"
          p="A modern social media application powered by Next.js. Users can post, like, comment, and follow other users."
        />
        <ProjectCard
          src={tinderClone}
          link="https://mern-clone-tinder.onrender.com"
          h3="Tinder Clone"
          p="App with the most basic features of Tinder, like swiping, matching, and chatting. Built with MERN stack."
        />
        <ProjectCard
          src={Promptopia}
          link="https://my-nextjs-project-promptopia.vercel.app/"
          h3="Promptopia"
          p="A platform to discover, create and share AI-Powered Prompts. Built with Next.js and Tailwind CSS."
        />
        <ProjectCard
          src={chatApp}
          link="https://mern-chat-app-17im.onrender.com"
          h3="Realtime Chat App"
          p="Realtime chat app with rooms and private messages. Built with MERN stack, Socket.io and with Tailwind CSS."
        />
        <ProjectCard
          src={nikeWebsite}
          link="https://tailwind-nike-website.onrender.com/"
          h3="Nike Website"
          p="Mock frontpage of Nike's official website, with the most basic features. All built with Tailwind CSS."
        />
      </div>
    </section>
  );
}

export default Projects;
