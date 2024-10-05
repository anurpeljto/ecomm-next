import connectDB from "@/lib/db";
import Product from "@/lib/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import BadRequest from "@/lib/errors/BadRequest";
import CustomError from "@/lib/errors/CustomError";
import { Types } from "mongoose";

export const GET = async(req: NextRequest, context: {params: any}) => {
    try {
        await connectDB();
        const productID = context.params.id;
        if(!Types.ObjectId.isValid(productID)) {
            throw new BadRequest('Invalid product ID');
        }
        const product = await Product.findOne({_id : productID});

        if(!product){
            throw new BadRequest('Product with given ID does not exist');
        }
        
        return new NextResponse(JSON.stringify({product}), {status: 200});
    } catch (error: any) {
        if(error instanceof CustomError) {
            return new NextResponse(JSON.stringify({error: error.message}), {status: error.statusCode});
        }

        return new NextResponse(JSON.stringify({error: error.message}), {status: error.status});
    }
}