import { addPost, deletePost } from "@/lib/action";
import styles from "./action.module.css"

const ServerActionTest=()=>{
    return (
        <div className={styles.container}>
            <form action={addPost} className={styles.form}>
                <input type="text" placeholder="title" name="title"/>
                <input type="text" placeholder="desc" name="desc"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userId" name="userId"/>
                <button className={styles.send}>Add Post</button>
            </form>

            <form action={deletePost} className={styles.form}>
                <input type="text" placeholder="postId" name="postId"/>
                <button className={styles.send}>Delete Post</button>
            </form>
        </div>
    );
}
export default ServerActionTest;