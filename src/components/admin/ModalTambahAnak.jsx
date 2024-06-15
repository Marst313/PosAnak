import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDataAnak, newDataAnak, setEditAnak, updateDataAnak } from '../../features/kids/kids';
import { iconClose } from '../../images/icons/';
import { convertDateString } from '../../utils/function';

const ModalTambahAnak = ({ tambahDataAnak, setTambahDataAnak }) => {
  const dispatch = useDispatch();
  const { singleDataAnak, edit } = useSelector((store) => store.kids);
  const [newAnak, setNewAnak] = useState({
    nama: '',
    nik: '',
    namaIbu: '',
    tanggalLahir: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nama, nik, namaIbu, tanggalLahir } = newAnak;

    const currentDate = new Date().toLocaleDateString('af-ZA');

    if (nama === '' || nik === '' || namaIbu === '' || tanggalLahir === '') {
      console.log('Fill all the fields !');
    } else {
      const dataBaru = {
        ...newAnak,
        child_growth: `[{\"date\":\"${new Date().toLocaleDateString('af-ZA')}\",\"height\":0,\"weight\":0},{\"date\":\"${currentDate}\",\"height\":0,\"weight\":0}]`,
      };

      try {
        if (!edit) {
          await dispatch(newDataAnak(dataBaru));
          await dispatch(getDataAnak());
          setTambahDataAnak(false);
          setNewAnak({ nama: '', nik: '', namaIbu: '', tanggalLahir: '' });
        }
        if (edit) {
          const dataUpdate = {
            id: singleDataAnak._id,
            ...newAnak,
            nik: newAnak.nik,
            nama: newAnak.nama,
            namaIbu: newAnak.namaIbu,
            tanggalLahir: newAnak.tanggalLahir,
          };

          await dispatch(updateDataAnak(dataUpdate));
          await dispatch(getDataAnak());
          await dispatch(setEditAnak(false));
          setTambahDataAnak(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnak({ ...newAnak, [name]: value });
  };

  const handleCloseModal = () => {
    setTambahDataAnak(false);
    dispatch(setEditAnak(false));
  };

  useEffect(() => {
    if (edit) {
      const { namaIbu = '', nama = '', nik = '', tanggalLahir = '' } = singleDataAnak || {};
      setNewAnak({ nama, nik, namaIbu, tanggalLahir: convertDateString(tanggalLahir) });
    }
  }, [edit]);

  return (
    <div className={`w-full  h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${tambahDataAnak ? 'flex' : 'hidden'}`}>
      <div className="lg:w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative">
        <h1 className="text-darkGreen font-medium text-2xl">{edit ? 'Update' : 'Tambah'} Anak</h1>

        <form className="flex flex-col justify-center gap-3 mt-5 " onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* NIK */}
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="nik" className="font-light">
                NIK
              </label>
              <input onChange={handleChange} type="number" name="nik" id="nik" className="focus:outline-none focus:ring-0 border-grey rounded-lg remove-arrow" value={newAnak.nik} />
            </div>

            {/* NAMA */}
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="nama" className="font-light">
                Nama
              </label>
              <input onChange={handleChange} type="text" name="nama" id="nama" className="focus:outline-none focus:ring-0 border-grey rounded-lg " value={newAnak.nama} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            {/* TANGGAL LAHIR */}
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="tanggalLahir" className="font-light">
                Tanggal Lahir
              </label>
              <input onChange={handleChange} type="date" name="tanggalLahir" id="tanggalLahir" className="focus:outline-none focus:ring-0 border-grey rounded-lg" value={newAnak.tanggalLahir} />
            </div>

            {/* NAMA IBU */}
            <div className="w-full  flex flex-col text-darkGreen gap-2 mt-4 lg:mt-0">
              <label htmlFor="namaIbu" className="font-light">
                Nama Ibu
              </label>
              <input onChange={handleChange} type="text" name="namaIbu" id="namaIbu" className="focus:outline-none focus:ring-0 border-grey rounded-lg" value={newAnak.namaIbu} />
            </div>
          </div>

          <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
            {edit ? 'Edit' : 'Tambah'}
          </button>
        </form>
        <button type="button" className="absolute top-0 right-0 mt-3 mr-3" onClick={handleCloseModal}>
          <img src={iconClose} alt="icon close" className="w-8 " />
        </button>
      </div>
    </div>
  );
};

export default ModalTambahAnak;
