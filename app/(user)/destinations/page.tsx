import { getPlaces } from "@/lib/placesData";
import { TouristPlace } from "@/types/allTypes";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const touristPlaces: TouristPlace[] = await getPlaces();

  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-6">
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
    <Link href={`/destinations/${slug}`}>
      <div className="group relative overflow-hidden rounded-2xl transition-shadow hover:shadow-xl">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />

        <div className="glassmorphism absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <span className="absolute bottom-0 left-0 text-white p-6 text-xl">
          {name}
          <p>{name === city ? state : `${city}, ${state}`}</p>
        </span>
      </div>
    </Link>
  );
};

// import Image from "next/image";
// import Link from "next/link";
// import { TouristPlace } from "@/types/allTypes";

// type ResponseProp = {
//   success: boolean;
//   message: string;
//   data: TouristPlace[];
// };

// const Collections = async () => {
//   const response = await fetch(process.env.PLACES_ENDPOINT!);
//   // console.log(reponse);

//   const { data: touristPlaces }: ResponseProp = await response.json();
//   console.log(touristPlaces);

//   return (
//     <div className="container mx-auto grid grid-cols-4 gap-4 p-6">
//       {touristPlaces.map((place, i) => (
//         <PlaceCard key={i} place={place} />
//       ))}
//     </div>
//   );
// };

// export default Collections;

// const PlaceCard = ({place}:{place:TouristPlace}) => {
//   const { name, city, state, image, slug } = place;

//   return (
//     <Link href={`destinations/${slug}`}>
//       <div className="group relative overflow-hidden rounded-2xl transition-shadow hover:shadow-xl">
//         <Image
//           src={image}
//           alt={name}
//           height={400}
//           width={400}
//           loading="eager"
//           className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="glassmorphism absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
//         <span className="absolute bottom-0 left-0 text-white p-6 text-xl">
//           {name}
//           <p>
//             {name === city ? state : `${city}, ${state}`}
//           </p>
//         </span>
//       </div>
//     </Link>
//   );
// };
