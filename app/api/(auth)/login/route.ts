import jwt from 'jsonwebtoken';
import User from '@/lib/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import BadRequest from '@/lib/errors/BadRequest';
import InternalError from '@/lib/errors/InternalError';
import CustomError from '@/lib/errors/CustomError';

export const POST = async(req: NextRequest) => {
    try {
        const body = await req.json();
        if(!body){
            throw new BadRequest('Missing body');
        }
        const {email, password} = body;
        if(!email || !password) {
            throw new BadRequest('Missing email or password'); 
        }
        const user = await User.findOne({email: email});

        if(!user){
            throw new BadRequest('User does not exist');
        }
        const isPwCorrect = await user.comparePW(password);

        if(!isPwCorrect){
            throw new BadRequest('Incorrect password');
        }

        const token = await user.createToken();
        if(!token) {
            throw new InternalError('Error while creating token');
        }
        return new NextResponse(JSON.stringify({user: user, token: token}), {status: 200});
    } catch (error: any) {
        if(error instanceof CustomError){
            return new NextResponse(error.message, {status: error.statusCode});
        }
        return new NextResponse(error.message);
    }
}