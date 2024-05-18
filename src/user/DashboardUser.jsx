import React from 'react';
import { useSelector } from 'react-redux';

import { DashboardAdmin } from '../admin';
import { WelcomeBanner, JadwalKegiatanUser, TableAnakUser } from '../components/user/';
import { Calender, ScheduleRight } from '../components/';

const DashboardUser = () => {
  const { role, name, email } = useSelector((store) => store.user);
  const { dataAnak } = useSelector((store) => store.kids);
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (role === 'admin') {
    return <DashboardAdmin />;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto relative flex flex-col lg:flex-row justify-between">
          {/* Welcome banner */}
          <WelcomeBanner />

          <Calender />
        </div>

        <div className="px-4 sm:px-6 lg:px-8  w-full max-w-9xl mx-auto relative flex  flex-col lg:block ">
          <JadwalKegiatanUser style="mb-10" dataKegiatan={dataKegiatan} />

          <ScheduleRight />

          <TableAnakUser dataAnak={dataAnak.records} />
        </div>
      </main>
    </section>
  );
};

export default DashboardUser;
