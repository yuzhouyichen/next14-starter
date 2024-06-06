import Image from "next/image";
import styles from "./singlePost.module.css"
const SinglePostPage=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="https://images.pexels.com/photos/9681179/pexels-photo-9681179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="post content" 
                fill 
                className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1>Title</h1>
                <div className={styles.detail}>
                    <Image 
                    src="https://images.pexels.com/photos/9681179/pexels-photo-9681179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="post content" 
                    width={50}
                    height={50}
                    className={styles.ava} 
                    />
                    
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>01.02.2024</span>
                    </div>
                    
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>01.02.2024</span>
                    </div>
                </div>

                <div className={styles.content}>
                    A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file.
                    To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.
                </div>

            </div>
        </div>
    );
}
export default SinglePostPage;