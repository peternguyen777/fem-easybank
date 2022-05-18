import React from "react";

const EasybankIntro = () => {
  return (
    <div className='mx-6 flex flex-col items-center'>
      <h1 className='text-center  text-[40px] font-light leading-[47px] text-primary'>
        Next generation digital banking
      </h1>
      <p className='mt-4 text-center text-[15px] font-light leading-[25px] text-secondary'>
        Take your financial life online. Your Easybnank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button className='mt-8 mb-[88px] h-[44px] w-[163px] rounded-full bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] font-publicsans text-sm font-bold leading-[28px] text-white'>
        Request Invite
      </button>
    </div>
  );
};

export default EasybankIntro;
