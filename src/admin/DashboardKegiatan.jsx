import React, { useEffect } from 'react';

import { union } from '../images/icons/';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/admin/SearchBar';
import { SingleJadwalKegiatan, ModalTambahKegiatan } from '../components/admin';
import { Loading } from '../components';
import { setData, setOpenModal } from '../features/activity/activity';

const DashboardKegiatan = () => {
  const dispatch = useDispatch();
  const { dataKegiatan, isLoading, searchKegiatan, data } = useSelector((store) => store.activity);

  const handleOpenModal = () => {
    dispatch(setOpenModal(true));
  };

  useEffect(() => {
    const searchDataKegiatan = dataKegiatan.filter((item) => item.title.toLowerCase().includes(searchKegiatan));

    dispatch(setData(searchDataKegiatan));
  }, [searchKegiatan]);

  useEffect(() => {
    dispatch(setData(dataKegiatan));
  }, [dataKegiatan]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 lg:mt-5 bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
        <div className="flex justify-between gap-4 mt-16 lg:mt-0 lg:justify-between">
          <SearchBar data="kegiatan" />

          <button className=" bg-lightGreen flex items-center px-10 gap-2 text-white rounded-full whitespace-nowrap" onClick={handleOpenModal}>
            <img src={union} alt="" className="w-5 h-5" />
            Tambah
          </button>
        </div>

        {data.length <= 0 ? (
          <h1>Tidak ada kegiatan dengan judul {searchKegiatan}</h1>
        ) : (
          <ul className="p-10 flex flex-col float-left gap-5  rounded-3xl h-fit w-full mt-5  bg-white">
            <h1 className="text-2xl font-bold">Jadwal Kegiatan</h1>

            {data.map((item) => {
              return <SingleJadwalKegiatan key={item._id} item={item} />;
            })}
          </ul>
        )}
      </section>
      <ModalTambahKegiatan />
    </>
  );
};

export default DashboardKegiatan;
