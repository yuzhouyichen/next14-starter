import Link from "next/link";

const Links=()=>{
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
    ]
    return (
        <div>
            {links.map(
                item => <Link href={item.path} key={item.title}>{item.title}</Link>
            )}
        </div>
    );
}
export default Links;