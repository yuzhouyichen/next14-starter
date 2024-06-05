import Image from "next/image";
import styles from "./footer.module.css"

const Footer=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                logo
            </div>
            <div className={styles.text}>
                <p>Lama creative thoughts agency © All rights reserved.</p>
            </div>
        </div>
    );
}
export default Footer;