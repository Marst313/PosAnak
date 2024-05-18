import React from 'react';
import { ModalTambahAnak, ModalPerkembanganAnak } from './';

const NewDataAnak = ({ tambahDataAnak, setTambahDataAnak, graphShow, dataPertumbuhan }) => {
  if (graphShow) {
    return <ModalPerkembanganAnak tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} dataPertumbuhan={dataPertumbuhan} />;
  }

  return <ModalTambahAnak tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} />;
};

export default NewDataAnak;
