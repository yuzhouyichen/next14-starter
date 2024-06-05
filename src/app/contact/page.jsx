import Image from "next/image";
import styles from "./contact.module.css"
const ContactPage=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/contact.png" alt="contact" fill />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="text" placeholder="name and surname"/>
                    <input type="email" placeholder="Email address" />
                    <input type="text" placeholder="Phone Number(Optional)" />
                    <textarea cols="30" rows="10" placeholder="Message"/>
                    <button className={styles.send}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;