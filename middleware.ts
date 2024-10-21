import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./middlewares/authMiddleware";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.pathname;
    // if(url.startsWith('/api/products/')) {
    //     const auth = authMiddleware(req);
    //     if(auth) {
    //         return auth;
    //     }
    // }
    return NextResponse.next();
}