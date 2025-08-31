import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import tools from "../../data/tools.json";
import history from "../../data/history.json";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>EXPERIENCE</h2>
            <br></br>
            <div className={styles.category}>
                <h3 className={styles.subTitle}>Programming Languages</h3>
                <div className={styles.itemsRow}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.item}>
                            <img src={skill.imageSrc} alt={skill.title} />
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.category}>
                <h3 className={styles.subTitle}>Tools & Technologies</h3>
                <div className={styles.itemsRow}>
                    {tools.map((tool, id) => (
                        <div key={id} className={styles.item}>
                            <img src={tool.imageSrc} alt={tool.title} />
                            <p>{tool.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            


            <div className={styles.category}>
                <h3 className={styles.subTitle}>Work Experience</h3>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                        <li key={id} className={styles.historyItem}>
                            <img
                            src={historyItem.imageSrc}
                            alt={`${historyItem.organisation} Logo`}
                            />
                            <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>
                                {historyItem.experiences.map((experience, id) => {
                                return <li key={id}>{experience}</li>;
                                })}
                            </ul>
                            </div>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
