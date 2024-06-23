import React, { useEffect, useState } from 'react';
import { iconClose } from '../../images/icons/';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDataAnak, setTambahDataAnak, updateDataAnak } from '../../features/kids/kids';
import { parseStringJson } from '../../utils/function';

const ModalPerkembanganAnak = () => {
  const dispatch = useDispatch();

  const { singleDataAnak, tambahDataAnak, dataPertumbuhan } = useSelector((store) => store.kids);

  const [perkembanganAnak, setPerkembanganAnak] = useState({
    berat: '',
    tinggi: '',
  });
  const lastData = dataPertumbuhan.length > 0 ? dataPertumbuhan[dataPertumbuhan.length - 1] : {};
  const { weight, height } = lastData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (perkembanganAnak.berat === '' || perkembanganAnak.tinggi === '') {
        console.log('Fill all the fields !');
      } else {
        const dataLama = parseStringJson(singleDataAnak.child_growth);

        const dataBaru = {
          id: singleDataAnak._id,
          nik: singleDataAnak.nik,
          nama: singleDataAnak.nama,
          namaIbu: singleDataAnak.namaIbu,
          tanggalLahir: singleDataAnak.tanggalLahir,
          child_growth: JSON.stringify([
            ...dataLama,
            {
              date: new Date().toLocaleDateString('af-ZA'),
              height: +perkembanganAnak.tinggi,
              weight: +perkembanganAnak.berat,
            },
          ]),
        };

        await dispatch(updateDataAnak(dataBaru));
        await dispatch(getSingleDataAnak(singleDataAnak._id));
        dispatch(setTambahDataAnak(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerkembanganAnak({ ...perkembanganAnak, [name]: value });
  };

  useEffect(() => {
    setPerkembanganAnak({ ...perkembanganAnak, berat: weight, tinggi: height });
  }, [dataPertumbuhan]);

  return (
    <div className={`w-full h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${tambahDataAnak ? 'flex' : 'hidden'}`}>
      <div className="lg:w-1/2 h-fit p-2 lg:px-10 py-10 bg-white shadow-custom rounded-xl relative">
        <h1 className="text-darkGreen font-medium text-2xl">Update Perkembangan Anak</h1>

        <form className="flex flex-col justify-center gap-3 mt-5" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="tinggi" className="font-light">
                Tinggi Badan
              </label>
              <input type="text" name="tinggi" id="tinggi" className="focus:outline-none focus:ring-0 border-grey rounded-lg placeholder:text-end" placeholder="Cm" onChange={handleChange} value={perkembanganAnak.tinggi} />
            </div>

            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="berat" className="font-light">
                Berat Badan
              </label>
              <input type="text" name="berat" id="berat" className="focus:outline-none focus:ring-0 border-grey rounded-lg placeholder:text-end" placeholder="Kg" onChange={handleChange} value={perkembanganAnak.berat} />
            </div>
          </div>

          <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
            Tambah
          </button>
        </form>

        <button type="button" className="absolute top-0 right-0 mt-3 mr-3" onClick={() => dispatch(setTambahDataAnak(false))}>
          <img src={iconClose} alt="icon close" className="w-8 " />
        </button>
      </div>
    </div>
  );
};

export default ModalPerkembanganAnak;
