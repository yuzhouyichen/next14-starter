import styles from "./login.module.css"
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage= async()=>{

    return (
        <div className={styles.container}>
            {/* <form className={styles.form} action={handleGithubLogin}>
                <button className={styles.send}>Login with Github</button>
            </form>
            
            <form className={styles.form} action={login}>
                <input type="text" placeholder="Username" name="username"/>
                <input type="password" placeholder="Password"  name="password"/>
                <button className={styles.send}>Login</button>
            </form>

            <div className={styles.form} action={register}>
                <Link href="/register" className={styles.send}>Register</Link>
            </div> */}
            <LoginForm/>
        </div>
    );
}

export default LoginPage;