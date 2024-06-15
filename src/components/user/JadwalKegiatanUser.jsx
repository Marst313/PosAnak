import React from 'react';
import { converDateId, convertTime } from '../../utils/function';

const JadwalKegiatanUser = ({ style, dataKegiatan }) => {
  return (
    <ul className={`bg-white p-10 flex flex-col lg:float-left gap-5 lg:2xl:w-2/3 rounded-3xl h-fit ${style && style}`}>
      {dataKegiatan.map((item) => {
        const { title, description, waktuMulai, waktuSelesai, date } = item;

        return (
          <li className="lg:flex float-left p-5 bg-coldWhite gap-5 justify-between" key={item._id}>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl lg:text-2xl max-w-lg line-clamp-6">{title}</h3>
              <p className="font-light max-w-sm">{description}</p>
            </div>

            <div className="bg-coldWhite flex lg:items-center justify-between font-light flex-col mt-3 lg:mt-0">
              <div className="flex items-center gap-2 justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                  <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
                  <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
                </svg>

                <p>
                  {convertTime(waktuMulai)} - <span>{convertTime(waktuSelesai)} WIB</span>
                </p>
              </div>

              <div className="flex items-center gap-2 justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                  <path
                    fill="#036346"
                    d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
                  />
                </svg>

                <p className="whitespace-nowrap">{converDateId(date)}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default JadwalKegiatanUser;
