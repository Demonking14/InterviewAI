import { Model, Schema , model } from "mongoose";

const blackListTokenSchema = new Schema({
    token:{
        type:String,
        required:[true, "Token is required for blacklisting"]
    }
} , {timestamps:true})

export const blackListToken =  model("blackListToken" , blackListTokenSchema)