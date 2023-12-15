import React, { useState } from 'react';

import union from '../images/Union.svg';
import iconExcel from '../images/iconExcel.svg';

import { useSelector } from 'react-redux';
import SearchBar from '../components/admin/SearchBar';
import { SingleJadwalKegiatan, ModalTambahKegiatan } from '../components/admin';

const DashboardKegiatan = () => {
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

        <ul className="bg-white p-10 flex flex-col float-left gap-5   rounded-3xl h-fit w-full mt-5  ">
          <h1 className="text-2xl font-bold">Jadwal Kegiatan</h1>

          {dataKegiatan.map((item) => {
            return <SingleJadwalKegiatan key={item.id} item={item} newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />;
          })}
        </ul>
      </section>
      <ModalTambahKegiatan newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />
    </>
  );
};

export default DashboardKegiatan;
