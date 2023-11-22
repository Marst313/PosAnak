import React from 'react';
import { Link } from 'react-router-dom';
import BeritaImg from '../../images/dashboard/image5.png';

const Berita = () => {
  return (
    <div className=" p-5 flex flex-col float-left gap-5  2xl:w-2/3 rounded-3xl h-fit bg-white  mt-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-darkGreen">Berita</h3>
        <Link className="font-light text-darkGreen text-xl hover:text-opacity-80">Selengkapnya {`>>`} </Link>
      </div>

      <ul className="flex  flex-wrap justify-between gap-5">
        <li className="bg-white w-[30%] border-grey rounded-lg p-2 border max-w-xs">
          <div className="flex flex-col gap-2 ">
            <img src={BeritaImg} alt="gambar berita" className="rounded-md" />
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
                <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
              </svg>

              <p className="text-xs font-light">2 jam lalu</p>
            </div>

            <h3 className="text-sm font-semibold">Timbang Bayi dan Imunisasi...</h3>

            <p className="text-xs mb-5">Kegiatan timbang berat badan bayi secara rutin...</p>
          </div>
        </li>

        <li className="bg-white  w-[30%] border-grey rounded-lg p-2 border max-w-xs">
          <div className="flex flex-col gap-2 ">
            <img src={BeritaImg} alt="gambar berita" className="rounded-md" />
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
                <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
              </svg>

              <p className="text-xs font-light">2 jam lalu</p>
            </div>

            <h3 className="text-sm font-semibold">Timbang Bayi dan Imunisasi...</h3>

            <p className="text-xs mb-5">Kegiatan timbang berat badan bayi secara rutin...</p>
          </div>
        </li>

        <li className="bg-white w-[30%]  border-grey rounded-lg p-2 border max-w-xs">
          <div className="flex flex-col gap-2 ">
            <img src={BeritaImg} alt="gambar berita" className="rounded-md" />
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
                <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
              </svg>

              <p className="text-xs font-light">2 jam lalu</p>
            </div>

            <h3 className="text-sm font-semibold">Timbang Bayi dan Imunisasi...</h3>

            <p className="text-xs mb-5">Kegiatan timbang berat badan bayi secara rutin...</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Berita;
