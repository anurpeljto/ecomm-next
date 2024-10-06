import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/userModel';
import connectDB from '@/lib/db';
import BadRequest from '@/lib/errors/BadRequest';
import CustomError from '@/lib/errors/CustomError';

export const POST = async(req: NextRequest) => {
    try {
        await connectDB();
        const body = await req.json();
        if(!body) {
            throw new BadRequest('Invalid or missing username & password');
        }

        const {email, password, first_name} = body;

        if(!email) {
            throw new BadRequest('Missing email');
        }
        if (!password) {
            throw new BadRequest('Missing password');
        }
        if(!first_name) {
            throw new BadRequest('Missing first name');
        }

        const doesExist = await User.findOne({email: email});
        if(doesExist) {
            throw new BadRequest('User with given email already exists');
        }


        const user = await User.create({email: email, password: password, first_name: first_name});
        if(!user) {
            throw new CustomError('Error while creating user', 500);
        }
        const token = await user.createToken();
        return new NextResponse(JSON.stringify({user, token}), {status: 200});
    } catch (error: any) {
        if(error instanceof CustomError) {
            return new NextResponse(error.message, {status: error.statusCode});
        }
        return new NextResponse('Error: ', error.message);
    }
}