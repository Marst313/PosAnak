import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLanding } from '../components/landing/';

import { gambarIbuPosyandu } from '../images/landing/';
import { calender } from '../images/icons/';
import Pagination from './Pagination';
const SemuaBerita = () => {
  return (
    <div className="relative  px-4 sm:px-6  flex xl:px-60 mt-5 gap-3 flex-col pb-40 overflow-x-hidden items-center">
      <ul className="w-full gap-5 flex-col flex">
        <li>
          <Link className="flex flex-col md:flex-row justify-start gap-5  w-full shadow-custom p-5">
            <img src={gambarIbuPosyandu} alt="gambar ibu" className="h-60 rounded-lg" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={calender} alt="logo calender" />
                <p>Senin 12/12/2025 19.60 WIB</p>
              </div>
              <h1 className="text-3xl line-clamp-2 font-medium">Pemantauan Tumbuh Kembang Anak</h1>

              <p className="font-light line-clamp-4 text-sm">
                Proses pemantauan pertumbuhan di Posyandu melibatkan pencatatan data tinggi, berat, dan lingkar kepala anak secara berkala. Ibu atau pengasuh anak dapat memanfaatkan Posyandu sebagai sumber informasi yang handal untuk
                memahami perkembangan anak mereka. Bagian kunci dari panduan ini adalah memberikan pemahaman tentang jenis data yang dikumpulkan, bagaimana data tersebut digunakan, dan bagaimana ibu atau pengasuh anak dapat terlibat secara
                aktif dalam kegiatan Posyandu untuk memastikan pemantauan pertumbuhan anak yang optimal.
              </p>
            </div>
          </Link>
        </li>

        <li>
          <Link className="flex flex-col md:flex-row justify-start gap-5  w-full shadow-custom p-5">
            <img src={heroImg} alt="gambar ibu" className="h-60 rounded-lg" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={logoCalender} alt="" />
                <p>Senin 12/12/2025 19.60 WIB</p>
              </div>
              <h1 className="text-3xl line-clamp-2 font-medium">Pemantauan Tumbuh Kembang Anak</h1>

              <p className="font-light line-clamp-4 text-sm">
                Proses pemantauan pertumbuhan di Posyandu melibatkan pencatatan data tinggi, berat, dan lingkar kepala anak secara berkala. Ibu atau pengasuh anak dapat memanfaatkan Posyandu sebagai sumber informasi yang handal untuk
                memahami perkembangan anak mereka. Bagian kunci dari panduan ini adalah memberikan pemahaman tentang jenis data yang dikumpulkan, bagaimana data tersebut digunakan, dan bagaimana ibu atau pengasuh anak dapat terlibat secara
                aktif dalam kegiatan Posyandu untuk memastikan pemantauan pertumbuhan anak yang optimal.
              </p>
            </div>
          </Link>
        </li>
      </ul>

      <Pagination />

      <FooterLanding />
    </div>
  );
};

export default SemuaBerita;
