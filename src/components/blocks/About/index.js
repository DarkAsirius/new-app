import React from "react";
import styles from "../About/About.module.css";
import Container from "../../UI/Container"

const About = () =>{
    return(
        <div className={styles.about} id="about">
            <img src="../../../photo1.jpg" className={styles.image} alt="img-1"></img>
            <Container>
                <div className={styles.overlay}>
                    <img src="../../../logo_white.png" className={styles.logo} alt="Logo" />
                    <div className={styles.text}>
                        <div className={styles.deviz}>
                            <h1 className={styles.head}>Хорошая книга - хороший друг,
                            Хороший чай - хороший вечер!</h1>
                        </div>
                        <p className={styles.desc}>"На Заре" – это место, где каждый гость может насладиться атмосферой уюта и спокойствия, погрузившись в мир чая. Мы предлагаем широкий ассортимент сортов чая со всего мира, от классических черных и зеленых до редких травяных и фруктовых смесей.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default About;