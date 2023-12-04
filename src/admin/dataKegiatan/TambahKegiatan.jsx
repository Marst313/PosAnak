import React from 'react';
import iconClose from '../../images/iconClose.svg';

const TambahKegiatan = ({ newKegiatan, setNewKegiatan }) => {
  return (
    <div className={`w-full  h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${newKegiatan ? 'flex' : 'hidden'}`}>
      <div className="w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative">
        <h1 className="text-darkGreen font-medium text-2xl">Tambah Kegiatan</h1>

        <form className="flex flex-col justify-center gap-3 ">
          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="judulkegiatan" className="font-light">
              Judul Kegiatan
            </label>
            <input type="text" name="judulkegiatan" id="judulkegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
          </div>

          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="deskripsiKegiatan" className="font-light">
              Deskripsi Kegiatan
            </label>
            <input type="text" name="deskripsiKegiatan" id="deskripsiKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="tanggalKegiatan" className="font-light">
                Tanggal Kegiatan
              </label>
              <input type="date" name="tanggalKegiatan" id="tanggalKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
            </div>
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="waktuKegiatan" className="font-light">
                Waktu Kegiatan
              </label>
              <input type="time" name="waktuKegiatan" id="waktuKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" />
            </div>
          </div>

          <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
            Tambah
          </button>
        </form>
        <button type="button" className="absolute top-0 right-0 mt-3 mr-3" onClick={() => setNewKegiatan(false)}>
          <img src={iconClose} alt="icon close" className="w-8 " />
        </button>
      </div>
    </div>
  );
};

export default TambahKegiatan;
