import React from 'react';
import SearchKegiatan from '../user/kegiatan/SearchKegiatan';
import JadwalKegiatan from '../user/kegiatan/JadwalKegiatan';

const Kegiatan = () => {
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5">
      <div>
        <SearchKegiatan />

        <JadwalKegiatan />
      </div>
    </section>
  );
};

export default Kegiatan;
