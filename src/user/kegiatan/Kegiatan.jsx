import React from 'react';
import SearchKegiatan from './SearchKegiatan';
import JadwalKegiatan from './JadwalKegiatan';
import Schedule from '../dashboard/Schedule';
import { useSelector } from 'react-redux';

const Kegiatan = () => {
  const { dataKegiatan, isLoading } = useSelector((store) => store.activity);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
      <div>
        <SearchKegiatan />

        <Schedule dataKegiatan={dataKegiatan} />
      </div>
    </section>
  );
};

export default Kegiatan;
