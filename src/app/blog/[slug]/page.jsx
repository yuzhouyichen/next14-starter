import Image from "next/image";
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata=async({params})=>{

    const {slug} = params;
    // const post = await getPostFromApi(slug);
    const post = await getPost(slug);
    return {
        title:post.title,
        description:post.desc
    };
}

const getPostFromApi= async(slug)=>{
    try {
        const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{cache:"no-store"});

        if(!res.ok){
           throw new Error("fetch single post failed!");
        }

        return res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// {params} 
const SinglePostPage=async({params})=>{
    const {slug} = params;
    // const post = await getPostFromApi(slug);

    const post = await getPost(slug);
    console.log(post);
    console.log(JSON.stringify(post));


    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {post.img&&<Image src={post.img} 
                alt="post content" 
                fill 
                className={styles.img} />}
            </div>
            <div className={styles.textContainer}>
                <h1>{post.title}</h1>
                <div className={styles.detail}>
                    
                    {/* 如果没找到用户则会显示加载状态 */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
                    </div>
                    
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>

            </div>
        </div>
    );
}
export default SinglePostPage;