import React from 'react';
import logoCalender from '../images/calender.svg';

import FilterKegiatan from './FilterKegiatan';
import FooterLanding from './FooterLanding';

const Activities = () => {
  return (
    <div className="relative  px-4 sm:px-6 flex xl:px-60 mt-10 gap-5 flex-col lg:flex-row pb-40 overflow-x-hidden">
      <FilterKegiatan />

      <ul className="w-full flex flex-col gap-5">
        <li className="p-5 bg-white w-full rounded-lg shadow-custom">
          <h5 className="font-semibold">Timbang Bayi dan Imunisasi Campak</h5>
          <p className="text-sm font-light mt-2">Kegiatan timbang berat badan bayi secara rutin dan ditambah dengan kegiatan suntik imunisasi campak</p>

          <div className="mt-2 flex gap-3 text-xs items-center font-light">
            <img src={logoCalender} alt="logo calender" />
            <p>Senin 12/12/2025 19.60 WIB</p>
          </div>
        </li>

        <li className="p-5 bg-white w-full rounded-lg shadow-custom">
          <h5 className="font-semibold">Timbang Bayi dan Imunisasi Campak</h5>
          <p className="text-sm font-light mt-2">Kegiatan timbang berat badan bayi secara rutin dan ditambah dengan kegiatan suntik imunisasi campak</p>

          <div className="mt-2 flex gap-3 text-xs items-center font-light">
            <img src={logoCalender} alt="logo calender" />
            <p>Senin 12/12/2025 19.60 WIB</p>
          </div>
        </li>
        <li className="p-5 bg-white w-full rounded-lg shadow-custom">
          <h5 className="font-semibold">Timbang Bayi dan Imunisasi Campak</h5>
          <p className="text-sm font-light mt-2">Kegiatan timbang berat badan bayi secara rutin dan ditambah dengan kegiatan suntik imunisasi campak</p>

          <div className="mt-2 flex gap-3 text-xs items-center font-light">
            <img src={logoCalender} alt="logo calender" />
            <p>Senin 12/12/2025 19.60 WIB</p>
          </div>
        </li>

        <li className="p-5 bg-white w-full rounded-lg shadow-custom">
          <h5 className="font-semibold">Timbang Bayi dan Imunisasi Campak</h5>
          <p className="text-sm font-light mt-2">Kegiatan timbang berat badan bayi secara rutin dan ditambah dengan kegiatan suntik imunisasi campak</p>

          <div className="mt-2 flex gap-3 text-xs items-center font-light">
            <img src={logoCalender} alt="logo calender" />
            <p>Senin 12/12/2025 19.60 WIB</p>
          </div>
        </li>
      </ul>

      <FooterLanding />
    </div>
  );
};

export default Activities;
