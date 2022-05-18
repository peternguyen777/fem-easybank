import React from "react";

const EasybankIntroDesktop = () => {
  return (
    <div className='ml-[165px] hidden w-[447px] flex-col items-center md:absolute md:mt-[250px] md:mb-[170px] lg:inline-block'>
      <h1 className='text-left text-[56px] font-light leading-[64px] text-primary'>
        Next generation digital banking
      </h1>
      <p className='mt-6 text-left text-[18px] font-light leading-[28px] text-secondary'>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button className='mt-9 h-[44px] w-[163px] rounded-full bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] font-publicsans text-sm font-bold leading-[28px] text-white hover:opacity-60'>
        Request Invite
      </button>
    </div>
  );
};

export default EasybankIntroDesktop;
