import React from 'react';
import { useSelector } from 'react-redux';

import { JadwalKegiatanUser, SearchBarUser } from '../components/user';

const DashboardKegiatan = () => {
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
      <div>
        <SearchBarUser />

        <JadwalKegiatanUser dataKegiatan={dataKegiatan} />
      </div>
    </section>
  );
};

export default DashboardKegiatan;
