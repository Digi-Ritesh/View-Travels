// import { connectDB } from "@/backend/config/mongoose.config";
import { TouristPlace, } from "@/types/allTypes";
import Image from "next/image";
import Link from "next/link";

type ResponseProp = {
  success: boolean;
  message: string;
  data: TouristPlace[];
};

const Collections = async () => {

// const conn =  await connectDB();
// console.log("Connected to MongoDB:", conn.connections[0].host);
const response = await fetch(process.env.PLACES_ENDPOINT!);
// console.log(response);
const {data:touristPlaces}:ResponseProp= await response.json();
console.log(touristPlaces);

// const Collections = async () => {
//   await connectDB();

//   const response = await fetch(process.env.PLACES_ENDPOINT!, {
//     cache: "no-store",
//   });
 
//   const result: ResponseProp = await response.json();
//   const touristPlaces = result.data ?? [];

  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 p-6">
      {touristPlaces.map((place) => (
        <PlaceCard key={place._id} place={place} />
      ))}
    </div>
  );
};

export default Collections;


const PlaceCard = ({ place }: { place: TouristPlace }) => {
  const { name, city, state, image, slug } = place;

  return (
    <Link href={`destinations/${slug}`}>
      <div className="group relative overflow-hidden rounded-2xl transition-shadow hover:shadow-xl">
        <Image
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={400}
          loading="eager"
        />
        <div className="glassmorphism absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        <span className="absolute bottom-0 left-0 text-white p-6 text-xl">
          {name}
          <p>
            {name === city ? state : `${city}, ${state}`}
          </p>
        </span>
      </div>
    </Link>
  );
};
