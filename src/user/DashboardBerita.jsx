import React from 'react';
import { Link } from 'react-router-dom';

import heroImg from '../images/dashboard/image5.png';
import iconWaktu from '../images/clock.svg';
import { SearchBarUser } from '../components/user/';

const DashboardBerita = () => {
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mt-5 ">
        <SearchBarUser />

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <li className=" p-3 rounded-2xl border-grey border">
            <Link className="bg-white" to={`/dashboard/berita/1`}>
              <img src={heroImg} alt="hero img" />

              <div className="p-5">
                <h3 className="font-semibold">Timbang Bayi dan Imunisasi Campak</h3>
                <div className="flex items-center gap-2 mt-2">
                  <img src={iconWaktu} alt="" />
                  <p className="text-xs">2 jam lalu</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DashboardBerita;
