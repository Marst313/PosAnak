import React from 'react';
import iconClose from '../../images/iconClose.svg';

const TambahKeluarga = ({ tambahKeluarga, setTambahKeluarga }) => {
  return (
    <div className={`w-full  h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${tambahKeluarga ? 'flex' : 'hidden'}`}>
      <div className="w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative mx-auto ">
        <h1 className="text-darkGreen font-medium text-2xl">Tambah Keluarga</h1>

        <form className="flex flex-col justify-center gap-10 mt-5">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="noKartuKeluarga" className="font-light">
                No Kartu Keluarga
              </label>
              <input type="text" name="noKartuKeluarga" id="noKartuKeluarga" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
            </div>

            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="nikKepalaKeluarga" className="font-light">
                NIK Kepala Keluarga
              </label>
              <input type="text" name="nikKepalaKeluarga" id="nikKepalaKeluarga" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="namaKepalaKeluarga" className="font-light">
                Nama Kepala Keluarga
              </label>
              <input type="text" name="namaKepalaKeluarga" id="namaKepalaKeluarga" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
            </div>
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="jumlahAnggotaKeluarga" className="font-light">
                Jumlah Anggota Keluarga
              </label>
              <input type="number" name="jumlahAnggotaKeluarga" id="jumlahAnggotaKeluarga" className="focus:outline-none focus:ring-0 border-grey rounded-lg remove-arrow" />
            </div>
          </div>

          <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
            Tambah
          </button>
        </form>
        <button type="button" className="absolute top-0 right-0 mt-3 mr-3" onClick={() => setTambahKeluarga(false)}>
          <img src={iconClose} alt="icon close" className="w-8 " />
        </button>
      </div>
    </div>
  );
};

export default TambahKeluarga;
