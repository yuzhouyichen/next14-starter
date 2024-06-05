import styles from "./home.module.css"
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brandContainer}>
        <Image src="/brands.png" alt="brands" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="hero" fill className={styles.heroImg}/>
    </div>
  </div>
  );

};

export default Home;