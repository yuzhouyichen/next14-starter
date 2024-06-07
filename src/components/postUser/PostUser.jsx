import { getUser } from "@/lib/data";
import styles from "./postUser.module.css"
import Image from "next/image";

// get user form api
const getUserFromApi= async(userId)=>{
    try {
        const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});

        if(!res.ok){
           throw new Error("fetch single post failed!");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const PostUser=async ({userId})=>{

    //const user = await getUserFromApi(userId);
    
    const user = await getUser(userId);
    console.log(JSON.stringify(user));

    return (
        <div className={styles.container}>
            <Image 
                src={user.img?user.img:"/noavatar.png"}
                alt="post content" 
                width={50}
                height={50}
                className={styles.ava} 
                />
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>{user.username}</span>
            </div>    
        </div>
    );
}

export default PostUser;