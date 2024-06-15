import React, { useEffect, useState } from 'react';
import { calender } from '../images/icons/';
import { useDispatch, useSelector } from 'react-redux';

import { getDataKegiatan } from '../features/activity/activity';
import { FilterKegiatan, FooterLanding } from '../components/landing';
import { converDateId, convertTime, filteringData } from '../utils/function';
import { Loading } from '../components';

const Activities = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { dataKegiatan, isLoading, filterWaktu, filterNamaKegiatan, filterKategori } = useSelector((store) => store.activity);

  useEffect(() => {
    if ((filterWaktu === '') & (filterNamaKegiatan === '') & (filterKategori === '')) {
      setData(dataKegiatan);
    }

    //! Filtering data
    const filteredData = filteringData(dataKegiatan, filterNamaKegiatan, filterKategori, filterWaktu);

    setData(filteredData);
  }, [filterWaktu, filterNamaKegiatan, filterKategori]);

  // ! Initialize data kegiatan
  useEffect(() => {
    if (!dataKegiatan.length) {
      dispatch(getDataKegiatan());
    } else {
      setData(dataKegiatan);
    }
  }, [dataKegiatan]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative px-4 sm:px-6 flex xl:px-60 mt-10 gap-5 flex-col lg:flex-row pb-40 overflow-x-hidden">
      <FilterKegiatan />

      <ul className="w-full flex flex-col gap-5">
        {data.map((kegiatan) => {
          const { date, description, title, waktuMulai } = kegiatan;

          return (
            <li key={kegiatan._id} className="p-5 bg-white w-full rounded-lg shadow-custom">
              <h5 className="font-semibold">{title}</h5>
              <p className="text-sm font-light mt-2">{description}</p>

              <div className="mt-2 flex gap-3 text-xs items-center font-light">
                <img src={calender} alt="logo calender" />
                <p>
                  {converDateId(date)} {waktuMulai} WIB
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
