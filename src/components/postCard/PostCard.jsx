import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard=()=>{
    return (
        <div className={styles.container}>
           <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/9681179/pexels-photo-9681179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post" fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.24</span>
           </div>
           <div className={styles.bottom}>
            <h2 className={styles.title}>title</h2>
            <p className={styles.desc}> lorem</p>
            <Link className={styles.link} href="/blog/one">READ MORE</Link>
           </div>
        </div>
    );
}
export default PostCard;