import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/lib/models/productModel";

type Query = {
    price?: {$gte: number},
    category?: string
}

export const GET = async(req: NextRequest) => {
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const price = searchParams.get('price');
        const category = searchParams.get('category');
        const sortBy = searchParams.get('sortBy');
        const sortOrder = searchParams.get('sortOrder') || 'asc';

        const query: Query = {};

        if(price) {
            const priceVal = parseFloat(price);
            query.price = {$gte: priceVal};
        }

        if(category) {
            query.category = category;
        }


        let sort: [string, 1 | -1][] = [['name', 1]];

        if(sortBy) {
            const sortFields = ['name', 'price', 'rating', 'date'];
            if (sortFields.includes(sortBy)){
                sort = [[sortBy, sortOrder === 'desc' ? -1 : 1]]
            }
        }

        const products = await Product.find(query).sort(sort);
        return new NextResponse(JSON.stringify(products), {status: 200});
    } catch (error: any) {
        return new NextResponse('Error fetching products: ' + error.message, {status: 500})
    }
}

export const POST = async(req: NextRequest) => {
    try {
        await connectDB();
        const newProduct = await req.json();
        const product = await Product.create({... newProduct});
        if (!product) {
            return new NextResponse('Invalid request', {status: 400});
        }

        return new NextResponse(JSON.stringify({success: 'true', product: product}), {status: 200});
    } catch (error: any) {
        console.log('Error while posting new product, ' + error.message);
        throw new Error('Error: ', error.message);
    }
}