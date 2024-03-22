import mongoose from "mongoose";
//  code, name, price
const ProductSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
{
    timestamps: true, versionKey: false,
}
);
export default mongoose.model("Product", ProductSchema);