import React from "react";

const EasybankBody = () => {
  return (
    <div className='bg-[#F4F5F7] px-6 py-16 text-center lg:px-[165px] lg:py-24 lg:text-left'>
      <div>
        <h2 className='text-[32px] font-light leading-[38px] text-primary lg:text-[40px] lg:leading-[64px]'>
          Why choose Easybank?
        </h2>
        <p className='mt-3.5 text-[15px] font-light leading-[25px] text-secondary lg:mt-4 lg:text-[18px] lg:leading-[28px]'>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br className='hidden lg:inline-block' />
          Control your finances like never before.
        </p>
      </div>
      <div className='mt-14 lg:mt-[72px] lg:flex lg:space-x-[30px] lg:text-left'>
        <div className='mt-8 lg:mt-0 lg:w-screen'>
          <img src='/icon-online.svg' alt='' className='mx-auto lg:ml-0' />
          <h3 className='mt-6 text-[20px] leading-[28px] text-primary lg:mt-10 lg:text-[24px] lg:leading-[28px]'>
            Online Banking
          </h3>
          <p className='mt-4 text-[15px] font-light leading-[25px] text-secondary lg:mt-[26px] lg:text-[16px] lg:leading-[26px]'>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:w-screen'>
          <img src='/icon-budgeting.svg' alt='' className='mx-auto lg:ml-0' />
          <h3 className='mt-6 text-[20px] leading-[28px] text-primary lg:mt-10 lg:text-[24px] lg:leading-[28px]'>
            Simple Budgetting
          </h3>
          <p className='mt-4 text-[15px] font-light leading-[25px] text-secondary lg:mt-[26px] lg:text-[16px] lg:leading-[26px]'>
            See exactly where your money goes each month. Receive notifications
            when you’re close to your hitting limits.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:w-screen'>
          <img src='/icon-onboarding.svg' alt='' className='mx-auto lg:ml-0' />
          <h3 className='mt-6 text-[20px] leading-[28px] text-primary lg:mt-10 lg:text-[24px] lg:leading-[28px]'>
            Fast Onboarding
          </h3>
          <p className='mt-4 text-[15px] font-light leading-[25px] text-secondary lg:mt-[26px] lg:text-[16px] lg:leading-[26px]'>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:w-screen'>
          <img src='/icon-api.svg' alt='' className='mx-auto lg:ml-0' />
          <h3 className='mt-6 text-[20px] leading-[28px] text-primary lg:mt-10 lg:text-[24px] lg:leading-[28px]'>
            Open API
          </h3>
          <p className='mt-4 text-[15px] font-light leading-[25px] text-secondary lg:mt-[26px] lg:text-[16px] lg:leading-[26px]'>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EasybankBody;
