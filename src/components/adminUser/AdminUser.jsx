import React from 'react'
import styles from "./adminUser.module.css"
import { getUsers } from '@/lib/data'
import { deleteUser } from '@/lib/action';
import Image from 'next/image';

async function AdminUser() {
  const users=await getUsers();
  return (
    <div className={styles.container}>
       <h1>Users</h1>
        {users.map(user=>(
            <div className={styles.user} key={user.id}>
                <div className={styles.detail}>
                    <Image src={"/noavatar.png"} width={50} height={50}/>
                    <span>{user.username}</span>
                </div>
                <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button>delete</button>
                </form>
            </div>
        ))}
      
    </div>
  )
}

export default AdminUser
