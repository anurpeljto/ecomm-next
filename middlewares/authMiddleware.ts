import { NextRequest, NextResponse } from "next/server";
import UnauthError from "@/lib/errors/UnAuthError";
import CustomError from "@/lib/errors/CustomError";
import {jwtVerify} from 'jose';

export default async function authMiddleware(req: NextRequest) {
    try {
        const token = req.cookies.get('token');
        if(!token){
            throw new UnauthError('Missing token!');
        }

        const {payload} = await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET) || 'secret1921');
        if(!payload){
            throw new UnauthError('Invalid token');
        }

        return NextResponse.next();
    } catch (error: any) {
        if(error instanceof CustomError) {
            return NextResponse.json({error: error.message}, {status: error.statusCode});
        }
        return NextResponse.json({error: error.message}, {status: 500});
    }
}