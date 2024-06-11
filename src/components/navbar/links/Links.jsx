"use client";

import Image from "next/image";
import styles from "./links.module.css"
import NavLink from "./navLinks/NavLink";
import { useState } from "react";
import { handleLogout } from "@/lib/action";

const Links= ({session})=>{
    const [open,setOpen]=useState(true);
    const links=[
        {
            title:"HomePage",
            path:"/"
        },
        {
            title:"AboutPage",
            path:"/about"
        },
        {
            title:"ContactPage",
            path:"/contact"
        },
        {
            title:"BlogPage",
            path:"/blog"
        }
    ];
    const isAdmin=true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(
                    linkItem => <NavLink item={linkItem} key={linkItem.title} />
                )}
                {session?.user?(
                    <>
                        {session.user?.isAdmin&& <NavLink item={{title:"Admin",path:"/admin"}} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button> 
                        </form>
                    </>
                ):(
                    <NavLink item={{title:"Login",path:"/login"}} />
                )}
            </div>
            
            <Image className={styles.menuButton} src="/menu.png" 
            alt="menu" width={30} height={30} onClick={()=>setOpen(!open)} />
            
            {open&&(
                <div className={styles.mobileLinks}> 
                    {links.map(link=><NavLink item={link} key={link.title} />)}
                    {session?.user ?(
                    <>
                        {session.user?.isAdmin&& <NavLink item={{title:"Admin",path:"/admin"}} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ):(
                    <NavLink item={{title:"Login",path:"/login"}} />
                )}
                </div>
                
            )}

        </div>
    );
}
export default Links;