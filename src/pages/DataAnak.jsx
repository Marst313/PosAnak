import React, { useState } from 'react';
import SearchAnak from '../user/dataanak/SearchAnak';
import logoExcel from '../images/dataanak/excel.svg';
import TableAnak from '../user/dataanak/TableAnak';
import Charts from '../user/dataanak/Charts';

const DataAnak = () => {
  const [chart, setChart] = useState(true);
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5 ">
      <div className="flex w-3/4 gap-3">
        <SearchAnak />

        <button className="flex items-center gap-2 border-lightGreen border px-7 py-2 rounded-full">
          <img src={logoExcel} alt="" />
          Excel
        </button>
      </div>

      {chart && <Charts />}

      <TableAnak />
    </section>
  );
};

export default DataAnak;
