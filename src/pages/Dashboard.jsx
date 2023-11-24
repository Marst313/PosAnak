import React, { useState } from 'react';

import WelcomeBanner from '../user/dashboard/WelcomeBanner';
import Calender from '../user/dashboard/Calender';
import Schedule from '../user/dashboard/Schedule';
import ScheduleRight from '../user/dashboard/ScheduleRight';
import Berita from '../user/dashboard/Berita';

function Dashboard() {
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
