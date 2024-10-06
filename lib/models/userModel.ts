import mongoose, {models} from "mongoose";
import bcrypt from 'bcryptjs';
import {SignJWT} from 'jose';

interface IUser extends Document {
    email: string,
    password: string,
    first_name: string,
    comparePW(inputPassword: string): Promise<boolean>,
    createToken(): string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    first_name: {
        type: String,
        maxLength:10,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})
userSchema.pre<IUser>('save', async function() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
}) 

userSchema.methods.comparePW = async function(inputPassword: string) {
    const isCorrect = await bcrypt.compare(inputPassword, this.password);
    return isCorrect;
}

userSchema.methods.createToken = async function() {
    const token = await new SignJWT({email: this.email, first_name: this.first_name})
    .setProtectedHeader({alg: 'HS256'})
    .setExpirationTime(process.env.JWT_LIFETIME || '1h')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET) || 'fallback1921');
    return token;
}

const User = models.User || mongoose.model("User", userSchema);

export default User;