import React from 'react';
import logoCalender from '../images/calender.svg';

import FilterKegiatan from './FilterKegiatan';
import FooterLanding from './FooterLanding';
import { useSelector } from 'react-redux';
import { converDateId, convertTime } from '../utils/function';

const Activities = () => {
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative  px-4 sm:px-6 flex xl:px-60 mt-10 gap-5 flex-col lg:flex-row pb-40 overflow-x-hidden">
      <FilterKegiatan />

      <ul className="w-full flex flex-col gap-5">
        {dataKegiatan.map((kegiatan) => {
          console.log(kegiatan);
          const { date, description, title, waktuMulai, waktuSelesai } = kegiatan.fields;

          return (
            <li key={kegiatan.id} className="p-5 bg-white w-full rounded-lg shadow-custom">
              <h5 className="font-semibold">{title}</h5>
              <p className="text-sm font-light mt-2">{description}</p>

              <div className="mt-2 flex gap-3 text-xs items-center font-light">
                <img src={logoCalender} alt="logo calender" />
                <p>
                  {converDateId(date)} {convertTime(waktuMulai)} WIB
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <FooterLanding />
    </div>
  );
};

export default Activities;
