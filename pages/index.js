import Head from "next/head";
import React from "react";
import EasybankArticles from "../components/EasybankArticles";
import EasybankBody from "../components/EasybankBody";
import EasybankIntroDesktop from "../components/EasybankIntroDesktop";
import EasybankIntroMobile from "../components/EasybankIntroMobile";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>easybank - next generation digital banking</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <Header />
      <main className=' h-screen w-screen font-publicsans'>
        <div className='absolute w-screen px-[14px] lg:static lg:flex'>
          <img
            src='/image-mockups.png'
            alt=''
            className='z-10 mx-auto -translate-y-[60px] lg:absolute lg:-right-[115px] lg:mx-0 lg:-translate-y-[40px]'
          />
          <EasybankIntroDesktop />
        </div>
        <img
          src='/bg-intro-mobile.svg'
          alt=''
          className='max-h-[736px] w-screen sm:hidden'
        />
        <img
          src='/bg-intro-desktop.svg'
          alt=''
          className='hidden max-h-[736px] w-screen object-cover sm:inline-block lg:translate-x-[43%] '
        />
        <div className='-translate-y-[38px]'>
          <EasybankIntroMobile />
          <EasybankBody />
          <EasybankArticles />
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
}
