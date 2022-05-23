import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className='absolute z-20 w-full px-6 '>
      <nav className='flex flex-col space-y-6 rounded-lg border border-gray-200 bg-white px-6 py-8 text-center font-publicsans text-lg font-medium leading-[21px] text-primary'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/'>
          <a>About</a>
        </Link>
        <Link href='/'>
          <a>Contact</a>
        </Link>
        <Link href='/'>
          <a>Blog</a>
        </Link>
        <Link href='/'>
          <a>Careers</a>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
