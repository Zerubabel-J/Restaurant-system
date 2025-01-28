import React from "react";
import Image from "next/image";

// Define the type for the props
interface FoodItemProps {
  name: string;
  price: string;
  restaurant: string;
  imageUrl: any;
  rating: number; // Add rating
}

const FoodItem: React.FC<FoodItemProps> = ({
  name,
  price,
  restaurant,
  imageUrl,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-[20]">
      {/* Food Image */}
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Food Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{restaurant}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-sm text-gray-700">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-[#FFBA26] mt-2">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
