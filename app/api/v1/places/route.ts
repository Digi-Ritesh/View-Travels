import { getPlaces } from "@/lib/placesData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const places = await getPlaces();

    return NextResponse.json({
      success: true,
      message: "Places fetched successfully",
      data: places,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch places!",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}










// const places = [
//   {
//     "name": "Agra",
//     "description": "Agra is famous for the Taj Mahal and Mughal architecture.",
//     "category": "Historical",
//     "image": "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
//     "location": "Agra, Uttar Pradesh, India",
//     "price": 10000,
//     "rating": 4.5,
//     "reviews": [],
//     "averageRating": 4.5,
//     "isActive": true
//   },
//   {
//     "name": "Ranthambore",
//     "description": "Ranthambore is known for its tiger reserve and wildlife safari.",
//     "category": "Wildlife",
//     "image": "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
//     "location": "Ranthambore, Rajasthan, India",
//     "price": 20000,
//     "rating": 4.7,
//     "reviews": [],
//     "averageRating": 4.7,
//     "isActive": true
//   },
//   {
//     "name": "Jodhpur",
//     "description": "Jodhpur is known as the Blue City of Rajasthan.",
//     "category": "Historical",
//     "image": "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
//     "location": "Jodhpur, Rajasthan, India",
//     "price": 30000,
//     "rating": 4.4,
//     "reviews": [],
//     "averageRating": 4.4,
//     "isActive": true
//   },
//   {
//     "name": "Jaipur",
//     "description": "Jaipur is popularly known as the Pink City of India.",
//     "category": "Cultural",
//     "image": "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
//     "location": "Jaipur, Rajasthan, India",
//     "price": 40000,
//     "rating": 4.8,
//     "reviews": [],
//     "averageRating": 4.8,
//     "isActive": true
//   },
//   {
//     "name": "Delhi",
//     "description": "Delhi is the capital city of India with rich heritage and modern attractions.",
//     "category": "Urban",
//     "image": "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
//     "location": "Delhi, India",
//     "price": 50000,
//     "rating": 4.3,
//     "reviews": [],
//     "averageRating": 4.3,
//     "isActive": true
//   },
//   {
//     "name": "Udaipur",
//     "description": "Udaipur is known for its beautiful lakes and royal palaces.",
//     "category": "Romantic",
//     "image": "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
//     "location": "Udaipur, Rajasthan, India",
//     "price": 60000,
//     "rating": 4.9,
//     "reviews": [],
//     "averageRating": 4.9,
//     "isActive": true
//   },
//   {
//     "name": "Desert",
//     "description": "Experience the beautiful deserts and sand dunes of Rajasthan.",
//     "category": "Adventure",
//     "image": "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
//     "location": "Rajasthan, India",
//     "price": 70000,
//     "rating": 4.2,
//     "reviews": [],
//     "averageRating": 4.2,
//     "isActive": true
//   },
//   {
//     "name": "Ajmer",
//     "description": "Ajmer is famous for Ajmer Sharif Dargah and spiritual tourism.",
//     "category": "Religious",
//     "image": "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
//     "location": "Ajmer, Rajasthan, India",
//     "price": 80000,
//     "rating": 4.1,
//     "reviews": [],
//     "averageRating": 4.1,
//     "isActive": true
//   },
//   {
//     "name": "Pushkar",
//     "description": "Pushkar is known for its sacred lake and Brahma Temple.",
//     "category": "Religious",
//     "image": "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
//     "location": "Pushkar, Rajasthan, India",
//     "price": 90000,
//     "rating": 4.6,
//     "reviews": [],
//     "averageRating": 4.6,
//     "isActive": true
//   },
//   {
//     "name": "Jaisalmer",
//     "description": "Jaisalmer is famous for its golden fort and desert camps.",
//     "category": "Adventure",
//     "image": "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
//     "location": "Jaisalmer, Rajasthan, India",
//     "price": 100000,
//     "rating": 4.7,
//     "reviews": [],
//     "averageRating": 4.7,
//     "isActive": true
//   }
// ]

// const touristPlaces = [
//   {
//     _id: "1",
//     name: "Agra",
//     city: "Agra",
//     state: "Uttar Pradesh",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
//     tours: 2,
//     slug: "agra",
//     url: "/destination/agra/",
//     price: 10000,
//     description: "Agra is a city in the Indian state of Uttar Pradesh."
//   },
//   {
//     _id: "2",
//     name: "Ranthambore",
//     city: "Ranthambore",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
//     tours: 2,
//     slug: "ranthambore",
//     url: "/destination/ranthambore/",
//     price: 20000,
//     description: "Ranthambore is a city in the Indian state of Rajasthan."

//   },
//   {
//     _id: "3",
//     name: "Jodhpur",
//     city: "Jodhpur",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
//     tours: 1,
//     slug: "jodhpur",
//     url: "/destination/jodhpur/",
//     price: 30000,
//     description: "Jodhpur is a city in the Indian state of Rajasthan."
//   },
//   {
//     _id: "4",
//     name: "Jaipur",
//     city: "Jaipur",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
//     tours: 5,
//     slug: "jaipur",
//     url: "/destination/jaipur/",
//     price: 40000,
//     description: "Jaipur is a city in the Indian state of Rajasthan."
//   },
//   {
//     _id: "5",
//     name: "Delhi",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//     imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
//     tours: 1,
//     slug: "delhi",
//     url: "/destination/delhi/",
//     price: 50000,
//     description: "Delhi is a city in the Indian state of Delhi."
//   },
//   {
//     _id: "6",
//     name: "Udaipur",
//     city: "Udaipur",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
//     tours: 0,
//     slug: "udaipur",
//     url: "/destination/udaipur/",
//     price: 60000,
//     description: "Udaipur is a city in the Indian state of Rajasthan."
//   },
//   {
//     _id: "7",
//     name: "Desert",
//     city: "Desert",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
//     tours: 1,
//     slug: "rajasthan",
//     url: "/destination/rajasthan/",
//     price: 70000,
//     description: "Rajasthan is a city in the Indian state of Rajasthan."
//   },
//   {
//     _id: "8",
//     name: "Ajmer",
//     city: "Ajmer",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
//     tours: 1,
//     slug: "ajmer",
//     url: "/destination/ajmer/",
//     price: 80000,
//     description: "Ajmer is a city in the Indian state of Rajasthan."
//   },
//   {
//     _id: "9",
//     name: "Pushkar",
//     city: "Pushkar",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
//     tours: 1,
//     slug: "pushkar",
//     url: "/destination/pushkar/",
//     price: 90000,
//     description: "Pushkar is a city in the Indian state of Rajasthan."
//   },
//   {
//     _id: "10",
//     name: "Jaisalmer",
//     city: "Jaisalmer",
//     state: "Rajasthan",
//     country: "India",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
//     tours: 0,
//     slug: "jaisalmer",
//     url: "/destination/jaisalmer/",
//     price: 100000,
//     description: "Jaisalmer is a city in the Indian state of Rajasthan."
//   },
// ];

// const touristPlaces = [
//   {
//     _id: "1",
//     name: "Agra",
//     city: "Agra",
//     state: "Uttar Pradesh",
//     country: "India",
//     location: "Agra, Uttar Pradesh, India",
//     category: "Historical",
//     image: "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
//     tours: 2,
//     slug: "agra",
//     url: "/destination/agra/",
//     price: 10000,
//     description: "Agra is famous for the Taj Mahal and Mughal architecture.",
//     rating: 4.5,
//     averageRating: 4.5,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "2",
//     name: "Ranthambore",
//     city: "Ranthambore",
//     state: "Rajasthan",
//     country: "India",
//     location: "Ranthambore, Rajasthan, India",
//     category: "Wildlife",
//     image:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
//     tours: 2,
//     slug: "ranthambore",
//     url: "/destination/ranthambore/",
//     price: 20000,
//     description:
//       "Ranthambore is known for its tiger reserve and wildlife safari.",
//     rating: 4.7,
//     averageRating: 4.7,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "3",
//     name: "Jodhpur",
//     city: "Jodhpur",
//     state: "Rajasthan",
//     country: "India",
//     location: "Jodhpur, Rajasthan, India",
//     category: "Historical",
//     image: "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
//     imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
//     tours: 1,
//     slug: "jodhpur",
//     url: "/destination/jodhpur/",
//     price: 30000,
//     description: "Jodhpur is known as the Blue City of Rajasthan.",
//     rating: 4.4,
//     averageRating: 4.4,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "4",
//     name: "Jaipur",
//     city: "Jaipur",
//     state: "Rajasthan",
//     country: "India",
//     location: "Jaipur, Rajasthan, India",
//     category: "Cultural",
//     image: "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
//     tours: 5,
//     slug: "jaipur",
//     url: "/destination/jaipur/",
//     price: 40000,
//     description: "Jaipur is popularly known as the Pink City of India.",
//     rating: 4.8,
//     averageRating: 4.8,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "5",
//     name: "Delhi",
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//     location: "Delhi, India",
//     category: "Urban",
//     image: "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
//     imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
//     tours: 1,
//     slug: "delhi",
//     url: "/destination/delhi/",
//     price: 50000,
//     description:
//       "Delhi is the capital city of India with rich heritage and modern attractions.",
//     rating: 4.3,
//     averageRating: 4.3,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "6",
//     name: "Udaipur",
//     city: "Udaipur",
//     state: "Rajasthan",
//     country: "India",
//     location: "Udaipur, Rajasthan, India",
//     category: "Romantic",
//     image:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
//     tours: 0,
//     slug: "udaipur",
//     url: "/destination/udaipur/",
//     price: 60000,
//     description: "Udaipur is known for its beautiful lakes and royal palaces.",
//     rating: 4.9,
//     averageRating: 4.9,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "7",
//     name: "Desert",
//     city: "Desert",
//     state: "Rajasthan",
//     country: "India",
//     location: "Rajasthan, India",
//     category: "Adventure",
//     image:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
//     tours: 1,
//     slug: "rajasthan",
//     url: "/destination/rajasthan/",
//     price: 70000,
//     description:
//       "Experience the beautiful deserts and sand dunes of Rajasthan.",
//     rating: 4.2,
//     averageRating: 4.2,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "8",
//     name: "Ajmer",
//     city: "Ajmer",
//     state: "Rajasthan",
//     country: "India",
//     location: "Ajmer, Rajasthan, India",
//     category: "Religious",
//     image:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
//     tours: 1,
//     slug: "ajmer",
//     url: "/destination/ajmer/",
//     price: 80000,
//     description:
//       "Ajmer is famous for Ajmer Sharif Dargah and spiritual tourism.",
//     rating: 4.1,
//     averageRating: 4.1,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "9",
//     name: "Pushkar",
//     city: "Pushkar",
//     state: "Rajasthan",
//     country: "India",
//     location: "Pushkar, Rajasthan, India",
//     category: "Religious",
//     image:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
//     tours: 1,
//     slug: "pushkar",
//     url: "/destination/pushkar/",
//     price: 90000,
//     description: "Pushkar is known for its sacred lake and Brahma Temple.",
//     rating: 4.6,
//     averageRating: 4.6,
//     reviews: [],
//     isActive: true,
//   },
//   {
//     _id: "10",
//     name: "Jaisalmer",
//     city: "Jaisalmer",
//     state: "Rajasthan",
//     country: "India",
//     location: "Jaisalmer, Rajasthan, India",
//     category: "Adventure",
//     image:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
//     imageUrl:
//       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
//     tours: 0,
//     slug: "jaisalmer",
//     url: "/destination/jaisalmer/",
//     price: 100000,
//     description: "Jaisalmer is famous for its golden fort and desert camps.",
//     rating: 4.7,
//     averageRating: 4.7,
//     reviews: [],
//     isActive: true,
//   },
// ];

// import { connectDB } from "@/backend/config/mongoose.config";
// import PlacesDao from "@/backend/model/places.model";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectDB();

//     await PlacesDao.find();

//     return NextResponse.json({
//       message: "Places fetched successfully",
//       success: true,
//       data: touristPlaces,
//     });
//   } catch (error: unknown) {
//     return NextResponse.json(
//       {
//         message: "Unable to fetch places!",
//         success: false,
//         // error: error.message,
//          error: error instanceof Error
//         ? error.message
//         : "Unknown error occurred",
//       },
//       {
//         status: 500,
//       },
//     );
//   }
// }

// GET ALL PLACES
// export async function GET() {
//   return Response.json({
//     success: true,
//     message: "Places fetched successfully",
//     touristPlaces : touristPlaces,
//   });
// }

// // CREATE PLACE
// export async function POST(request: Request) {
//   try {
//     const newPlace: Omit<TouristPlace, "_id"> =
//        request.json();

//     const place: TouristPlace = {
//       _id: crypto.randomUUID(),
//       ...newPlace,
//     };

//     touristPlaces.push(place);

//     return Response.json(
//       {
//         success: true,
//         message: "Place created successfully",
//         place,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     return Response.json(
//       {
//         success: false,
//         message: "Failed to create place",
//         error:
//           error instanceof Error
//  ? error.message
//             : "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

// // UPDATE PLACE
// export async function PUT(request: Request) {
//   try {
//     const body: Partial<TouristPlace> & {
//       _id: string;
//     } = await request.json();

//     const { _id, ...updatedData } = body;

//     const index = touristPlaces.findIndex(
//       (place: TouristPlace) => place._id === _id
//     );

//     if (index === -1) {
//       return Response.json(
//         {
//           success: false,
//           message: "Place not found",
//         },
//         { status: 404 }
//       );
//     }

//     touristPlaces[index] = {
//       ...touristPlaces[index],
//       ...updatedData,
//     };

//     return Response.json({
//       success: true,
//       message: "Place updated successfully",
//       place: touristPlaces[index],
//     });
//   } catch (error) {
//     return Response.json(
//       {
//         success: false,
//         message: "Failed to update place",
//       },
//       { status: 500 }
//     );
//   }
// }

// // DELETE PLACE
// export async function DELETE(request: Request) {
//   try {
//     const body: { _id: string } =
//       await request.json();

//     const index = touristPlaces.findIndex(
//       (place: TouristPlace) =>
//         place._id === body._id
//     );

//     if (index === -1) {
//       return Response.json(
//         {
//           success: false,
//           message: "Place not found",
//         },
//         { status: 404 }
//       );
//     }

//     const [deletedPlace] =
//       touristPlaces.splice(index, 1);

//     return Response.json({
//       success: true,
//       message: "Place deleted successfully",
//       place: deletedPlace,
//     });
//   } catch (error) {
//     return Response.json(
//       {
//         success: false,
//         message: "Failed to delete place",
//       },
//       { status: 500 }
//     );
//   }
// }
