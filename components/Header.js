import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className='fixed z-30 flex h-16 w-screen items-center bg-white md:h-20'>
      <div className='mx-[24px] flex w-screen items-center justify-between md:mx-[165px]'>
        <img src='/logo.svg' alt='' className='h-[20px] w-[139px]' />
        <img
          src='/icon-hamburger.svg'
          alt=''
          className='h-[11px] w-[24px] md:hidden'
        />
        <nav className='font-publicsans hidden items-center space-x-[30px] leading-none lg:flex'>
          <Link href='/'>
            <a className='text-unfocussed hover:text-focussed cursor-pointer font-medium'>
              Home
              <div className='relative hidden h-[4px] w-auto translate-y-8 bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] lg:flex' />
            </a>
          </Link>
          <Link href='/'>
            <a className='text-unfocussed hover:text-focussed cursor-pointer font-medium'>
              About
            </a>
          </Link>
          <Link href='/'>
            <a className='text-unfocussed hover:text-focussed cursor-pointer font-medium'>
              Contact
            </a>
          </Link>
          <Link href='/'>
            <a className='text-unfocussed hover:text-focussed cursor-pointer font-medium'>
              Blog
            </a>
          </Link>
          <Link href='/'>
            <a className='text-unfocussed hover:text-focussed cursor-pointer font-medium'>
              Careers
            </a>
          </Link>
        </nav>
        <button className='font-publicsans hidden h-[44px] w-[163px] rounded-full bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] text-sm font-bold leading-none text-white md:inline-block'>
          Request Invite
        </button>
      </div>
    </header>
  );
};

export default Header;