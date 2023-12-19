import React, { useEffect, useState } from 'react';

import union from '../images/Union.svg';
import iconExcel from '../images/iconExcel.svg';
import Charts from '../components/Charts';
import { useSelector } from 'react-redux';
import { parseStringJson } from '../utils/function';
import { NewDataAnak, SearchBar, TableAnakAdmin } from '../components/admin/';

const DashboardAnak = () => {
  const [tambahDataAnak, setTambahDataAnak] = useState(false);
  const [dataPertumbuhan, setDataPertumbuhan] = useState([]);

  const { dataAnak, isLoading, graphShow, singleDataAnak } = useSelector((store) => store.kids);

  useEffect(() => {
    if (graphShow && singleDataAnak?.fields?.child_growth) {
      const result = parseStringJson(singleDataAnak.fields.child_growth);

      setDataPertumbuhan(result);
    }
  }, [graphShow, singleDataAnak]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex gap-5 justify-between">
          <SearchBar data="anak" />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={() => setTambahDataAnak(true)}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>

          <button className="flex items-center gap-3 border-lightGreen border px-10 py-2 rounded-full text-lightGreen font-medium">
            <img src={iconExcel} alt="icon excel" />
            Excel
          </button>
        </div>

        {graphShow && <Charts dataPertumbuhan={dataPertumbuhan} />}
        <TableAnakAdmin tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} dataAnak={dataAnak.records} graphShow={graphShow} />
      </section>
      <NewDataAnak tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} graphShow={graphShow} dataPertumbuhan={dataPertumbuhan} />
    </>
  );
};

export default DashboardAnak;
