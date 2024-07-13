import React, { useEffect, useState } from "react";
import Calender from "../components/Calender";
import { Loading, ScheduleRight } from "../components/";
import { useDispatch, useSelector } from "react-redux";
import { getDataKeluarga } from "../features/family/family";
import { SingleJadwalKegiatan, TableKeluargaAdmin } from "../components/admin";
import { JadwalKegiatanUser, TableAnakUser } from "../components/user/";

const DashboardAdmin = () => {
  const { dataKeluarga } = useSelector((store) => store.family);
  const { dataAnak, isLoading } = useSelector((store) => store.kids);
  const { dataKegiatan } = useSelector((store) => store.activity);
  const { profile } = useSelector((store) => store.user);
  const [newKegiatan, setNewKegiatan] = useState(false);
  const [countAnak, setCountAnak] = useState({ balita: 0, bayi: 0 });
  const [greeting, setGreeting] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    countBabiesAndToddlers(dataAnak);
  }, []);

  const countBabiesAndToddlers = (dataAnak) => {
    const balitaCutoffDate = new Date(); // Set the cutoff date as today
    balitaCutoffDate.setFullYear(balitaCutoffDate.getFullYear() - 15); // Subtract 5 years

    const bayiCutoffDate = new Date(); // Set the cutoff date as today
    bayiCutoffDate.setFullYear(bayiCutoffDate.getFullYear() - 3); // Subtract 3 year

    // Filter balita and bayi based on their birth dates
    const balita = dataAnak?.filter(
      (child) =>
        new Date(child?.tanggalLahir) >= balitaCutoffDate &&
        new Date(child?.tanggalLahir) < bayiCutoffDate,
    );

    const bayi = dataAnak?.filter(
      (child) => new Date(child?.tanggalLahir) >= bayiCutoffDate,
    );

    setCountAnak({ ...countAnak, balita: balita?.length, bayi: bayi?.length });
  };

  useEffect(() => {
    const getGreeting = () => {
      const currentTime = new Date().getHours();

      if (currentTime >= 5 && currentTime < 9) {
        setGreeting("Selamat Pagi");
      } else if (currentTime >= 10 && currentTime < 14) {
        setGreeting("Selamat Siang");
      } else if (currentTime >= 15 && currentTime < 18) {
        setGreeting("Selamat Sore");
      } else {
        setGreeting("Selamat Malam");
      }
    };

    getGreeting();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex w-screen flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <main>
        <div className="max-w-9xl relative mx-auto mt-5 flex w-full flex-col gap-5 px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-darkGreen mt-2 text-3xl font-semibold lg:mt-0">
            {greeting}, {profile.name}!
          </h1>

          <div className="mt-5 flex w-full flex-col justify-between lg:flex-row">
            <ul className="float-left flex w-full flex-col items-center justify-around gap-5 rounded-3xl bg-white p-5 shadow-xl lg:flex-row 2xl:w-2/3">
              {/* <li className="bg-lightGreen flex h-36 w-52 flex-col items-center justify-center rounded-lg">
                <h1 className="text-7xl text-white">{dataKeluarga?.length}</h1>
                <p className="text-white">Keluarga</p>
              </li> */}
              <li className="bg-lightGreen flex h-36 w-52 flex-col items-center justify-center rounded-lg">
                <h1 className="text-7xl text-white">{countAnak.bayi}</h1>
                <p className="text-white">Batita</p>
              </li>
              <li className="bg-lightGreen flex h-36 w-52 flex-col items-center justify-center rounded-lg">
                <h1 className="text-7xl text-white">{countAnak.balita}</h1>
                <p className="text-white">Balita</p>
              </li>
            </ul>

            <div className="mt-10 lg:mt-0">
              <h1 className="mb-2 flex justify-center text-3xl font-bold lg:hidden">
                Kalender
              </h1>
              <Calender />
            </div>

            <div className="mt-10 lg:hidden">
              <h1 className="mb-2 flex justify-center text-3xl font-bold lg:hidden">
                Jadwal Kegiatan
              </h1>
              <ScheduleRight />
            </div>
          </div>
        </div>

        <div className="max-w-9xl relative mx-auto hidden w-full px-6 lg:block lg:px-8">
          <JadwalKegiatanUser style="mb-10" dataKegiatan={dataKegiatan} />
          <ScheduleRight style="float-right" />
          <TableAnakUser dataAnak={dataAnak} className="hidden" />
        </div>
      </main>
    </section>
  );
};

export default DashboardAdmin;
