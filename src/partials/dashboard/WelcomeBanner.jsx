import React from 'react';
import heroImgDashboard from '../../images/hero-dashboard.png';

function WelcomeBanner() {
  return (
    <div className="flex bg-white rounded-3xl  float-left gap-3 2xl:w-2/3 ">
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl  font-bold mb-1">Selamat Pagi, Sumarni! 👋</h1>
        <p className="text-opacity-50 max-w-md">"Kesehatan adalah harta yang paling berharga, tetapi tidak ada yang menyadarinya sampai ia hilang."</p>
        <p className="text-opacity-50 ">-William Shakespeare</p>

        <div className="mt-5 flex gap-5 text-xs lg:text-3xl items-center text-darkGreen ">
          <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinejoin="round" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.502 4.502 0 0 0 2 14.5Z" />
          </svg>

          <h3 className="font-light">Berawan</h3>
          <span>|</span>
          <h3>30°C</h3>
        </div>
      </div>
      <img src={heroImgDashboard} alt="hero image dashboard" className=" hidden 2xl:flex w-52" />
    </div>
  );
}

export default WelcomeBanner;
