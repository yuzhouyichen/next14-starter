"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt"

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
        revalidatePath("/admin");
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
        revalidatePath("/admin");
        console.log("delete from db ");
    } catch (error) {
        console.log(error)
        return {error:"delete post failed!"}
    }
}

export const addUser = async(previousState,formData)=>{
    //Object.fromEntries()接受一个可迭代的对象，例如数组，返回一个包含该对象键值对的新对象。在这种情况下，formData可能是一个数组或类数组对象，其中包含了键值对。
    const {username,email,img,password}=Object.fromEntries(formData);

    //存入数据库
    try {
        connectToDb();
        const newUser= new User({
            username,
            email,
            img,
            password
        }
        );
        await newUser.save();
        revalidatePath("/admin");
        console.log("save to db "+JSON.stringify(newPost));
    } catch (error) {
        console.log(error)
        return {error:"add user failed!"}
    }
   
}

export const deleteUser = async(previousState,formData)=>{
    //Object.fromEntries()接受一个可迭代的对象，例如数组，返回一个包含该对象键值对的新对象。在这种情况下，formData可能是一个数组或类数组对象，其中包含了键值对。
    const {id}=Object.fromEntries(formData);

    //存入数据库
    try {
        connectToDb();
        await Post.deleteMany({userId:id});
        await User.findByIdAndDelete(id);
        revalidatePath("/admin");
        console.log("delete user from db ");
    } catch (error) {
        console.log(error)
        return {error:"delete user failed!"}
    }
}

export const handleGithubLogin=async()=>{
    "use server";
    await signIn("github");
}

export const handleLogout=async()=>{
    "use server";
    console.log("handleLogout");
    await signOut();
}

export const register=async(previousState,formData)=>{
    "use server";
    const {username,email,password,rePassword}=Object.fromEntries(formData);
    console.log(username,email,password,rePassword);
    if(password!==rePassword){
        console.log("Password doesn't match!");
        return {error:"Password doesn't match!"};
    }
    try {
       connectToDb();
       const user=await User.findOne({email});
       if(user){
        console.log("User already exists!");
        return {error:"User already exists!"};
       }

       //加密密码
       const salt=bcrypt.genSaltSync(10);
       const hashedPassword= bcrypt.hashSync(password,salt); 
       console.log(hashedPassword);

       const newUser= new User({
        username,
        email,
        password:hashedPassword
       });
       await newUser.save();
       console.log("User saved to db!");
       return {success:true};
    } catch (error) {
        console.log(error);
        return {error:"Failed to register!"}
    }
}

export const login=async(previousState,formData)=>{
    "use server";
    const {username,password}=Object.fromEntries(formData);
    console.log(username,password);
    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err.message);
        if (err.message.includes("CredentialsSignin")) {
            return {error:"invalid username or password!"};
        }
        throw err;
    }
}