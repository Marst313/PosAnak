import React, { useEffect } from "react";
import logoHospital from "../images/landing/hospital.svg";
import logoPeople from "../images/landing/people.svg";
import logoAirdrop from "../images/landing/airdrop.svg";
import landingmobile from "../images/landing-mobile.png";
import FooterLanding from "./FooterLanding";

const Landing = () => {
  return (
    <section
      className={`relative flex-1 flex flex-col h-screen lg:bg-[url('/images/group.png')] bg-no-repeat  bg-cover bg-center -mt-[4.6rem] bg-white `}
    >
      <div className="xl:px-48 mt-28 pb-20 lg:pb-0 px-4">
        <h1 className="text-darkGreen font-semibold text-5xl lg:text-[5.2rem] max-w-2xl">
          <span className="text-lightGreen">Menuju</span> Hidup yang Lebih Baik
        </h1>
        <div className="lg:hidden">
          <img src={landingmobile} alt="" />
        </div>

        <p className="max-w-xl font-light mt-10 lg:mt-5 text-justify">
          Tingkatkan kesehatan keluarga Anda bersama kami. Dengan perawatan
          ahli, layanan terbaik, dan komitmen pada kesejahteraan anak-anak, kami
          memberikan solusi kesehatan untuk semua.
        </p>

        <ul className="bg-white/60 backdrop-blur-sm px-10 py-5 mt-10 lg:mt-5 mb-2 flex gap-20 w-fit h-fit flex-col lg:flex-row">
          <li className="flex flex-col items-center lg:items-start max-w-xs gap-3 ">
            <img
              src={logoHospital}
              alt=""
              className="bg-greenPrimary p-2 rounded-full w-32 lg:w-12  "
            />
            <h3 className="text-lg font-semibold text-center lg:text-start lg:w-48 ">
              Mengoptimalkan Layanan Kesehatan
            </h3>

            <p className="text-lg lg:text-sm w-56">
              Strategi Efektif dalam Meningkatkan Kualitas dan Aksesibilitas
              Layanan Kesehatan
            </p>
          </li>
          <li className="flex flex-col items-center lg:items-start  max-w-xs gap-3">
            <img
              src={logoPeople}
              alt=""
              className="bg-greenPrimary p-2 rounded-full w-32 lg:w-12   "
            />
            <h3 className="text-lg font-semibold text-center lg:text-start lg:w-48 ">
              Meningkatkan Kesejahteraan Sosial
            </h3>

            <p className="text-lg lg:text-sm w-64 ">
              Strategi Mendalam untuk Meningkatkan Kesejahteraan Sosial dengan
              Berbagai Pendekatan yang Terintegras
            </p>
          </li>
          <li className="flex flex-col items-center lg:items-start max-w-xs gap-3 ">
            <img
              src={logoAirdrop}
              alt=""
              className="bg-greenPrimary p-2 rounded-full w-32 lg:w-12  "
            />
            <h3 className="text-lg font-semibold text-center lg:text-start lg:w-48 ">
              Pusat Informasi dan Konseling Anak
            </h3>

            <p className="text-lg lg:text-sm w-64 ">
              Pusat Informasi dan Konseling untuk meningkatkan kesejahteraan
              melalui bantuan yang tersedia.
            </p>
          </li>
        </ul>
      </div>
      <div className="lg:hidden relative mt-20">
        <FooterLanding />
      </div>
    </section>
  );
};

export default Landing;
