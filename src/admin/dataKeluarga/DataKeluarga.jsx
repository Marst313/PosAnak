import React, { useState } from 'react';
import SearchKeluarga from './SearchDataKeluarga';

import union from '../../images/Union.svg';
import iconExcel from '../../images/iconExcel.svg';
import TableKeluarga from './TableKeluarga';
import TambahKeluarga from './TambahKeluarga';

const DataKeluarga = () => {
  const [tambahKeluarga, setTambahKeluarga] = useState(false);

  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex  justify-between">
          <SearchKeluarga />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={() => setTambahKeluarga(true)}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>

          <button className="flex items-center gap-3 border-lightGreen border px-10 py-2 rounded-full text-lightGreen font-medium">
            <img src={iconExcel} alt="" />
            Excel
          </button>
        </div>
        <TableKeluarga />
      </section>
      <TambahKeluarga tambahKeluarga={tambahKeluarga} setTambahKeluarga={setTambahKeluarga} />
    </>
  );
};

export default DataKeluarga;
