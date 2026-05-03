import mongoose, { Schema , Model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username : {
        type:String,
        required:true,
        unique:[true , "Username already exists"],
        lowercase:true,
        trim:true,
    },
     email:{
        type:String,
        required:true,
        unique:[true, "User with this E-mail already exists"],
        trim:true,

     },
     password :{
        type: String, 
        minLength : 6,
        required:true,
     }
})


userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = function (password) {
    return bcrypt.compare(password, this.password);
}


export const User = mongoose.model("User" , userSchema)
