import Home from "@/components/Home";
import React from "react";
import { dummyFoodItems } from "@/dummyData/data";
import FoodItem from "@/components/FoodItem";

const Page = () => {
  return (
    <div className="bg-[#FFB30E] min-h-screen">
      <Home />

      {/* <div className="container mx-auto p-6">
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
      </div> */}
    </div>
  );
};

export default Page;
