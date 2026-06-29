// import { use } from "react";
// import { MapPin, Star, Clock, Plane } from "lucide-react";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import AddPackageBtn from "./AddPackageBtn";
// import { getPlaces } from "@/lib/placesData";
// import { TouristPlace } from "@/types/allTypes";

// // const touristPlaces = [
// //   {
// //     _id: "1",
// //     name: "Agra",
// //     city: "Agra",
// //     state: "Uttar Pradesh",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
// //     tours: 2,
// //     slug: "agra",
// //     url: "/destination/agra/",
// //     price: 10000,
// //     description: "Agra is a city in the Indian state of Uttar Pradesh.",
// //   },
// //   {
// //     _id: "2",
// //     name: "Ranthambore",
// //     city: "Ranthambore",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
// //     tours: 2,
// //     slug: "ranthambore",
// //     url: "/destination/ranthambore/",
// //     price: 20000,
// //     description: "Ranthambore is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "3",
// //     name: "Jodhpur",
// //     city: "Jodhpur",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
// //     tours: 1,
// //     slug: "jodhpur",
// //     url: "/destination/jodhpur/",
// //     price: 30000,
// //     description: "Jodhpur is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "4",
// //     name: "Jaipur",
// //     city: "Jaipur",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
// //     tours: 5,
// //     slug: "jaipur",
// //     url: "/destination/jaipur/",
// //     price: 40000,
// //     description: "Jaipur is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "5",
// //     name: "Delhi",
// //     city: "Delhi",
// //     state: "Delhi",
// //     country: "India",
// //     imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
// //     tours: 1,
// //     slug: "delhi",
// //     url: "/destination/delhi/",
// //     price: 50000,
// //     description: "Delhi is a city in the Indian state of Delhi.",
// //   },
// //   {
// //     _id: "6",
// //     name: "Udaipur",
// //     city: "Udaipur",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
// //     tours: 0,
// //     slug: "udaipur",
// //     url: "/destination/udaipur/",
// //     price: 60000,
// //     description: "Udaipur is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "7",
// //     name: "Desert",
// //     city: "Desert",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
// //     tours: 1,
// //     slug: "rajasthan",
// //     url: "/destination/rajasthan/",
// //     price: 70000,
// //     description: "Rajasthan is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "8",
// //     name: "Ajmer",
// //     city: "Ajmer",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
// //     tours: 1,
// //     slug: "ajmer",
// //     url: "/destination/ajmer/",
// //     price: 80000,
// //     description: "Ajmer is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "9",
// //     name: "Pushkar",
// //     city: "Pushkar",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
// //     tours: 1,
// //     slug: "pushkar",
// //     url: "/destination/pushkar/",
// //     price: 90000,
// //     description: "Pushkar is a city in the Indian state of Rajasthan.",
// //   },
// //   {
// //     _id: "10",
// //     name: "Jaisalmer",
// //     city: "Jaisalmer",
// //     state: "Rajasthan",
// //     country: "India",
// //     imageUrl:
// //       "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
// //     tours: 0,
// //     slug: "jaisalmer",
// //     url: "/destination/jaisalmer/",
// //     price: 100000,
// //     description: "Jaisalmer is a city in the Indian state of Rajasthan.",
// //   },
// // ];

// const DestinationDescription = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {

//   const { slug } = use(params);

//   const destination = touristPlaces.find((place) => place.slug === slug);

//   if (!destination) {
//    notFound();
//   }

//   return (
//     <div className="min-h-screen bg-linear-to-b from-sky-50 to-white">
//       {/* Hero Section */}
//       <div className="relative h-500px overflow-hidden">
//         <Image
//           src={destination.imageUrl}
//           alt={destination.name}
//           className="w-full h-full object-cover"
//           width={1200}
//           height={1000}
//           loading="eager"
//         />

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="absolute bottom-10 left-10 text-white">
//           <p className="flex items-center gap-2 text-lg mb-3">
//             <MapPin size={20} />
//             {destination.city}, {destination.state}
//           </p>

//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
//             {destination.name}
//           </h1>

//           <div className="flex items-center gap-6 text-lg">
//             <span className="flex items-center gap-2">
//               <Star className="fill-yellow-400 text-yellow-400" size={20} />
//               4.9 Rating
//             </span>

//             <span className="flex items-center gap-2">
//               <Plane size={20} />
//               {destination.tours}+ Tours
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">
//         {/* Left Side */}
//         <div className="lg:col-span-2">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">
//             Explore {destination.name}
//           </h2>

//           <p className="text-gray-600 text-lg leading-9">
//             {destination.description}
//           </p>

//           {/* Features */}
//           <div className="grid md:grid-cols-3 gap-6 mt-10">
//             <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:-translate-y-2 duration-300">
//               <Clock className="text-sky-500 mb-4" size={35} />
//               <h3 className="text-xl font-bold mb-2">5 Days Tour</h3>
//               <p className="text-gray-500">
//                 Enjoy a premium guided experience.
//               </p>
//             </div>

//             <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:-translate-y-2 duration-300">
//               <Plane className="text-pink-500 mb-4" size={35} />
//               <h3 className="text-xl font-bold mb-2">Flight Included</h3>
//               <p className="text-gray-500">Comfortable travel arrangements.</p>
//             </div>

//             <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:-translate-y-2 duration-300">
//               <Star className="text-yellow-500 mb-4" size={35} />
//               <h3 className="text-xl font-bold mb-2">Top Rated</h3>
//               <p className="text-gray-500">Loved by thousands of travelers.</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Card */}
//         <div>
//           <div className="sticky top-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//             <p className="text-gray-500 mb-2">Starting From</p>

//             <h2 className="text-5xl font-extrabold text-sky-600 mb-6">
//               ₹{destination.price}
//             </h2>

//             <div className="space-y-4 mb-8">
//               <div className="flex justify-between text-gray-600">
//                 <span>Destination</span>
//                 <span className="font-semibold">{destination.name}</span>
//               </div>

//               <div className="flex justify-between text-gray-600">
//                 <span>Tours Available</span>
//                 <span className="font-semibold">{destination.tours}</span>
//               </div>

//               <div className="flex justify-between text-gray-600">
//                 <span>Country</span>
//                 <span className="font-semibold">{destination.country}</span>
//               </div>
//             </div>

//             <AddPackageBtn destination={destination} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationDescription;

import { MapPin, Star, Clock, Plane } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import AddPackageBtn from "./AddPackageBtn";

import { getPlaces } from "@/lib/placesData";
import { TouristPlace } from "@/types/allTypes";

export default async function DestinationDescription({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const touristPlaces: TouristPlace[] = await getPlaces();

  const destination = touristPlaces.find(
    (place) => place.slug === slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <div className="relative h-125 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10 text-white">
          <p className="flex items-center gap-2 text-lg mb-3">
            <MapPin size={20} />
            {destination.city}, {destination.state}
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            {destination.name}
          </h1>

          <div className="flex items-center gap-6 text-lg">
            <span className="flex items-center gap-2">
              <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
              {destination.averageRating}
            </span>

            <span className="flex items-center gap-2">
              <Plane size={20} />
              {destination.tours}+ Tours
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">
        {/* Left */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Explore {destination.name}
          </h2>

          <p className="text-gray-600 text-lg leading-9">
            {destination.description}
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:-translate-y-2 duration-300">
              <Clock
                size={35}
                className="text-sky-500 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                {destination.days}
              </h3>

              <p className="text-gray-500">
                Enjoy a premium guided experience.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:-translate-y-2 duration-300">
              <Plane
                size={35}
                className="text-pink-500 mb-4"
              />

              <h3 className="text-xl font-bold mb-2">
                Flight Included
              </h3>

              <p className="text-gray-500">
                Comfortable travel arrangements.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 hover:-translate-y-2 duration-300">
              <Star
                size={35}
                className="text-yellow-500 mb-4"
              />

              <h3 className="text-xl font-bold mb-2">
                Top Rated
              </h3>

              <p className="text-gray-500">
                Loved by thousands of travelers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div>
          <div className="sticky top-10 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <p className="text-gray-500 mb-2">
              Starting From
            </p>

            <h2 className="text-5xl font-extrabold text-sky-600 mb-6">
              ₹{destination.price}
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Destination</span>

                <span className="font-semibold">
                  {destination.name}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Tours Available</span>

                <span className="font-semibold">
                  {destination.tours}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Country</span>

                <span className="font-semibold">
                  {destination.country}
                </span>
              </div>
            </div>

            <AddPackageBtn destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
}