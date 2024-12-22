import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import twitterClone from "../../assets/logotipo-twitter.png";
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
      </div>
    </section>
  );
}

export default Projects;
