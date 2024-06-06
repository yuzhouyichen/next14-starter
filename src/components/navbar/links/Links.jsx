"use client";

import Image from "next/image";
import styles from "./links.module.css"
import NavLink from "./navLinks/NavLink";
import { useState } from "react";

const Links=()=>{
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
    // show Admin and login or logout;
    const session=true;
    const isAdmin=true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(
                    linkItem => <NavLink item={linkItem} key={linkItem.title} />
                )}
                {session?(
                    <>
                        {isAdmin&& <NavLink item={{title:"Admin",path:"/admin"}} />}
                        <button className={styles.logout}>Logout</button> 
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
                    {session?(
                    <>
                        {isAdmin&& <NavLink item={{title:"Admin",path:"/admin"}} />}
                        <button className={styles.logout}>Logout</button> 
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