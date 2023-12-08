import React, { useState } from 'react';

import PerkembanganModal from './PerkembanganModal';
import AnakModal from './AnakModal';

const TambahDataAnak = ({ tambahDataAnak, setTambahDataAnak, graphShow, dataPertumbuhan }) => {
  if (graphShow) {
    return <PerkembanganModal tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} dataPertumbuhan={dataPertumbuhan} />;
  }

  return <AnakModal tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} />;
};

export default TambahDataAnak;
