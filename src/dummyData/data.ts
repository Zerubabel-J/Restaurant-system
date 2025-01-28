import Image from "../../public/images/foodlists/Image.png";
import Image1 from "../../public/images/foodlists/Image1.png";
import Image2 from "../../public/images/foodlists/Image2.png";
import Image3 from "../../public/images/foodlists/Image3.png";

export const dummyFoodItems = [
  {
    name: "Pancake",
    price: "$3.99",
    restaurant: "DUNKIN'",
    imageUrl: Image, // Use imported image directly
    rating: 4.5, // Added rating
  },
  {
    name: "Donuts",
    price: "$2.99",
    restaurant: "DUNKIN'",
    imageUrl: Image1, // Use imported image directly
    rating: 4.2, // Added rating
  },
  {
    name: "Burger",
    price: "$5.99",
    restaurant: "Burger King",
    imageUrl: Image2, // Use imported image directly
    rating: 4.7, // Added rating
  },
  {
    name: "Pizza",
    price: "$8.99",
    restaurant: "Pizza Hut",
    imageUrl: Image3, // Use imported image directly
    rating: 4.8, // Added rating
  },
];
