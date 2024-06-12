import React from 'react'
import styles from "./adminPost.module.css"
import { getPosts } from '@/lib/data'
import Image from 'next/image';
import { deletePost } from '@/lib/action';

async function AdminPost() {
    const posts = await getPosts();
  return (
    <div className={styles.container}>
        <h1>Posts</h1>
        {posts.map(post=>(
            <div className={styles.post} key={post.id}>
                <div className={styles.detail}>
                    <Image src={post.img||"/noavatar.png"} width={50} height={50}/>
                    <span>{post.title}</span>
                </div>
                <form action={deletePost}>
                    <input type="hidden" name="postId" value={post.id} />
                    <button>delete</button>
                </form>
            </div>
        ))}
      
    </div>
  )
}

export default AdminPost
