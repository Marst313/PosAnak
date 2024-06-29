import React from 'react';

import gambarAnak from '../images/hero-berita.png';
import gambarBayi from '../images/vitaminBayi.png';

import { share, shareSosmed, shareFb, calender } from '../images/icons';

import { FooterLanding } from '../components/landing/';
const OpenSingleBerita = () => {
  return (
    <div className="relative  px-4 sm:px-6  flex xl:px-60 mt-5 gap-3 flex-col pb-40 overflow-x-hidden">
      <img src={gambarAnak} alt="" className="h-96" />
      <h1 className="text-4xl font-medium">Pentingnya Pemantauan Pertumbuhan Anak Melalui Posyandu: Panduan untuk Ibu dan Pengasuh</h1>

      <p className="text-sm font-light indent-20">
        Posyandu, atau Pos Pelayanan Terpadu, berperan penting dalam pemantauan dan pemeliharaan kesehatan anak. Salah satu aspek krusial dari peran Posyandu adalah memberikan informasi dan data terkait pertumbuhan anak kepada ibu dan
        pengasuh. Pemantauan pertumbuhan anak menjadi sangat penting karena memberikan indikasi kesehatan secara keseluruhan dan dapat mendeteksi dini potensi masalah kesehatan.
      </p>

      <p className="text-sm font-light indent-20 mb-5">
        Proses pemantauan pertumbuhan di Posyandu melibatkan pencatatan data tinggi, berat, dan lingkar kepala anak secara berkala. Ibu atau pengasuh anak dapat memanfaatkan Posyandu sebagai sumber informasi yang handal untuk memahami
        perkembangan anak mereka. Bagian kunci dari panduan ini adalah memberikan pemahaman tentang jenis data yang dikumpulkan, bagaimana data tersebut digunakan, dan bagaimana ibu atau pengasuh anak dapat terlibat secara aktif dalam
        kegiatan Posyandu untuk memastikan pemantauan pertumbuhan anak yang optimal..
      </p>

      <img src={gambarBayi} alt="memberi vitamin bayi" />

      <p className="text-sm font-light indent-20 mb-5">
        Dalam mendapatkan informasi dan data mengenai pertumbuhan anak, ibu atau pengasuh perlu menyadari pentingnya keterlibatan aktif dalam kegiatan Posyandu. Dengan melibatkan diri secara rutin, ibu dapat memperoleh informasi terkini
        tentang kesehatan dan pertumbuhan anak mereka.
      </p>

      <hr className=" border border-lightGreen" />

      <ul className="flex justify-between">
        <li className="flex gap-3">
          <button>
            <img src={share} alt="" />
          </button>

          <button>
            <img src={shareSosmed} alt="" />
          </button>

          <button>
            <img src={shareFb} alt="" />
          </button>
        </li>

        <li className="flex items-center gap-2">
          <img src={calender} alt="" className="w-4 h-4 " />
          <p className="text-sm">Senin 12/12/2025 19.60 WIB</p>
        </li>
      </ul>

      <FooterLanding />
    </div>
  );
};

export default OpenSingleBerita;
