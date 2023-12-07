import React, { useState } from 'react';

import PerkembanganModal from './PerkembanganModal';
import AnakModal from './AnakModal';

const TambahDataAnak = ({ tambahDataAnak, setTambahDataAnak, graphShow }) => {
  if (graphShow) {
    return <PerkembanganModal tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} />;
  }

  return <AnakModal tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} />;
};

export default TambahDataAnak;
