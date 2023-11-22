import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Calender from '../partials/dashboard/Calender';
import Schedule from '../partials/dashboard/Schedule';
import ScheduleRight from '../partials/dashboard/ScheduleRight';
import Berita from '../partials/dashboard/Berita';

function Dashboard({ setSidebarOpen, sidebarOpen }) {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
    </div>
  );
}

export default Dashboard;
