import { Link } from 'react-router-dom';
import React from 'react';

import SearchBerita from './SearchBerita';
import union from '../../images/Union.svg';
import heroImg from '../../images/dashboard/image5.png';
import iconWaktu from '../../images/clock.svg';
import iconDelete from '../../images/deleteIcon.svg';
import iconEdit from '../../images/iconEdit.svg';

const DataBerita = () => {
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
      <div className="flex gap-5 justify-between">
        <SearchBerita />

        <button className=" bg-lightGreen flex items-center px-5 gap-2 text-white rounded-full">
          <img src={union} alt="icon tambah" className="w-5 h-5" />
          Tambah Berita
        </button>
      </div>

      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <li className=" p-3 rounded-2xl border-grey border">
          <Link className="bg-white relative" to={`/dashboard/berita/1`}>
            <img src={heroImg} alt="hero img" className="rounded-t-lg" />

            <div className="p-5 ">
              <h3 className="font-semibold">Timbang Bayi dan Imunisasi Campak</h3>
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <img src={iconWaktu} alt="" />
                  <p className="text-xs">2 jam lalu</p>
                </div>
                <button type="button">
                  <img src={iconDelete} alt="icon delete" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <img src={iconEdit} alt="icon edit" className="absolute top-0 right-0 mr-2 mt-2" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default DataBerita;
