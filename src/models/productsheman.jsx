import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {type:String, required: true },
    price: {type: Number, required:true},
    discrption: {type: String, required:true},
    image: {type: String, required:true},
},
{timestamps:true});
export default mongoose.models.Product || mongoose.model("Product", productSchema);