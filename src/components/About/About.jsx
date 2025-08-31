import React from "react";
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>About</h2>
        <br></br>
        <br></br>
        <div className={StyleSheet.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><div className={styles.aboutItemText}>
                    <h2>Frontend Developer</h2>
                    <p>I'm a frontend developer with experience in building responsive sites using HTML, CSS, JavaScript, React</p>
                </div></li>
                <li className={styles.aboutItem}><div className={styles.aboutItemText}>
                    <h2>Backend Developer</h2>
                    <p>I have a mix of technical skills which include Python, Java, Node.js(Express) along with MySQL 
                        and soft skills such as Analytical and Problem Solving, Communication, Teamwork, Time Management 
                        for designing and maintaining the server side logic of web applications.</p>
                </div></li>
                <li className={styles.aboutItem}><div className={styles.aboutItemText}>
                    <h2>Full Stack Developer</h2>
                    <p>As a Full Stack Developer, I have the ability to work on both the frontend and backend of web applications, 
                        ensuring seamless integration and functionality.</p>
                </div></li>
            </ul>
        </div>
    </section>
    );
} ;
