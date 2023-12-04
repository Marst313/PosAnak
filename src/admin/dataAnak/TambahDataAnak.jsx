import React from 'react';
import iconClose from '../../images/iconClose.svg';

const TambahDataAnak = ({ tambahDataAnak, setTambahDataAnak, graphShow }) => {
  return (
    <div className={`w-full  h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${tambahDataAnak ? 'flex' : 'hidden'}`}>
      {graphShow ? (
        <div className="w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative">
          <h1 className="text-darkGreen font-medium text-2xl">Update Perkembangan Anak</h1>

          <form className="flex flex-col justify-center gap-3 mt-5 ">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="w-full  flex flex-col text-darkGreen gap-2">
                <label htmlFor="tinggiBadan" className="font-light">
                  Tinggi Badan
                </label>
                <input type="text" name="tinggiBadan" id="tinggiBadan" className="focus:outline-none focus:ring-0 border-grey rounded-lg placeholder:text-end" placeholder="Cm" />
              </div>

              <div className="w-full  flex flex-col text-darkGreen gap-2">
                <label htmlFor="beratBadan" className="font-light">
                  Berat Badan
                </label>
                <input type="text" name="beratBadan" id="beratBadan" className="focus:outline-none focus:ring-0 border-grey rounded-lg placeholder:text-end" placeholder="Kg" />
              </div>
            </div>

            <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
              Tambah
            </button>
          </form>

          <button type="button" className="absolute top-0 right-0 mt-3 mr-3" onClick={() => setTambahDataAnak(false)}>
            <img src={iconClose} alt="icon close" className="w-8 " />
          </button>
        </div>
      ) : (
        <div className="w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative">
          <h1 className="text-darkGreen font-medium text-2xl">Tambah Anak</h1>

          <form className="flex flex-col justify-center gap-3 mt-5 ">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="w-full  flex flex-col text-darkGreen gap-2">
                <label htmlFor="nik" className="font-light">
                  NIK
                </label>
                <input type="number" name="nik" id="nik" className="focus:outline-none focus:ring-0 border-grey rounded-lg remove-arrow" />
              </div>
              <div className="w-full  flex flex-col text-darkGreen gap-2">
                <label htmlFor="nama" className="font-light">
                  Nama
                </label>
                <input type="text" name="nama" id="nama" className="focus:outline-none focus:ring-0 border-grey rounded-lg " />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="w-full  flex flex-col text-darkGreen gap-2">
                <label htmlFor="tanggalKegiatan" className="font-light">
                  Tanggal Lahir
                </label>
                <input type="date" name="tanggalKegiatan" id="tanggalKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
              </div>
              <div className="w-full  flex flex-col text-darkGreen gap-2">
                <label htmlFor="namaIbu" className="font-light">
                  Nama Ibu
                </label>
                <input type="text" name="namaIbu" id="namaIbu" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
              </div>
            </div>

            <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
              Tambah
            </button>
          </form>
          <button type="button" className="absolute top-0 right-0 mt-3 mr-3" onClick={() => setTambahDataAnak(false)}>
            <img src={iconClose} alt="icon close" className="w-8 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default TambahDataAnak;
