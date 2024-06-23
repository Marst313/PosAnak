import React from 'react';
import { ModalTambahAnak, ModalPerkembanganAnak } from './';

const NewDataAnak = ({ graphShow }) => {
  if (graphShow) {
    return <ModalPerkembanganAnak />;
  }

  return <ModalTambahAnak />;
};

export default NewDataAnak;
