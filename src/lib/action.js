"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async(formData)=>{
    //Object.fromEntries()接受一个可迭代的对象，例如数组，返回一个包含该对象键值对的新对象。在这种情况下，formData可能是一个数组或类数组对象，其中包含了键值对。
    const {title,desc,slug,userId}=Object.fromEntries(formData);

    //存入数据库
    try {
        connectToDb();
        const newPost= new Post({
            title,
            desc,
            slug,
            userId
        }
        );
        await newPost.save();
        revalidatePath("/blog");
        console.log("save to db "+JSON.stringify(newPost));
    } catch (error) {
        console.log(error)
        return {error:"add post failed!"}
    }
   
}

export const deletePost = async(formData)=>{
    //Object.fromEntries()接受一个可迭代的对象，例如数组，返回一个包含该对象键值对的新对象。在这种情况下，formData可能是一个数组或类数组对象，其中包含了键值对。
    const {postId}=Object.fromEntries(formData);

    //存入数据库
    try {
        connectToDb();
        await Post.findByIdAndDelete(postId)
        revalidatePath("/blog");
        console.log("delete from db ");
    } catch (error) {
        console.log(error)
        return {error:"delete post failed!"}
    }
   
}