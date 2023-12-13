import React, { useState } from 'react';

import union from '../../images/Union.svg';
import iconExcel from '../../images/iconExcel.svg';
import JadwalKegiatanAdmin from './JadwalKegiatanAdmin';
import TambahKegiatan from './TambahKegiatan';
import { useSelector } from 'react-redux';
import SearchBar from '../../components/admin/SearchBar';

const DataKegiatan = () => {
  const [newKegiatan, setNewKegiatan] = useState(false);
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex  justify-between">
          <SearchBar />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={() => setNewKegiatan(true)}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>

          <button className="flex items-center gap-3 border-lightGreen border px-10 py-2 rounded-full text-lightGreen font-medium">
            <img src={iconExcel} alt="" />
            Excel
          </button>
        </div>

        <JadwalKegiatanAdmin dataKegiatan={dataKegiatan} newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />
      </section>
      <TambahKegiatan newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />
    </>
  );
};

export default DataKegiatan;
