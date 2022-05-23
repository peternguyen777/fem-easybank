import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [blogHover, setBlogHover] = useState(false);
  const [careersHover, setCareersHover] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const headerMouseOverHandler = (event) => {
    const onKey = event.target.innerHTML;

    if (onKey === "Home") {
      setHomeHover(true);
    } else if (onKey === "About") {
      setAboutHover(true);
    } else if (onKey === "Contact") {
      setContactHover(true);
    } else if (onKey === "Blog") {
      setBlogHover(true);
    } else if (onKey === "Careers") {
      setCareersHover(true);
    }
  };

  const headerMouseOffHandler = (event) => {
    const offKey = event.target.innerHTML;

    if (offKey === "Home") {
      setHomeHover(false);
    } else if (offKey === "About") {
      setAboutHover(false);
    } else if (offKey === "Contact") {
      setContactHover(false);
    } else if (offKey === "Blog") {
      setBlogHover(false);
    } else if (offKey === "Careers") {
      setCareersHover(false);
    }
  };

  const menuOnClickHandler = () => {
    setMobileMenu(true);
  };

  const menuOffClickHandler = () => {
    setMobileMenu(false);
  };

  return (
    // <header className='fixed z-30 flex h-16 w-screen items-center bg-white md:h-20'>
    // <div className='z-40 mx-[24px] flex w-screen items-center justify-between md:mx-[165px]'>

    <header className='fixed z-30 w-full bg-white'>
      <div className='mx-6 flex h-16 items-center justify-between md:mx-[165px] md:h-20'>
        <img src='/logo.svg' alt='' className='h-[20px] w-[139px]' />
        {mobileMenu ? (
          <img
            src='/icon-close.svg'
            alt=''
            className='h-[18px] w-[19px] md:hidden'
            onClick={menuOffClickHandler}
          />
        ) : (
          <img
            src='/icon-hamburger.svg'
            alt=''
            className='h-[11px] w-[24px] md:hidden'
            onClick={menuOnClickHandler}
          />
        )}

        <nav className='relative hidden items-center space-x-[30px] font-publicsans leading-none lg:flex'>
          <div className='relative flex h-20 items-center'>
            <Link href='/'>
              <a
                className='cursor-pointer font-medium text-secondary hover:text-primary'
                onMouseOver={headerMouseOverHandler}
                onMouseLeave={headerMouseOffHandler}
              >
                Home
              </a>
            </Link>
            {homeHover && (
              <div className='absolute bottom-0 h-1 w-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9]' />
            )}
          </div>

          <div className='relative flex h-20 items-center'>
            <Link href='/'>
              <a
                className='cursor-pointer font-medium text-secondary hover:text-primary'
                onMouseOver={headerMouseOverHandler}
                onMouseLeave={headerMouseOffHandler}
              >
                About
              </a>
            </Link>

            {aboutHover && (
              <div className='absolute bottom-0 h-1 w-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9]' />
            )}
          </div>

          <div className='relative flex h-20 items-center'>
            <Link href='/'>
              <a
                className='cursor-pointer font-medium text-secondary hover:text-primary'
                onMouseOver={headerMouseOverHandler}
                onMouseLeave={headerMouseOffHandler}
              >
                Contact
              </a>
            </Link>

            {contactHover && (
              <div className='absolute bottom-0 h-1 w-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9]' />
            )}
          </div>

          <div className='relative flex h-20 items-center'>
            <Link href='/'>
              <a
                className='cursor-pointer font-medium text-secondary hover:text-primary'
                onMouseOver={headerMouseOverHandler}
                onMouseLeave={headerMouseOffHandler}
              >
                Blog
              </a>
            </Link>

            {blogHover && (
              <div className='absolute bottom-0 h-1 w-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9]' />
            )}
          </div>

          <div className='relative flex h-20 items-center'>
            <Link href='/'>
              <a
                className='cursor-pointer font-medium text-secondary hover:text-primary'
                onMouseOver={headerMouseOverHandler}
                onMouseLeave={headerMouseOffHandler}
              >
                Careers
              </a>
            </Link>

            {careersHover && (
              <div className='absolute bottom-0 h-1 w-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9]' />
            )}
          </div>
        </nav>
        <button className='hidden h-[44px] w-[163px] rounded-full bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] font-publicsans text-sm font-bold leading-none text-white hover:opacity-70 md:inline-block'>
          Request Invite
        </button>
      </div>

      {mobileMenu && (
        <div className='absolute top-[88px] w-full sm:hidden'>
          <MobileMenu />
        </div>
      )}
      {mobileMenu && (
        <div
          className='absolute z-10 h-[667px] w-full bg-gradient-to-b from-primary to-transparent sm:hidden'
          onClick={menuOffClickHandler}
        />
      )}
    </header>
  );
};

export default Header;
