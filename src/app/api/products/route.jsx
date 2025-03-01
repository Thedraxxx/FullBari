import { connectToMongobd } from "@/lib/mongodb";
import productsheman from "@/models/productsheman";
export async function POST(req) {
  try {
    await connectToMongobd();
    
    const { name, price, description, image, category } = await req.json();

    if (!name || !price || !description || !image || !category) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const newProduct = new productsheman({ name, price, description, image, category });
    await newProduct.save();

    return new Response(JSON.stringify({ message: "Product created successfully" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
