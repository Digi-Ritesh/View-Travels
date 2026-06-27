import { connectDB } from "@/backend/config/mongoose.config";
import UserModel from "@/backend/model/user.model";
import { NextResponse, NextRequest } from "next/server";
 
// register method
export async function POST(request: NextRequest) {
  try{
    await connectDB();

    const user = await request.json();

    console.log("Received User:", user);
    
   const savedUser=await UserModel.create(user);

    console.log("Saved User:", savedUser);

    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      data: savedUser,
    },
    {
      status: 201,
    }
  );
  }
  catch(error:unknown){
      console.error("REGISTER ERROR =>", error);
    return NextResponse.json(
      {
      message: "Unable to register user!",
      success: false,
      // error: error.message,
       error: error instanceof Error
        ? error.message
        : "Unknown error occurred",
    },
    {
      status: 500,
    }
  );
  }
}

// get user by email
export async function GET(request:NextRequest){
  try{
    await connectDB();
    const { searchParams }=new URL(request.url);
    const email = searchParams.get("email");
    if(!email){
      return NextResponse.json(
        {
          message:"Email query parameter is required",
          status:false,
        },
        {status:400}
      );
    }
    const user = await UserModel.findOne({email});
    console.log("GET user by email:",user);
    if(!user){
      return NextResponse.json(
        {
         message:"User not found",
         status:false,
      },
      {status:404}
      );
    }
    return NextResponse.json(
      {
        message:"User found",
        status:true,
        data:user,
      },
      {status:200}
    );
  } catch (error:unknown){
    return NextResponse.json(
      {
        message:"Unable to fetch user!",
        status:false,
        // error:error.message,
         error: error instanceof Error
        ? error.message
        : "Unknown error occurred",
      },
      {
        status:500,
      }
    )
  }
};