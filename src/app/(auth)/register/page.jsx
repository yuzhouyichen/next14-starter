import { register } from "@/lib/action";
import styles from "./register.module.css"
import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage=()=>{
    
    return (
        <div className={styles.container}>
             {/* <form className={styles.form} action={register}>
                <input type="text" placeholder="Username" name="username"/>
                <input type="email" placeholder="Email address" name="email" />
                <input type="password" placeholder="Password"  name="password"/>
                <input type="password" placeholder="Password Again" name="rePassword" />
                <button className={styles.send}>Register</button>
            </form> */}
            <RegisterForm />
        </div>
    );
}
export default RegisterPage;