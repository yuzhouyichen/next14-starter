"use client"

import React from 'react'
import styles from "./adminPostForm.module.css"
import { addPost } from '@/lib/action'
import { useFormState } from 'react-dom'

function AdminPostForm({userId}) {

  const [state,formAction]=useFormState(addPost,undefined);

  return (
    <div className={styles.container}>
      <form className={styles.form} action={formAction}>
          <input type="text" placeholder="title" name='title'/>
          <input type="text" placeholder="desc" name='desc' />
          <input type="text" placeholder="slug" name='slug' />
          <input type="text" placeholder="image" name='img' />
          <input type="hidden" name='userId' value={userId} />
          {state&&state.error}
          <button className={styles.send}>Add Post</button>
      </form>
    </div>
  )
}

export default AdminPostForm
