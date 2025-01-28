import Home from "@/components/Home";
import React from "react";
import { dummyFoodItems } from "@/dummyData/data";
import FoodItem from "@/components/FoodItem";

const Page = () => {
  return (
    <div className="bg-[#FFB30E] min-h-screen">
      <Home />
    </div>
  );
};

export default Page;
