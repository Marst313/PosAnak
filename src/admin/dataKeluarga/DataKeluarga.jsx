import React, { useState } from 'react';

import union from '../../images/Union.svg';
import iconExcel from '../../images/iconExcel.svg';
import TableKeluarga from './TableKeluarga';
import TambahKeluarga from './TambahKeluarga';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/admin/SearchBar';

const DataKeluarga = () => {
  const [tambahKeluarga, setTambahKeluarga] = useState(false);
  const { dataKeluarga, isLoading } = useSelector((store) => store.family);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex  justify-between">
          <SearchBar />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={() => setTambahKeluarga(true)}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>

          <button className="flex items-center gap-3 border-lightGreen border px-10 py-2 rounded-full text-lightGreen font-medium">
            <img src={iconExcel} alt="" />
            Excel
          </button>
        </div>
        <TableKeluarga dataKeluarga={dataKeluarga.records} />
      </section>
      <TambahKeluarga tambahKeluarga={tambahKeluarga} setTambahKeluarga={setTambahKeluarga} />
    </>
  );
};

export default DataKeluarga;
