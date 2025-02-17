import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-purple-700">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] rounded-lg shadow-md"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt={item.title} fill className="object-contain rounded-lg" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold uppercase tracking-wide leading-snug">{item.title}</h1>
              <p className="p-4 2xl:p-8 text-lg md:text-xl">{item.desc}</p>
              <span className="text-2xl font-semibold">${item.price}</span>
              <button className="bg-purple-700 text-white py-2 px-6 rounded-md hover:bg-purple-800 transition duration-300 mt-4">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
