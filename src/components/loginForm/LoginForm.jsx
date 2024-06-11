"use client"

import { handleGithubLogin, login, register } from "@/lib/action";
import styles from "./loginForm.module.css"
import Link from "next/link";
import {useFormState} from "react-dom"

const LoginForm=()=>{
    const [state,formAction]= useFormState(login,undefined);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.form} action={handleGithubLogin}>
                    <button className={styles.send}>Login with Github</button>
                </form>
                
                <form className={styles.form} action={formAction}>
                    <input type="text" placeholder="Username" name="username"/>
                    <input type="password" placeholder="Password"  name="password"/>
                    <button className={styles.send}>Login</button>
                    <span className={styles.error}>
                     {state?.error}
                    </span>
                    
                    <Link href="/register">Don't have an Account? Register</Link>
                </form>

                <div className={styles.form} action={register}>
                    <Link href="/register" className={styles.send}>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;