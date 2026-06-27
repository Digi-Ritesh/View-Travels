type AuthContextType = {
  isLoggedIn: boolean;
  userPrinciple: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};  
type Destination = {
  _id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  imageUrl: string;
  tours: number;
  slug: string;
  url: string;
  price: number;
  description: string;
};
interface Review {
  userId?: string;
  rating?: number;
  comment?: string;
  createdAt?: Date;
}
interface TouristPlace {
  _id: string;

  name: string;
  slug: string;
  url: string;

  city: string;
  state: string;
  country: string;
  location: string;

  category:
  | "Historical"
  | "Wildlife"
  | "Cultural"
  | "Urban"
  | "Romantic"
  | "Adventure"
  | "Religious";

  image: string;
  imageUrl: string;

  tours: number;
  price: number;

  description: string;

  rating: number;
  averageRating: number;

  reviews?: Review[];

  isActive: boolean;
}
type User = {
  name?: string;
  email?: string;
  password?:  string;
  userImage?: string;
}

export type { AuthContextType, Destination, TouristPlace, Review, User };