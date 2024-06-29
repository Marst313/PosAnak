import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { parseStringJson } from '../utils/function';
import { SearchBarUser, TableAnakUser } from '../components/user';
import Loading from '../components/Loading';
import { editAnak } from '../images/icons/';
import gambarAnak from '../images/dashboard/gambarAnak.png';
import ruller from '../images/dashboard/ruller.png';
import arrow from '../images/dashboard/arrow.png';
import timbangan from '../images/dashboard/scales.png';
import Charts from '../components/Charts';

const DashboardAnak = () => {
  const { dataAnak, isLoading, graphShow, singleDataAnak } = useSelector((store) => store.kids);
  const [dataPertumbuhan, setDataPertumbuhan] = useState([]);

  useEffect(() => {
    if (graphShow && singleDataAnak?.child_growth) {
      const result = parseStringJson(singleDataAnak.child_growth);

      setDataPertumbuhan(result);
    }
  }, [graphShow, singleDataAnak]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none px-4 sm:px-6 lg:px-8 ">
      <div className="flex w-full h-fit gap-3 mt-16 lg:mt-4">
        <SearchBarUser data="anak" />

        <button className="flex items-center gap-2 border-lightGreen bg-stabiloGreen p-2  rounded-lg  justify-center  h-fit text-darkGreen font-semibold">
          <img src={editAnak} alt="icon edit" />
        </button>

        <button className="flex items-center gap-2 border-lightGreen bg-coldGreen px-10 lg:px-8 py-2 rounded-lg h-10 w-60 justify-center text-darkGreen font-semibold hover:bg-lightGreen duration-500 group overflow-hidden flex-col">
          <p className="-translate-y-[120%] transition-all duration-500  group-hover:translate-y-4 group-hover:flex">Cek Stunting </p>
          <p className="-translate-y-4 group-hover:translate-y-[120%] transition-all duration-500 ">Cek Stunting </p>
        </button>
      </div>

      <div className="mb-5 flex justify-between w-full gap-5">
        <div className="bg-white rounded-xl flex p-10 items-start  gap-5 text-darkGreen w-2/3">
          <img src={gambarAnak} alt="gambar anak" className=" w-72 " />

          <ul className="flex flex-col gap-10 justify-start mt-5">
            <li>
              <h5>NIK</h5>
              <p className="font-medium text-3xl mt-3">6132234565432345</p>
            </li>

            <li>
              <h5>NAMA</h5>
              <p className="font-medium text-3xl mt-3">Abyan Adelio Adnan</p>
            </li>

            <li>
              <h5>Umur</h5>
              <p className="font-medium text-3xl mt-3">4 Bulan</p>
            </li>
          </ul>
        </div>

        <ul className="flex flex-col w-1/2 h-full justify-between gap-3">
          {/* Tinggi */}
          <li className="bg-white h-1/3 p-5 rounded-lg flex items-center gap-20">
            <div className="flex">
              <img src={ruller} alt="gambar penggaris" />
              <img src={arrow} alt="gambar panah" />
            </div>

            <div className="flex flex-col relative ">
              <h5>Tinggi</h5>
              <h1 className="text-5xl font-semibold ordinal">
                24 <span className="font-medium text-sm  top-7 absolute">Cm</span>
              </h1>
            </div>
          </li>

          {/* Berat */}
          <li className="bg-white h-1/3 p-5 rounded-lg flex items-center gap-20">
            <div className="flex">
              <img src={timbangan} alt="gambar timbangan" />
            </div>

            <div className="flex flex-col relative ">
              <h5>Berat</h5>
              <h1 className="text-5xl font-semibold">
                4 <span className="font-medium text-sm  top-7 absolute">Kg</span>
              </h1>
            </div>
          </li>

          {/* Tanggal Lahir */}
          <li className="bg-white h-1/3 p-5 rounded-lg flex items-center gap-20">
            <div className="flex flex-col bg-gradient-to-l from-stabiloGreen to-stabiloLightGreen w-28 h-28 rounded-lg items-center justify-center gap-3 relative">
              <h1 className="font-bold text-4xl mr-7">
                23 <span className="text-lg absolute ml-2">rd</span>
              </h1>

              <h5 className="font-semibold text-lg">January</h5>
            </div>

            <div className="flex flex-col relative  ">
              <h1 className="text-5xl font-semibold">Tanggal </h1>
              <h1 className="text-5xl font-semibold">Lahir </h1>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-5 flex w-full">
        <Charts />
      </div>
    </section>
  );
};

export default DashboardAnak;
