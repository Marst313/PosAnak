import React, { useEffect, useRef, useState } from 'react';
import { editJadwalKegiatanAdmin, deleteIconWhite, pencil } from '../../images/icons/';

import { useDispatch } from 'react-redux';
import { deleteDataKegiatan, getDataKegiatan, getSingleDataKegiatan, setEditKegiatan, setOpenModal } from '../../features/activity/activity';
import { converDateId, convertTime } from '../../utils/function';

const SingleJadwalKegiatan = ({ item }) => {
  const dispatch = useDispatch();
  const settingRef = useRef(null);
  const [openSetting, setOpenSetting] = useState(false);

  const { date, description, title, waktuMulai, waktuSelesai } = item;

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteDataKegiatan(id));
      await dispatch(getDataKegiatan());
    } catch (error) {
      console.log(error);
    }
  };
  const editKegiatan = (id) => {
    dispatch(getSingleDataKegiatan(id));
    dispatch(setEditKegiatan(true));
    dispatch(setOpenModal(true));
  };

  const handleEditClick = (event) => {
    // Menghentikan event propagation agar tidak mencapai handleClickOutside
    event.stopPropagation();

    // Membuka atau menutup modal saat ikon edit diklik
    setOpenSetting((prevOpenSetting) => !prevOpenSetting);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingRef.current && !settingRef.current.contains(event.target)) {
        setOpenSetting(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <li className="lg:flex float-left p-5 bg-coldWhite gap-5 justify-between">
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-2xl ">{title.slice(0, 60)}</h3>
        <p className="font-light">{description}</p>
      </div>

      <div className="bg-coldWhite flex items-center justify-between font-light gap-5 relative mt-2 lg:mt-0">
        <div>
          <div className="flex items-center gap-2 justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
              <path fill="none" stroke="#036346" strokeMiterlimit={10} strokeWidth={32} d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z" />
              <path fill="none" stroke="#036346" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 128v144h96" />
            </svg>

            <p className="whitespace-nowrap">
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

        <div className={`bg-white p-5 absolute  flex-col right-0 gap-2 ${openSetting ? 'flex' : 'hidden'} modal-edit`} ref={settingRef}>
          <button type="button" className="bg-yellowPrimary w-40 text-white  flex px-3 py-1 rounded-lg font-medium items-center justify-between" onClick={() => editKegiatan(item._id)}>
            Ubah
            <img src={pencil} alt="edit icon pencil" />
          </button>
          <button type="button" className="bg-redPrimary w-40 text-white  flex px-3 py-1 rounded-lg font-medium items-center justify-between" onClick={() => handleDelete(item._id)}>
            Hapus
            <img src={deleteIconWhite} alt="delete icon" />
          </button>
        </div>

        <button type="button" onClick={handleEditClick}>
          <img src={editJadwalKegiatanAdmin} alt="setting logo" />
        </button>
      </div>
    </li>
  );
};

export default SingleJadwalKegiatan;
