import React from "react";

const EasybankArticles = () => {
  return (
    <div className='bg-[#fafafa] py-[88px] text-center lg:px-[165px] lg:py-[80px]'>
      <h2 className='pb-[30px] text-[32px] font-light leading-[38px] text-primary lg:pb-[0px] lg:text-left lg:text-[40px] lg:leading-[64px]'>
        Latest Articles
      </h2>
      <div className='lg:mt-[40px] lg:flex lg:space-x-[30px]'>
        <div className=' mx-6 rounded-md bg-[#ffffff] text-left lg:mx-0 lg:mt-0'>
          <img
            src='/image-currency.jpg'
            alt=''
            className='h-[200px] w-screen rounded-t-md object-cover'
          />
          <div className='px-[30px] py-6'>
            <p className='text-[10px] font-normal leading-[18px] text-secondary'>
              By Claire Robinson
            </p>
            <div className='h-[120px]'>
              <p className='mt-2 cursor-pointer text-[16px] font-light leading-[20px] text-primary hover:text-hover'>
                Receive money in any currency with no fees
              </p>
              <p className='mt-2 text-[13px] font-light leading-[18px] text-secondary'>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
        </div>
        <div className='mx-6 mt-6 rounded-md bg-[#ffffff] text-left lg:mx-0 lg:mt-0 '>
          <img
            src='/image-restaurant.jpg'
            alt=''
            className='h-[200px] w-screen rounded-t-md object-cover'
          />

          <div className='px-[30px] py-6'>
            <p className='text-[10px] font-normal leading-[18px] text-secondary'>
              By Wilson Hutton
            </p>
            <div className='h-[120px]'>
              <p className='mt-2 cursor-pointer text-[16px] font-light leading-[20px] text-primary hover:text-hover'>
                Treat yourself without worrying about money
              </p>
              <p className='mt-2 text-[13px] font-light leading-[18px] text-secondary'>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
        </div>
        <div className='mx-6 mt-6 rounded-md bg-[#ffffff] text-left lg:mx-0 lg:mt-0'>
          <img
            src='/image-plane.jpg'
            alt=''
            className='h-[200px] w-screen rounded-t-md object-cover'
          />
          <div className='px-[30px] py-6'>
            <p className='text-[10px] font-normal leading-[18px] text-secondary'>
              By Wilson Hutton
            </p>
            <div className='h-[120px]'>
              <p className='mt-2 cursor-pointer text-[16px] font-light leading-[20px] text-primary hover:text-hover'>
                Take your Easybank card wherever you go
              </p>
              <p className='mt-2 text-[13px] font-light leading-[18px] text-secondary'>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
        </div>
        <div className='lg:mt- mx-6 mt-6 rounded-md bg-[#ffffff] text-left lg:mx-0 lg:mt-0'>
          <img
            src='/image-confetti.jpg'
            alt=''
            className='h-[200px] w-screen rounded-t-md object-cover'
          />
          <div className='px-[30px] py-6'>
            <p className='text-[10px] font-normal leading-[18px] text-secondary'>
              By Claire Robinson
            </p>
            <div className='h-[120px] lg:h-auto'>
              <p className='mt-2 cursor-pointer text-[16px] font-light leading-[20px] text-primary hover:text-hover'>
                Our invite-only Beta accounts are now live!
              </p>
              <p className='mt-2 text-[13px] font-light leading-[18px] text-secondary'>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasybankArticles;
