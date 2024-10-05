import mongoose, { model, models } from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: [true, "Product name is required"],
        trim: true
    },
    price: {
        type: "number",
        required: true,
        trim: true
    },
    featured: {
        type: 'boolean',
        required: true
    },
    rating: {
        type: 'number',
        required: true
    },
    company: {
        type: "string",
        required: true
    }
},

    {
        timestamps: true 
    }
)

const Product = models.Product || model("Product", ProductSchema);
export default Product;