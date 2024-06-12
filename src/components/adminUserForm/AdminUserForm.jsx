"use client"
import React from 'react'
import styles from "./adminUserForm.module.css"
import { addUser } from '@/lib/action'
import { useFormState } from 'react-dom'

function AdminUserForm({userId}) {

  const [state,fromAction]=useFormState(addUser,undefined);

  return (
    <div className={styles.container}>
      <form className={styles.form} action={fromAction}>
          <input type="text" placeholder="username" name='username'/>
          <input type="password" placeholder="password" name='password' />
          <input type="email" placeholder="email" name='email' />
          <input type="text" placeholder="image" name='img' />
          <input type="text" placeholder="isAdmin" name='isAdmin' />
          {state&&state.error}
          <button className={styles.send}>Add User</button>
      </form>
    </div>
  )
}

export default AdminUserForm
