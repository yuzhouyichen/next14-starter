const { Post } = require("@/lib/models");
const { connectToDb } = require("@/lib/utils");
const { NextResponse } = require("next/server");

export const GET= async(request,{params})=>{
    try {
        const {slug}=params;
       connectToDb();
       const post= await Post.findOne({slug});
       return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }

}