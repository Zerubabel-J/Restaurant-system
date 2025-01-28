import Home from "@/components/Home";
import React from "react";
import { dummyFoodItems } from "@/dummyData/data";
import FoodItem from "@/components/FoodItem";

const Page = () => {
  return (
    <div className="bg-[#FFB30E] min-h-screen">
      <Home />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Popular Food Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyFoodItems.map((foodItem, index) => (
            <FoodItem
              key={index}
              name={foodItem.name}
              price={foodItem.price}
              restaurant={foodItem.restaurant}
              imageUrl={foodItem.imageUrl}
              rating={foodItem.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
