import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { union } from '../images/icons/';

import { ModalTambahKeluarga, SearchBar, TableKeluargaAdmin } from '../components/admin/';
import { Loading } from '../components';

const DashboardKeluarga = () => {
  const [tambahKeluarga, setTambahKeluarga] = useState(false);
  const { dataKeluarga, isLoading } = useSelector((store) => store.family);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 lg:mt-5 sm:px-6 lg:px-8 bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
        <div className="flex mt-16 lg:mt-0 gap-4  justify-between">
          <SearchBar data="keluarga" />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={() => setTambahKeluarga(true)}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>

          {/* <button className="flex items-center gap-3 border-lightGreen border px-10 py-2 rounded-full text-lightGreen font-medium">
            <img src={iconExcel} alt="" />
            Excel
          </button> */}
        </div>
        <TableKeluargaAdmin dataKeluarga={dataKeluarga.records} setTambahKeluarga={setTambahKeluarga} />
      </section>
      <ModalTambahKeluarga tambahKeluarga={tambahKeluarga} setTambahKeluarga={setTambahKeluarga} />
    </>
  );
};

export default DashboardKeluarga;
