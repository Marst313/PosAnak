import React, { useEffect, useState } from 'react';
import logoCalender from '../images/calender.svg';
import { useDispatch, useSelector } from 'react-redux';

import { getDataKegiatan } from '../features/activity/activity';
import FilterKegiatan from './FilterKegiatan';
import FooterLanding from './FooterLanding';
import { converDateId, convertTime } from '../utils/function';

const Activities = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { dataKegiatan, isLoading, filterWaktu, filterNamaKegiatan, filterKategori } = useSelector((store) => store.activity);

  useEffect(() => {
    if ((filterWaktu === '') & (filterNamaKegiatan === '') & (filterKategori === '')) {
      setData(dataKegiatan);
    }

    const filteredData = dataKegiatan
      .filter((item) => item.fields.title.toLowerCase().includes(filterNamaKegiatan))
      .filter((item) => item.fields.description.toLowerCase().includes(filterKategori))
      .filter((item) => item.fields.date.toLowerCase().includes(filterWaktu));

    setData(filteredData);
  }, [filterWaktu, filterNamaKegiatan, filterKategori]);

  // ! Initialize data kegiatan
  useEffect(() => {
    setData(dataKegiatan);
  }, [dataKegiatan]);

  useEffect(() => {
    if (dataKegiatan.length === 0) {
      dispatch(getDataKegiatan());
    }
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative  px-4 sm:px-6 flex xl:px-60 mt-10 gap-5 flex-col lg:flex-row pb-40 overflow-x-hidden">
      <FilterKegiatan />

      <ul className="w-full flex flex-col gap-5">
        {data.map((kegiatan) => {
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
