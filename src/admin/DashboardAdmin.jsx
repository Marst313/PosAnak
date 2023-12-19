import React, { useEffect, useState } from 'react';
import Calender from '../components/Calender';
import { ScheduleRight } from '../components/';
import { useDispatch, useSelector } from 'react-redux';
import { getDataKeluarga } from '../features/family/family';
import { SingleJadwalKegiatan, TableKeluargaAdmin } from '../components/admin';

const DashboardAdmin = () => {
  const { dataKeluarga, isLoading } = useSelector((store) => store.family);
  const { dataAnak } = useSelector((store) => store.kids);
  const { dataKegiatan } = useSelector((store) => store.activity);
  const [newKegiatan, setNewKegiatan] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [countAnak, setCountAnak] = useState({ balita: 0, bayi: 0 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataKeluarga());

    countBabiesAndToddlers(dataAnak.records);
  }, []);

  const countBabiesAndToddlers = (dataAnak) => {
    const balitaCutoffDate = new Date(); // Set the cutoff date as today
    balitaCutoffDate.setFullYear(balitaCutoffDate.getFullYear() - 3); // Subtract 3 years

    const bayiCutoffDate = new Date(); // Set the cutoff date as today
    bayiCutoffDate.setFullYear(bayiCutoffDate.getFullYear() - 1); // Subtract 1 year

    // Filter balita and bayi based on their birth dates
    const balita = dataAnak?.filter((child) => new Date(child.fields?.tanggalLahir) >= balitaCutoffDate && new Date(child.fields?.tanggalLahir) < bayiCutoffDate);

    const bayi = dataAnak?.filter((child) => new Date(child.fields?.tanggalLahir) >= bayiCutoffDate);

    setCountAnak({ ...countAnak, balita: balita?.length, bayi: bayi?.length });
  };

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
              <h1 className="text-7xl text-white">{dataKeluarga.records.length}</h1>
              <p className="text-white">Keluarga</p>
            </li>
            <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">{countAnak.bayi}</h1>
              <p className="text-white">Bayi</p>
            </li>
            <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">{countAnak.balita}</h1>
              <p className="text-white">Balita</p>
            </li>
          </ul>

          <Calender />
        </div>
        <div className="flex w-full justify-between flex-wrap ">
          <TableKeluargaAdmin style="xl:-mt-24 xl:w-[35rem] 2xl:w-[50rem]" dataKeluarga={dataKeluarga.records} />

          <ScheduleRight />

          <ul className="bg-white p-10 flex flex-col float-left gap-5   rounded-3xl h-fit w-full mt-5  ">
            <h1 className="text-2xl font-bold">Jadwal Kegiatan</h1>

            {dataKegiatan.map((item) => {
              return <SingleJadwalKegiatan key={item.id} item={item} newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardAdmin;
