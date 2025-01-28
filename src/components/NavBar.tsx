// import React from "react";
// import Image from "next/image";
// import food from "../../public/images/FoodWagen.png";
// import logo from "../../public/images/logo.png";
// const NavBar = () => {
//   return (
//     <div className="flex justify-between items-center h-[75] ">
//       <div className="flex gap-[5] ">
//         <Image src={logo} alt="logo" width={28} height={29} />
//         <Image src={food} alt="logo" width={154} height={37} />
//       </div>
//       <button className="bg-[#FFBA26] text-white mr-[10px] w-[100px] h-[42px]  rounded-[14px]">
//         Add food
//       </button>
//     </div>
//   );
// };

// export default NavBar;
" use client ";
import React, { useState } from "react";
import Image from "next/image";
import food from "../../public/images/FoodWagen.png";
import logo from "../../public/images/logo.png";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex justify-between items-center h-[75px]">
        <div className="flex gap-[5px]">
          <Image src={logo} alt="logo" width={28} height={29} />
          <Image src={food} alt="logo" width={154} height={37} />
        </div>
        <button
          onClick={openModal}
          className="bg-[#FFBA26] text-white mr-[10px] w-[100px] h-[42px] rounded-[14px] hover:bg-[#FFA726] transition duration-300"
        >
          Add food
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-[400px]">
            <h2 className="text-xl font-bold mb-4">Add Food</h2>

            {/* Food Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food name
              </label>
              <input
                type="text"
                placeholder="Enter food name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBA26]"
              />
              <p className="text-red-500 text-sm mt-1">Food name is required</p>
            </div>

            {/* Food Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food rating
              </label>
              <input
                type="number"
                placeholder="Enter food rating"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBA26]"
              />
            </div>

            {/* Food Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food image (link)
              </label>
              <input
                type="text"
                placeholder="Enter food image URL"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBA26]"
              />
            </div>

            {/* Restaurant Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Restaurant name
              </label>
              <input
                type="text"
                placeholder="Enter restaurant name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBA26]"
              />
            </div>

            {/* Restaurant Logo */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Restaurant logo (link)
              </label>
              <input
                type="text"
                placeholder="Enter restaurant logo URL"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBA26]"
              />
            </div>

            {/* Restaurant Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Restaurant status
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBA26]">
                <option value="open">Open</option>
                <option value="close">Close</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button className="bg-[#FFBA26] text-white px-4 py-2 rounded-lg hover:bg-[#FFA726] transition duration-300">
                Save food
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
