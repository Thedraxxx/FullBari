import mongoose from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI;
if(!MONGODB_URI){
    throw new error("plese define the mongo db url in environment")
}
const cached = global.mongoose || {conn:null, promise:null}

export async function connectToMongobd() {
          if(cached.conn) return cached.conn;
          if(!cached.promise){
             cached.promise = mongoose.connect(MONGODB_URI,{
                useNewUrlParser: true, 
                useUnifiedTopology: true,
             }).then(mongoose=>mongoose);
          }
           cached.conn = await cached.promise;
           return cached.conn;
}