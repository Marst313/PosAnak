import React from "react";
import { useSelector } from "react-redux";

import { DashboardAdmin } from "../admin";
import {
  WelcomeBanner,
  JadwalKegiatanUser,
  TableAnakUser,
} from "../components/user/";
import { Calender, Loading, ScheduleRight } from "../components/";
import logo from "../images/logo-posyandu.png";

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
    <section className="relative w-screen flex flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <main>
        <div className="px-4 lg:px-8 py-8 w-full max-w-9xl mx-auto relative flex flex-col lg:flex-row justify-between">
          <div className="lg:hidden items-center flex justify-center mb-5">
            <img src={logo} alt="logo poysandu" width="50px" />
            <h1 className="text-3xl mx-3">
              <span className="text-lightGreen">Pos</span>anak
            </h1>
          </div>

          {/* Welcome banner */}
          <WelcomeBanner />

          <div className="mt-10 lg:mt-0">
            <h1 className="font-bold text-3xl flex justify-center lg:hidden mb-2">
              Kalender
            </h1>
            <Calender />
          </div>

          <div className="mt-10 lg:hidden">
            <h1 className="font-bold text-3xl flex justify-center lg:hidden mb-2">
              Jadwal Kegiatan
            </h1>
            <ScheduleRight />
          </div>
        </div>

        <div className="hidden px-6 lg:px-8 w-full max-w-9xl mx-auto relative lg:block">
          <JadwalKegiatanUser style="mb-10" dataKegiatan={dataKegiatan} />
          <ScheduleRight style="float-right" />
          <TableAnakUser dataAnak={dataAnak.records}  className="hidden"/>
        </div>
      </main>
    </section>
  );
};

export default DashboardUser;
