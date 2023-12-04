import React from 'react';
import heroSingleBerita from '../../images/hero-berita.png';
import share from '../../images/Share.svg';
import shareSosmed from '../../images/share-sosmed.svg';
import shareFb from '../../images/share-fb.svg';
import calender from '../../images/calender.svg';

const SingleBerita = () => {
  return (
    <section className="relative flex flex-col flex-1 overflow-x-hidden px-4 sm:px-6 lg:px-20 mt-5 overflow-y-hidden items-start">
      <div className=" rounded-[30px]  bg-white w-fit flex flex-col gap-5  p-5 h-fit max-w-4xl">
        <img src={heroSingleBerita} alt="" className="w-full h-2/5" />
        <div>
          <h1 className="text-3xl max-w-3xl font-semibold">Pentingnya Pemantauan Pertumbuhan Anak Melalui Posyandu: Panduan untuk Ibu dan Pengasuh</h1>

          <p className="text-justify font-light indent-24 mt-5 text-sm">
            Posyandu, atau Pos Pelayanan Terpadu, berperan penting dalam pemantauan dan pemeliharaan kesehatan anak. Salah satu aspek krusial dari peran Posyandu adalah memberikan informasi dan data terkait pertumbuhan anak kepada ibu dan
            pengasuh. Pemantauan pertumbuhan anak menjadi sangat penting karena memberikan indikasi kesehatan secara keseluruhan dan dapat mendeteksi dini potensi masalah kesehatan.
          </p>
          <p className="text-justify font-light indent-24 mt-5 text-sm">
            Dalam mendapatkan informasi dan data mengenai pertumbuhan anak, ibu atau pengasuh perlu menyadari pentingnya keterlibatan aktif dalam kegiatan Posyandu. Dengan melibatkan diri secara rutin, ibu dapat memperoleh informasi terkini
            tentang kesehatan dan pertumbuhan anak mereka.
          </p>
        </div>

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
            <p className="text-xs">Senin 12/12/2025 19.60 WIB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SingleBerita;
