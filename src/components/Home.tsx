import React from "react";
import Image from "next/image";
import image1 from "../../public/images/mainfood.png";

export default function Home() {
  return (
    <div className="w-full bg-[#FFB30E] flex flex items-center justify-between p-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Are you starving?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Within a few clicks, find meals that are accessible near you
        </p>

        {/* Delivery and Pickup Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            Delivery
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300">
            Pickup
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Q. What do you like to eat today?
          </h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for food..."
              className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition duration-300">
              Q. Find Food
            </button>
          </div>
        </div>
      </div>

      <Image
        src={image1}
        alt="food"
        width={400}
        height={400}
        className="rounded-full"
      />
    </div>
  );
}

// const Home = () => {
//   return (
//     <div className="flex justify-around bg-[#FFB30E] ">
//       <div>
//         <div>
//           <h1>Are you starving</h1>
//         </div>
//         <div>
//           <p>Get foods with in few clicks</p>
//         </div>
//       </div>
//       <div>
//         <Image src={foodItem} alt="food" width={500} height={500} />
//       </div>
//     </div>
//   );
// };

// export default Home;
