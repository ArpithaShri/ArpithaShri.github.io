import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:arpithashri.sudhakar@gmail.com">arpithashri.sudhakar@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"/assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/arpitha-shri-su-187465291/">https://www.linkedin.com/in/arpitha-shri-su-187465291/</a>
        </li>
        <li className={styles.link}>
          <img src={"/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/ArpithaShri">https://github.com/ArpithaShri</a>
        </li>
      </ul>
    </footer>
  );
};