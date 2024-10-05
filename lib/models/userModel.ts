import mongoose, {models} from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
    const token = jwt.sign({email: this.email, first_name: this.first_name}, process.env.JWT_SECRET || 'fallbackOption192121', {expiresIn: '1h'});
    return token;
}

const User = models.User || mongoose.model("User", userSchema);

export default User;