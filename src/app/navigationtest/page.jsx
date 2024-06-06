"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage=()=>{
    //客户端导航钩子
    const router=useRouter();
    //当前路径
    const pathname = usePathname();
    //请求参数
    const query=useSearchParams();

    const handleClick=()=>{
        console.log("clicked!");
        console.log(pathname);

        // client side router
        // router.push("/");
        // // 返回键不能回到之前的页面
        // router.replace("/");
        // //刷新当前页面
        // router.refresh();
        // //前进或者后退
        // router.forward();
        // router.back();
    }
    return (
        <div>
            {/* link标签默认会提前下载页面 */}
            <Link href="/" prefetch={false}>Click here</Link>
            {/* 可以用路由钩子 */}
            <button onClick={handleClick}>write and redirect</button>
        </div>
    );
}
export default NavigationTestPage;