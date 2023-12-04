import React, { useState } from 'react';

import WelcomeBanner from './WelcomeBanner';
import Calender from './Calender';
import Schedule from './Schedule';
import ScheduleRight from './ScheduleRight';
import Berita from './Berita';

import { useGlobalUser } from '../../contexts/userContext';
import { DashboardAdmin } from '../../admin';

function Dashboard() {
  const { data } = useGlobalUser();

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

        <div className="px-4 sm:px-6 lg:px-8  w-full max-w-9xl mx-auto relative ">
          <Schedule />

          <ScheduleRight />

          <Berita />
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
