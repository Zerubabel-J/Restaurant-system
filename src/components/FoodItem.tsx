// import React from "react";
// import Image from "next/image";

// // Define the type for the props
// interface FoodItemProps {
//   name: string;
//   price: string;
//   restaurant: string;
//   imageUrl: any;
//   rating: number; // Add rating
// }

// const FoodItem: React.FC<FoodItemProps> = ({
//   name,
//   price,
//   restaurant,
//   imageUrl,
//   rating,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       {/* Food Image */}
//       <div className="relative h-40">
//         <Image
//           src={imageUrl}
//           alt={name}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-t-lg"
//         />
//       </div>

//       {/* Food Details */}
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//         <p className="text-sm text-gray-500">{restaurant}</p>

//         {/* Rating */}
//         <div className="flex items-center mt-2">
//           <span className="text-yellow-500">★</span>
//           <span className="ml-1 text-sm text-gray-700">
//             {rating.toFixed(1)}
//           </span>
//         </div>

//         {/* Price */}
//         <p className="text-lg font-bold text-[#FFBA26] mt-2">{price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;

import Home from "@/components/Home";
import React from "react";
import { dummyFoodItems } from "@/dummyData/data";
import FoodItem from "@/components/FoodItem";

const Page = () => {
  return (
    <div className="bg-[#FFB30E] min-h-screen">
      <Home />

      {/* Food Items Section */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Food Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyFoodItems.map((item, index) => (
            <FoodItem
              key={index}
              name={item.name}
              price={item.price}
              restaurant={item.restaurant}
              imageUrl={item.imageUrl}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
