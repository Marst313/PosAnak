import React from 'react';
import iconEdit from '../../images/editJadwalKegiatanAdmin.svg';

const JadwalKegiatanAdmin = () => {
  return (
    <ul className="bg-white p-10 flex flex-col float-left gap-5   rounded-3xl h-fit w-full mt-5  ">
      <h1 className="text-2xl font-bold">Jadwal Kegiatan</h1>

      <li className="flex float-left p-5 bg-coldWhite gap-5 justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl"> Imunisasi Bayi dan Balita</h3>
          <p className="font-light">Kegiatan imunisasi bayi dan balita</p>
        </div>

        <div className="bg-coldWhite flex items-center justify-between font-light gap-5">
          <div>
            <div className="flex items-center gap-2 justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
                <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
              </svg>

              <p>07.00 - 09.00 WIB</p>
            </div>

            <div className="flex items-center gap-2 justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                <path
                  fill="#036346"
                  d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
                />
              </svg>

              <p>Senin 12/12/2025</p>
            </div>
          </div>
          <button>
            <img src={iconEdit} alt="" />
          </button>
        </div>
      </li>

      <li className="flex float-left p-5 bg-coldWhite gap-5 justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl"> Imunisasi Bayi dan Balita</h3>
          <p className="font-light">Kegiatan imunisasi bayi dan balita</p>
        </div>

        <div className="bg-coldWhite flex items-center justify-between font-light gap-5">
          <div>
            <div className="flex items-center gap-2 justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
                <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
              </svg>

              <p>07.00 - 09.00 WIB</p>
            </div>

            <div className="flex items-center gap-2 justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                <path
                  fill="#036346"
                  d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
                />
              </svg>

              <p>Senin 12/12/2025</p>
            </div>
          </div>
          <button>
            <img src={iconEdit} alt="" />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default JadwalKegiatanAdmin;
