import React, { useEffect, useRef, useState } from 'react';
import SingleJadwalKegiatan from './SingleJadwalKegiatan';

const JadwalKegiatanAdmin = ({ dataKegiatan, newKegiatan, setNewKegiatan }) => {
  return (
    <ul className="bg-white p-10 flex flex-col float-left gap-5   rounded-3xl h-fit w-full mt-5  ">
      <h1 className="text-2xl font-bold">Jadwal Kegiatan</h1>

      {dataKegiatan.map((item) => {
        return <SingleJadwalKegiatan key={item.id} item={item} newKegiatan={newKegiatan} setNewKegiatan={setNewKegiatan} />;
      })}
    </ul>
  );
};

export default JadwalKegiatanAdmin;
