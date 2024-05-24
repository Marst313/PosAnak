import React from 'react';
import { useSelector } from 'react-redux';

import { JadwalKegiatanUser, SearchBarUser } from '../components/user';
import Loading from '../components/Loading';

const DashboardKegiatan = () => {
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-col bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
      <div className="mt-10 lg:mt-0">
        <SearchBarUser />

        <JadwalKegiatanUser dataKegiatan={dataKegiatan} />
      </div>
    </section>
  );
};

export default DashboardKegiatan;
