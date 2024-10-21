import mongoose, { model, models, Types } from "mongoose";

const ProductSchema = new mongoose.Schema({
    _id: {
        type: Types.ObjectId,
        required: false
    },
    name: {
        type: "string",
        required: [true, "Product name is required"],
        trim: true
    },
    price: {
        type: "string",
        required: true,
        trim: true
    },
    category: {
        type: Types.ObjectId,
        required: true
    }
},

    {
        timestamps: true 
    }
)

const Product = models.Product || model("Product", ProductSchema);
export default Product;