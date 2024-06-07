import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data";


const getDataFromApi= async ()=>{
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"});
        if(!res.ok){
            throw new Error("fetch posts went wrong");
        }
        return res.json();
    } catch (error) {
        throw error;
    }
}


const BlogPage= async()=>{

    //const posts= await getDataFromApi();
    const posts= await getPosts();
    console.log(JSON.stringify(posts))

    return (
        <div className={styles.container}>
            {posts.map(post=>(
                <div className={styles.post} key={post._id}>
                    <PostCard  post={post} />
                </div>
            ))}
        </div>
    );
}
export default BlogPage;