import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='flex w-screen flex-col items-center bg-primary py-[40px]'>
      <img src='/logo-whitebg.svg' alt='' />
      <div className='my-8 flex flex-row space-x-4'>
        <img src='/icon-facebook.svg' alt='' />
        <img src='/icon-youtube.svg' alt='' />
        <img src='/icon-twitter.svg' alt='' />
        <img src='/icon-pinterest.svg' alt='' />
        <img src='/icon-instagram.svg' alt='' />
      </div>
      <div className='flex flex-col items-center space-y-2 text-[15px] font-light leading-[26px]'>
        <Link href='/'>
          <a className='text-white'>About Us</a>
        </Link>
        <Link href='/'>
          <a className='text-white'>Contact</a>
        </Link>
        <Link href='/'>
          <a className='text-white'>Blog</a>
        </Link>
        <Link href='/'>
          <a className='text-white'>Careers</a>
        </Link>
        <Link href='/'>
          <a className='text-white'>Support</a>
        </Link>
        <Link href='/'>
          <a className='text-white'>Privacy Policy</a>
        </Link>
      </div>
      <button className='mt-8 h-[44px] w-[163px] rounded-full bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] font-publicsans text-sm font-bold leading-none text-white'>
        Request Invite
      </button>
      <p className='mt-6 text-[15px] leading-[26px] text-secondary'>
        © Easybank. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
