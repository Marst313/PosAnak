import React from "react";
import { useSelector } from "react-redux";

import { DashboardAdmin } from "../adminPages";
import {
  WelcomeBanner,
  JadwalKegiatanUser,
  TableAnakUser,
} from "../components/user/";
import { Calender, Loading, ScheduleRight } from "../components/";
import logo from "../images/logo-posyandu.webp";

const DashboardUser = () => {
  const { role, name, email } = useSelector((store) => store.user);
  const { dataAnak } = useSelector((store) => store.kids);
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);
  if (isLoading) {
    return <Loading />;
  }

  if (role === "admin") {
    return <DashboardAdmin />;
  }

  return (
    <section className="relative flex w-screen flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <main>
        <div className="max-w-9xl relative mx-auto flex w-full flex-col justify-between px-4 py-8 lg:flex-row lg:px-8">
          <div className="mb-5 flex items-center justify-center lg:hidden">
            <img src={logo} alt="logo poysandu" width="50px" />
            <h1 className="mx-3 text-3xl">
              <span className="text-lightGreen">Pos</span>anak
            </h1>
          </div>

          {/* Welcome banner */}
          <WelcomeBanner />

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

        <div className="max-w-9xl relative mx-auto hidden w-full px-6 lg:block lg:px-8">
          <JadwalKegiatanUser style="mb-10" dataKegiatan={dataKegiatan} />
          <ScheduleRight style="float-right" />
        </div>
      </main>
    </section>
  );
};

export default DashboardUser;
