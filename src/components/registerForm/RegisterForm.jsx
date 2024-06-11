"use client"

import {useFormState} from "react-dom"
import { register } from "@/lib/action";
import styles from "./registerForm.module.css"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm=()=>{

    const [state,formAction]= useFormState(register,undefined);
    
    const router=useRouter();

    useEffect(()=>{
        state?.success&& router.push("/login");
    },[state?.success,router]);

    return (
        <div>
            <form className={styles.form} action={formAction}>
                <input type="text" placeholder="Username" name="username"/>
                <input type="email" placeholder="Email address" name="email" />
                <input type="password" placeholder="Password"  name="password"/>
                <input type="password" placeholder="Password Again" name="rePassword" />
                <button className={styles.send}>Register</button>
                {state?.error}
                <Link href="/login">Have an Account? Login</Link>
            </form>
        </div>
    );
}

export default RegisterForm;