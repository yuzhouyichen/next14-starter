import Image from "next/image";
import styles from "./about.module.css";

const AboutPage=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <h2>10 K+</h2>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.item}>
                        <h2>10 K+</h2>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.item}>
                        <h2>10 K+</h2>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/about.png" alt="about image" fill/>
            </div>
        </div>
    );
}
export default AboutPage;