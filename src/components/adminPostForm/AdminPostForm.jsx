import React from 'react'
import styles from "./adminPostForm.module.css"
import { addPost } from '@/lib/action'

function AdminPostForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addPost}>
          <input type="text" placeholder="title" name='title'/>
          <input type="text" placeholder="desc" name='desc' />
          <input type="text" placeholder="slug" name='slug' />
          <input type="text" placeholder="image" name='img' />
          <input type="text" placeholder="userId" name='userId' />
          <button className={styles.send}>Add Post</button>
      </form>
    </div>
  )
}

export default AdminPostForm
