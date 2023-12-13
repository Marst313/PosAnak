import React, { useEffect, useState } from 'react';

import WelcomeBanner from './WelcomeBanner';
import Calender from './Calender';
import Schedule from './Schedule';
import ScheduleRight from './ScheduleRight';
import Berita from './Berita';

import { useGlobalUser } from '../../contexts/userContext';
import { DashboardAdmin } from '../../admin';
import TableAnak from '../dataanak/TableAnak';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { data } = useGlobalUser();
  const { dataAnak } = useSelector((store) => store.kids);
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (data.role === 'admin') {
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
          <Schedule style="mb-10" dataKegiatan={dataKegiatan} />

          <ScheduleRight />

          <TableAnak dataAnak={dataAnak.records} />
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
