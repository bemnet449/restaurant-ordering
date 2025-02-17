import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-purple-900 lg:flex-row"> {/* Changed to dark purple */}
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold text-purple-900">sicilian</h1> {/* Dark purple for title */}
            <span className="text-purple-900">Large</span> {/* Dark purple for size */}
          </div>
          <h2 className="font-bold text-purple-900">$79.90</h2> {/* Dark purple for price */}
          <span className="cursor-pointer text-purple-900">X</span> {/* Dark purple for remove */}
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold text-purple-900">sicilian</h1>
            <span className="text-purple-900">Large</span>
          </div>
          <h2 className="font-bold text-purple-900">$79.90</h2>
          <span className="cursor-pointer text-purple-900">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold text-purple-900">sicilian</h1>
            <span className="text-purple-900">Large</span>
          </div>
          <h2 className="font-bold text-purple-900">$79.90</h2>
          <span className="cursor-pointer text-purple-900">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="text-purple-900">Subtotal (3 items)</span> {/* Dark purple for subtotal */}
          <span className="text-purple-900">$81.70</span> {/* Dark purple for amount */}
        </div>
        <div className="flex justify-between">
          <span className="text-purple-900">Service Cost</span> {/* Dark purple for service cost */}
          <span className="text-purple-900">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-purple-900">Delivery Cost</span> {/* Dark purple for delivery cost */}
          <span className="text-green-500">FREE!</span> {/* Green for free */}
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="text-purple-900">TOTAL(INCL. VAT)</span> {/* Dark purple for total */}
          <span className="font-bold text-purple-900">$81.70</span> {/* Dark purple for total amount */}
        </div>
        <button className="bg-red-500 text-purple-900 p-3 rounded-md w-1/2 self-end">
  CHECKOUT
</button>

      </div>
    </div>
  );
};

export default CartPage;
