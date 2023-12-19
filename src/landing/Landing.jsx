import React, { useEffect } from 'react';
import logoHospital from '../images/landing/hospital.svg';
import logoPeople from '../images/landing/people.svg';
import logoAirdrop from '../images/landing/airdrop.svg';

const Landing = () => {
  return (
    <section className={`relative flex-1 px-4 sm:px-6  flex flex-col h-screen  lg:bg-[url('/images/group.png')] bg-no-repeat  bg-cover bg-center -mt-[4.6rem] bg-white `}>
      <div className="xl:px-48 mt-32 pb-20 lg:pb-0">
        <h1 className="text-darkGreen font-semibold text-[70px] max-w-2xl">
          <span className="text-lightGreen">Menuju</span> Hidup yang Lebih Baik
        </h1>

        <p className="max-w-xl font-light mt-5">Tingkatkan kesehatan keluarga Anda bersama kami. Dengan perawatan ahli, layanan terbaik, dan komitmen pada kesejahteraan anak-anak, kami memberikan solusi kesehatan untuk semua.</p>

        <ul className="bg-white/60 backdrop-blur-sm px-10 py-5 mt-10 flex gap-20 w-fit h-fit flex-col lg:flex-row">
          <li className="flex flex-col max-w-xs gap-3">
            <img src={logoHospital} alt="" className="bg-greenPrimary p-2 rounded-full w-12" />
            <h3 className="text-lg font-semibold w-48 ">Mengoptimalkan Layanan Kesehatan</h3>

            <p className="text-sm w-56">Lorem ipsum dolor sit amet consectetur. Diam nibh mauris sit et.</p>
          </li>
          <li className="flex flex-col max-w-xs gap-3">
            <img src={logoPeople} alt="" className="bg-greenPrimary p-2 rounded-full w-12 " />
            <h3 className="text-lg font-semibold w-48 ">Meningkatkan Kesejahteraan Sosial</h3>

            <p className="text-sm w-56">Lorem ipsum dolor sit amet consectetur. Diam nibh mauris sit et.</p>
          </li>
          <li className="flex flex-col max-w-xs gap-3">
            <img src={logoAirdrop} alt="" className="bg-greenPrimary p-2 rounded-full w-12" />
            <h3 className="text-lg font-semibold w-48 ">Pusat Informasi dan Konseling</h3>

            <p className="text-sm w-56">Lorem ipsum dolor sit amet consectetur. Diam nibh mauris sit et.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Landing;
