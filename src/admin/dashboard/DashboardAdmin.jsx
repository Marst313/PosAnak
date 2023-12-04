import React from 'react';
import Calender from '../../user/dashboard/Calender';
import Schedule from '../../user/dashboard/Schedule';
import ScheduleRight from '../../user/dashboard/ScheduleRight';
import TableAnak from '../../user/dataanak/TableAnak';

const DashboardAdmin = () => {
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden pb-5">
      <div className="px-4 sm:px-6 lg:px-8 mt-5 flex flex-col gap-5">
        <h1 className="text-darkGreen font-semibold text-4xl">Selamat Pagi, Sumarni!</h1>

        <div className="mt-5 flex justify-between  w-full ">
          <ul className="bg-white p-5 flex justify-around h-fit  float-left items-center rounded-lg w-full  gap-5 flex-col lg:flex-row 2xl:w-2/3 ">
            <li className="linear-gradient_admin rounded-lg bg-greenPrimary flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">64</h1>
              <p className="text-white">Keluarga</p>
            </li>
            <li className="linear-gradient_admin rounded-lg bg-greenPrimary flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">12</h1>
              <p className="text-white">Bayi</p>
            </li>
            <li className="linear-gradient_admin rounded-lg bg-greenPrimary flex flex-col items-center w-52 h-36 justify-center ">
              <h1 className="text-7xl text-white">15</h1>
              <p className="text-white">Balita</p>
            </li>
          </ul>

          <Calender />
        </div>
        <div className="flex w-full justify-between flex-wrap ">
          <Schedule style="xl:-mt-24" />

          <ScheduleRight />

          <TableAnak style="xl:-mt-52" />
        </div>
      </div>
    </section>
  );
};

export default DashboardAdmin;
