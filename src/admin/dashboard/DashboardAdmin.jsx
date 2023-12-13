import React, { useEffect, useState } from 'react';
import Calender from '../../user/dashboard/Calender';
import ScheduleRight from '../../user/dashboard/ScheduleRight';
import TableKeluarga from '../dataKeluarga/TableKeluarga';
import { useDispatch, useSelector } from 'react-redux';
import { getDataKeluarga } from '../../features/family/family';
import JadwalKegiatanAdmin from '../dataKegiatan/JadwalKegiatanAdmin';
import TableKeluargaAdmin from '../../components/admin/TableKeluargaAdmin';

const DashboardAdmin = () => {
  const { dataKeluarga, isLoading } = useSelector((store) => store.family);
  const { dataKegiatan } = useSelector((store) => store.activity);
  const [newKegiatan, setNewKegiatan] = useState(false);
  const [dashboard, setDashboard] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataKeluarga());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden pb-5">
      <div className="px-4 sm:px-6 lg:px-8 mt-5 flex flex-col gap-5">
        <h1 className="text-darkGreen font-semibold text-4xl">Selamat Pagi, Sumarni!</h1>

        <div className="mt-5 flex justify-between  w-full ">
          <ul className="bg-white p-5 flex justify-around h-fit  float-left items-center rounded-lg w-full  gap-5 flex-col lg:flex-row 2xl:w-2/3 ">
            <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">64</h1>
              <p className="text-white">Keluarga</p>
            </li>
            <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">12</h1>
              <p className="text-white">Bayi</p>
            </li>
            <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">15</h1>
              <p className="text-white">Balita</p>
            </li>
          </ul>

          <Calender />
        </div>
        <div className="flex w-full justify-between flex-wrap ">
          <TableKeluargaAdmin style="xl:-mt-24 xl:w-[35rem] 2xl:w-[50rem]" />

          <ScheduleRight />

          <JadwalKegiatanAdmin dataKegiatan={dataKegiatan} newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />
        </div>
      </div>
    </section>
  );
};

export default DashboardAdmin;
