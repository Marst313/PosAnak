import React from 'react';

import FooterLanding from './FooterLanding';

import gambarIbu from '../images/dashboard/image5.png';
import gambarAnak from '../images/landing/image6.png';
import gambarImunisasi from '../images/landing/image7.png';

import logoCalender from '../images/calender.svg';

import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <div className="relative  px-4 sm:px-6  flex xl:px-60 mt-5 gap-3 flex-col pb-40 overflow-x-hidden">
      <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 lg:w-1/2 ">
          <h1 className="underline-offset-2 underline py-2 font-medium text-xl">BERITA TERKINI</h1>

          <img src={gambarIbu} alt="" className="rounded-lg h-full" />
        </div>

        <div className="flex flex-col gap-5 lg:w-1/2">
          <div className="flex justify-between items-center relative">
            <h1 className="bg-greenPrimary w-fit px-7 py-2 rounded-t-xl text-xl text-white">BERITA UTAMA</h1>

            <div className="absolute bottom-0 border-b-2 border-greenPrimary w-full"></div>
            <Link className="font-light text-greenPrimary text-lg" to="/semuaBerita">
              Selengkapnya {`>>`}
            </Link>
          </div>

          <ul className="flex flex-col gap-3">
            <Link to={`/berita/1`}>
              <li className="bg-white p-3 shadow-custom rounded-xl flex gap-5">
                <img src={gambarAnak} alt="anak balita" className="rounded-lg w/" />

                <div>
                  <div className="flex items-center gap-3">
                    <img src={logoCalender} alt="logo kalender" />
                    <p className="text-xs ">Senin 12/12/2025 19.60 WIB</p>
                  </div>

                  <h5 className="mt-2 font-medium">Penimbangan Balita</h5>

                  <p className="text-xs font-light mt-3">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
                </div>
              </li>
            </Link>

            <Link to={`/berita/1`}>
              <li className="bg-white p-3 shadow-custom rounded-xl flex gap-5">
                <img src={gambarImunisasi} alt="gambar imunisasi" className="rounded-lg w/" />

                <div>
                  <div className="flex items-center gap-3">
                    <img src={logoCalender} alt="logo kalender" />
                    <p className="text-xs ">Senin 12/12/2025 19.60 WIB</p>
                  </div>

                  <h5 className="mt-2 font-medium">Imunisasi Balita</h5>

                  <p className="text-xs font-light mt-3">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center relative">
          <h1 className="bg-greenPrimary w-fit px-7 py-2 rounded-t-xl text-xl text-white">BERITA LAINNYA</h1>

          <div className="absolute bottom-0 border-b-2 border-greenPrimary w-full"></div>
          <Link className="font-light text-greenPrimary text-lg">Selengkapnya {`>>`}</Link>
        </div>

        <ul className="mt-5 lg:grid-cols-3 grid mb-5 gap-5 ">
          <Link to={`/berita/1`}>
            <li className="gap-3 flex flex-col bg-white p-5 rounded-lg  ">
              <img src={gambarIbu} alt="" className="w-[361px] h-[157px] object-none rounded-lg" />

              <div className="flex items-center gap-3">
                <img src={logoCalender} alt="logo kalender" />
                <p className="text-xs ">Senin 12/12/2025 19.60 WIB</p>
              </div>

              <h3 className="line-clamp-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Ultrices mauris at aliquam scelerisque ac tellus a.</h3>

              <p className="text-xs line-clamp-2 font-light">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
            </li>
          </Link>
          <Link to={`/berita/1`}>
            <li className="gap-3 flex flex-col bg-white p-5 rounded-lg  ">
              <img src={gambarIbu} alt="" className="w-[361px] h-[157px] object-none rounded-lg" />

              <div className="flex items-center gap-3">
                <img src={logoCalender} alt="logo kalender" />
                <p className="text-xs ">Senin 12/12/2025 19.60 WIB</p>
              </div>

              <h3 className="line-clamp-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Ultrices mauris at aliquam scelerisque ac tellus a.</h3>

              <p className="text-xs line-clamp-2 font-light">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
            </li>
          </Link>
          <Link to={`/berita/1`}>
            <li className="gap-3 flex flex-col bg-white p-5 rounded-lg  ">
              <img src={gambarIbu} alt="" className="w-[361px] h-[157px] object-none rounded-lg" />

              <div className="flex items-center gap-3">
                <img src={logoCalender} alt="logo kalender" />
                <p className="text-xs ">Senin 12/12/2025 19.60 WIB</p>
              </div>

              <h3 className="line-clamp-2 font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Ultrices mauris at aliquam scelerisque ac tellus a.</h3>

              <p className="text-xs line-clamp-2 font-light">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
            </li>
          </Link>
        </ul>
      </div>

      <FooterLanding />
    </div>
  );
};

export default Article;
