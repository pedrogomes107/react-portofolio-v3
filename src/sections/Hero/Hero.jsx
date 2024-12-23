import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.intro}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Pedro Gomes"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
          <div className={styles.info}>
            <h1>
              Pedro
              <br />
              Gomes
            </h1>
            <h2>Frontend Developer</h2>
            <span>
              <a href="https://github.com/pedrogomes107/" target="_blank">
                <img src={githubIcon} alt="Github icon" />
              </a>
            </span>
          </div>
        </div>
        <p className={styles.description}>
          I started my journey in Web development with a passion for creating
          intuitive and scalable applications. I have follow tutorials and built
          full-stack projects that you can check on github. My projects
          demonstrate my ability to integrate poweful backend solutions with
          sleek, user-friendly frontend designs.
        </p>
        <p className={styles.description}>
          I got my Computer Science Bachelor's degree at NOVA University Lisbon,
          with a score of 16 out of 20 marks. During my Master's I struggled
          with mental wealth issues and ended up having to leave the University
          without finishing my thesis.
        </p>
        <p className={styles.description}>
          After being diagnosed with Schizophrenia I spent a couple of years
          recovering while working in my parents farm. I learned the
          responsibilities to care for other living beings and the respect that
          everyone deserves.
        </p>
        <p className={styles.description}>
          I am now ready to start a new chapter in my life and I am looking for
          opportunities to work as a Frontend Developer. I am a fast learner and
          I am willing to learn new technologies and frameworks. I am also a
          team player and I am always looking for ways to improve my skills.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
