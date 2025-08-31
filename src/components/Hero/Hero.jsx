import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <br></br>
        <br></br>
        <br></br>
        <h1 className={styles.title}>Hi, I'm Arpitha Shri </h1>
        <p className={styles.description}>
          I'm a Computer Science undergrad and a aspiring AI Full-Stack Developer passionate about building real-world solutions through code. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:arpithashri.sudhakar@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1IsPbRrjCXoYwFA8KRGOZv7iy_lC8yvsg/view?usp=sharing" className={styles.resumeBtn}>Resume</a>
        </div>
      </div>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
}