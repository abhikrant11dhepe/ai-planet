import Link from "next/link";
import React from "react";
import { UserButton, auth } from "@clerk/nextjs";


type Props = {};

const Navbar = async (props: Props) => {
  return (
    <nav className="text-lg fixed inset-x-0 top-0 bg-green-200 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-8xl">
        <Link href="/" className="items-center hidden gap-2 sm:flex">
          <p className="text-black dark:text-white rounded-3xl border-2 border-b-4 border-l-4 border-black px-2 py-1 text-2xl font-extrabold transition-all hover:-translate-y-[-2px] hover:-translate-x-[2px] md:block dark:border-white">
          <span className="text-emerald-500">ai</span> planet
          </p>
        </Link>
        <div className="flex items-center">
          <Link href="/about" className="mr-8 mt-1 font-semibold text-base hover:-translate-y-[-2px] transition-all">
            About Us
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;