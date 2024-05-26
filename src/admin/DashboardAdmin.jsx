import React, { useEffect, useState } from 'react';
import Calender from '../components/Calender';
import { Loading, ScheduleRight } from '../components/';
import { useDispatch, useSelector } from 'react-redux';
import { getDataKeluarga } from '../features/family/family';
import { SingleJadwalKegiatan, TableKeluargaAdmin } from '../components/admin';
import { JadwalKegiatanUser, TableAnakUser } from '../components/user/';

const DashboardAdmin = () => {
  const { dataKeluarga } = useSelector((store) => store.family);
  const { dataAnak, isLoading } = useSelector((store) => store.kids);
  const { dataKegiatan } = useSelector((store) => store.activity);
  const { email } = useSelector((store) => store.user);
  const [newKegiatan, setNewKegiatan] = useState(false);
  const [countAnak, setCountAnak] = useState({ balita: 0, bayi: 0 });
  const [greeting, setGreeting] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    countBabiesAndToddlers(dataAnak.records);
  }, []);

  const countBabiesAndToddlers = (dataAnak) => {
    const balitaCutoffDate = new Date(); // Set the cutoff date as today
    balitaCutoffDate.setFullYear(balitaCutoffDate.getFullYear() - 15); // Subtract 5 years

    const bayiCutoffDate = new Date(); // Set the cutoff date as today
    bayiCutoffDate.setFullYear(bayiCutoffDate.getFullYear() - 3); // Subtract 3 year

    // Filter balita and bayi based on their birth dates
    const balita = dataAnak?.filter((child) => new Date(child.fields?.tanggalLahir) >= balitaCutoffDate && new Date(child.fields?.tanggalLahir) < bayiCutoffDate);

    const bayi = dataAnak?.filter((child) => new Date(child.fields?.tanggalLahir) >= bayiCutoffDate);

    setCountAnak({ ...countAnak, balita: balita?.length, bayi: bayi?.length });
  };

  useEffect(() => {
    const getGreeting = () => {
      const currentTime = new Date().getHours();

      if (currentTime >= 5 && currentTime < 9) {
        setGreeting('Selamat Pagi');
      } else if (currentTime >= 10 && currentTime < 14) {
        setGreeting('Selamat Siang');
      } else if (currentTime >= 15 && currentTime < 18) {
        setGreeting('Selamat Sore');
      } else {
        setGreeting('Selamat Malam');
      }
    };

    getGreeting();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative w-screen flex flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <main>
        <div className="px-4 py-8 sm:px-6 lg:px-8 mt-5 flex flex-col gap-5 w-full max-w-9xl mx-auto relative ">
          <h1 className="text-darkGreen font-semibold text-3xl mt-2 lg:mt-0">
            {greeting}, {email.split('@gmail.com')[0]}!
          </h1>

          <div className="mt-5 flex flex-col lg:flex-row justify-between w-full">
            <ul className="bg-white p-5 justify-around shadow-xl float-left items-center rounded-3xl w-full gap-5 flex flex-col lg:flex-row 2xl:w-2/3 ">
              <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
                <h1 className="text-7xl text-white">{dataKeluarga?.records.length}</h1>
                <p className="text-white">Keluarga</p>
              </li>
              <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
                <h1 className="text-7xl text-white">{countAnak.bayi}</h1>
                <p className="text-white">Batita</p>
              </li>
              <li className=" rounded-lg bg-lightGreen flex flex-col items-center w-52 h-36 justify-center ">
                <h1 className="text-7xl text-white">{countAnak.balita}</h1>
                <p className="text-white">Balita</p>
              </li>
            </ul>

            <div className="mt-10 lg:mt-0">
              <h1 className="font-bold text-3xl flex justify-center lg:hidden mb-2">Kalender</h1>
              <Calender />
            </div>

            <div className="mt-10 lg:hidden">
              <h1 className="font-bold text-3xl flex justify-center lg:hidden mb-2">Jadwal Kegiatan</h1>
              <ScheduleRight />
            </div>
          </div>
        </div>

        <div className="hidden px-6 lg:px-8 w-full max-w-9xl mx-auto relative lg:block">
          <JadwalKegiatanUser style="mb-10" dataKegiatan={dataKegiatan} />
          <ScheduleRight style="float-right" />
          <TableAnakUser dataAnak={dataAnak.records} className="hidden" />
        </div>
      </main>
    </section>
  );
};

export default DashboardAdmin;
