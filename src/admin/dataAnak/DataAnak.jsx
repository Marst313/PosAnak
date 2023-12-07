import React, { useEffect, useState } from 'react';

import union from '../../images/Union.svg';
import iconExcel from '../../images/iconExcel.svg';
import SearchDataAnak from './SearchDataAnak';
import TabelDataAnak from './TabelDataAnak';
import Charts from '../../user/dataanak/Charts';
import TambahDataAnak from './TambahDataAnak';
import { useSelector } from 'react-redux';

const DataAnak = () => {
  const [graphShow, setGraphShow] = useState(false);
  const [tambahDataAnak, setTambahDataAnak] = useState(false);

  const { dataAnak, isLoading } = useSelector((store) => store.kids);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex gap-5 justify-between">
          <SearchDataAnak />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={() => setTambahDataAnak(true)}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>

          <button className="flex items-center gap-3 border-lightGreen border px-10 py-2 rounded-full text-lightGreen font-medium">
            <img src={iconExcel} alt="icon excel" />
            Excel
          </button>
        </div>

        {graphShow && <Charts />}
        <TabelDataAnak dataAnak={dataAnak.records} graphShow={graphShow} setGraphShow={setGraphShow} />
      </section>
      <TambahDataAnak tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} graphShow={graphShow} />
    </>
  );
};

export default DataAnak;
