import React from "react";
import styles from "../About/About.module.css";
const About = () =>{
    return(
        <div className={styles.about} id="about">
            <img src="../../../титул фон.jpg" className={styles.image} alt="img-1"></img>
                <div className={styles.overlay}>
                    <img src="../../../logo_white.png" className={styles.logo} alt="Logo" />
                    <div className={styles.text}>
                        <div className={styles.deviz}>
                            <h1 className={styles.head}>ОЗАРИМ ВАШ ЧАЙНЫЙ ПУТЬ</h1>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default About;