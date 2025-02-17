import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-purple-900 text-5xl font-bold xl:text-6xl">
          Savor the Best Burger & Crispy French Fries
        </h1>
        <p className="text-purple-400 xl:text-xl">
          Indulge in our freshly made burgers with perfectly seasoned fries, cooked just the way you like them. 
          Whether you’re grabbing a quick bite or sharing with friends, this combo is always a crowd favorite.
        </p>
        
        <button className="bg-purple-900 text-white rounded-md py-3 px-6">
          Order Now and Enjoy!
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="Delicious burger and fries" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
