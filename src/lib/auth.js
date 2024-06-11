import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./authConfig";

const login= async(credentials)=>{
    const {username,password} = credentials;
    try {
        connectToDb();
        const user=await User.findOne({username});
        if(!user){
         console.log("User doesn't exists!");
         throw new Error("User doesn't exists!"); 
        }
 
        const check=bcrypt.compareSync(password, user.password);
        if(!check){
         console.log("Password is wrong!");
         throw new Error("Wrong Credentials!"); 
        }
        console.log("Login success!");
        return user;
     } catch (error) {
         console.log(error);
         return null;
     }

}


export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth(
    { 
        ...authConfig,
        providers: [ 
            GitHub(
                {
                    clientId: process.env.AUTH_GITHUB_ID,
                    clientSecret: process.env.AUTH_GITHUB_SECRET
                }
            ),
            CredentialsProvider({
                async authorize(credentials){
                    try {
                       return await login(credentials);
                    } catch (error) {
                        console.log(error);
                        return null;
                    }
                }
            }) 
        ] ,
        callbacks:{
            async signIn({user,account,profile}){
                console.log(profile);
                if(account.provider==="github"){
                    try {
                        connectToDb();
                      const user= await User.findOne({email:profile.email});
                      if(!user){
                        // create a new user
                        const newUser= new User({
                            username:profile.name,
                            email:profile.email,
                            img:profile.avatar_url
                        });

                        await newUser.save();
                      }
                      return true;
                    } catch (error) {
                        console.log(error);
                        return false;
                    }
                }
                return true;
            },
            ...authConfig.callbacks
        }
    })
