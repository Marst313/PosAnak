import React, { useEffect, useState } from 'react';

import { union } from '../images/icons/';
import Charts from '../components/Charts';
import { useDispatch, useSelector } from 'react-redux';
import { parseStringJson } from '../utils/function';
import { NewDataAnak, SearchBar, TableAnakAdmin } from '../components/admin/';
import { Loading } from '../components';
import PopUp from '../components/PopUp';
import { setDataPertumbuhan, setNewAnak, setTambahDataAnak } from '../features/kids/kids';

const DashboardAnak = () => {
  const dispatch = useDispatch();

  const { isLoading, graphShow, singleDataAnak, edit, message, dataPertumbuhan } = useSelector((store) => store.kids);

  // ! Open Modal Tambah Data Anak or Edit
  const handleOpenModal = () => {
    dispatch(setTambahDataAnak(true));
    if (!edit) {
      dispatch(setNewAnak({ nama: '', nik: '', namaIbu: '', tanggalLahir: '' }));
    }
  };

  useEffect(() => {
    dispatch(setTambahDataAnak(false));
  });

  useEffect(() => {
    if (graphShow && singleDataAnak?.child_growth) {
      const result = parseStringJson(singleDataAnak.child_growth);

      dispatch(setDataPertumbuhan(result));
    }
  }, [graphShow, singleDataAnak]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-t lg:mt-5 from-[#57C9A7] to-white bg-cover lg:bg-none">
        <div className="flex justify-center gap-4 mt-16 lg:mt-0 lg:justify-between">
          <SearchBar data="anak" />
          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={handleOpenModal}>
            <img src={union} alt="logo tambah" className="w-5 h-5" />
            Tambah
          </button>
        </div>

        {graphShow && <Charts dataPertumbuhan={dataPertumbuhan} />}

        <PopUp open={message.open} message={message.text} type={message.status} />

        <TableAnakAdmin />
      </section>

      <NewDataAnak graphShow={graphShow} />
    </>
  );
};

export default DashboardAnak;
