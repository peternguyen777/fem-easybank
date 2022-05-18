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
        <nav className='hidden items-center space-x-[30px] font-publicsans leading-none lg:flex'>
          <Link href='/'>
            <a className='cursor-pointer font-medium text-secondary hover:text-primary'>
              Home
            </a>
          </Link>
          <Link href='/'>
            <a className='cursor-pointer font-medium text-secondary hover:text-primary'>
              About
            </a>
          </Link>
          <Link href='/'>
            <a className='cursor-pointer font-medium text-secondary hover:text-primary'>
              Contact
            </a>
          </Link>
          <Link href='/'>
            <a className='cursor-pointer font-medium text-secondary hover:text-primary'>
              Blog
            </a>
          </Link>
          <Link href='/'>
            <a className='cursor-pointer font-medium text-secondary hover:text-primary'>
              Careers
            </a>
          </Link>
        </nav>
        <button className='hidden h-[44px] w-[163px] rounded-full bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] font-publicsans text-sm font-bold leading-none text-white hover:opacity-70 md:inline-block'>
          Request Invite
        </button>
      </div>
    </header>
  );
};

export default Header;
