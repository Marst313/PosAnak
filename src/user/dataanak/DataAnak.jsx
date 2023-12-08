import React, { useState } from 'react';
import SearchAnak from './SearchAnak';
import logoExcel from '../../images/dataanak/excel.svg';
import TableAnak from './TableAnak';
import Charts from '../../components/Charts';

const DataAnak = () => {
  const [showGraph, setShowGraph] = useState(false);
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5 ">
      <div className="flex w-3/4 gap-3">
        <SearchAnak />

        <button className="flex items-center gap-2 border-lightGreen border px-7 py-2 rounded-full">
          <img src={logoExcel} alt="" />
          Excel
        </button>
      </div>

      {showGraph && <Charts />}

      <TableAnak showGraph={showGraph} setShowGraph={setShowGraph} />
    </section>
  );
};

export default DataAnak;
