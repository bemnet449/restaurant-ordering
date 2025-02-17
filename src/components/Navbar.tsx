import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 bg-white">
      {/* LEFT LINKS */}
      <div className="text-xl md:font-bold flex-1 md:text-center text-gray-800">
        <Link href="/">Mamaa</Link>
      </div>
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/" className="text-gray-700 hover:text-purple-600">Homepage</Link>
        <Link href="/menu" className="text-gray-700 hover:text-purple-600">Menu</Link>
        <Link href="/" className="text-gray-700 hover:text-purple-600">Contact</Link>
      </div>
      {/* LOGO */}
     
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-purple-700 text-white px-4 py-2 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login" className="text-gray-700 hover:text-purple-600">Login</Link>
        ) : (
          <Link href="/orders" className="text-gray-700 hover:text-purple-600">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
