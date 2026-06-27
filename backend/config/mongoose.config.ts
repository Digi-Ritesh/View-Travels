import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tour_travels";
if (!URI) {
  throw new Error("Please define the MONGODB_URI");
}

// const client = new MongoClient(process.env.MONGODB_URI!);

// const conn = await client.connect();
// console.log("Connecting to MongoDB:",conn)
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}
declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(URI!, {
      dbName: "tour_travels",
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in .env.local");
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// declare global {
//   var mongooseCache: MongooseCache | undefined;
// }

// const cached: MongooseCache = global.mongooseCache || {
//   conn: null,
//   promise: null,
// };

// global.mongooseCache = cached;

// export async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI!, {
//       dbName: "tour_travels",
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }
