import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useDispatch, useSelector } from 'react-redux';

import { iconClose } from '../../images/icons/';
import { convertDateString, convertHoursToSecond, convertTime } from '../../utils/function';
import { getDataKegiatan, newDataKegiatan, setEditKegiatan, setNewActivity, setOpenModal, updateDataKegiatan } from '../../features/activity/activity';

const ModalTambahKegiatan = () => {
  const dispatch = useDispatch();
  const { singleDataKegiatan, edit, openModalNewActivity, newKegiatan } = useSelector((store) => store.activity);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newKegiatan.judulKegiatan === '' || newKegiatan.deskripsiKegiatan === '' || newKegiatan.waktuMulai === '' || newKegiatan.waktuSelesai === '') {
      console.log('All fields cant be empty');
      return;
    }

    const newData = {
      title: newKegiatan.judulKegiatan,
      date: newKegiatan.tanggalKegiatan,
      description: newKegiatan.deskripsiKegiatan,
      waktuMulai: convertHoursToSecond(newKegiatan.waktuMulai),
      waktuSelesai: convertHoursToSecond(newKegiatan.waktuSelesai),
    };

    try {
      if (!edit) {
        await dispatch(newDataKegiatan(newData));
        await dispatch(getDataKegiatan());
        dispatch(setOpenModal(false));
        dispatch(setEditKegiatan(false));

        // const templateParams = {
        //   to_emails: ['karmadharmanalendra@gmail.com', 'ndaruw29@gmail.com'],
        //   subject: dataKegiatan.judulKegiatan,
        //   message: `Kegiatan baru ${dataKegiatan.tanggalKegiatan} ${dataKegiatan.deskripsiKegiatan}`,
        // };

        // const response = await emailjs.send('service_rzvih2m', 'template_ibc0q4g', templateParams, 'rIuqApH0DVkcE2AZG');
      }

      if (edit) {
        const updatedData = {
          id: singleDataKegiatan._id,
          title: newKegiatan.judulKegiatan,
          date: newKegiatan.tanggalKegiatan,
          description: newKegiatan.deskripsiKegiatan,
          waktuMulai: convertHoursToSecond(newKegiatan.waktuMulai),
          waktuSelesai: convertHoursToSecond(newKegiatan.waktuSelesai),
        };

        await dispatch(updateDataKegiatan(updatedData));
        await dispatch(getDataKegiatan());
        dispatch(setOpenModal(false));
        dispatch(setEditKegiatan(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    dispatch(setOpenModal(false));
    dispatch(setEditKegiatan(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataKegiatan({ ...newKegiatan, [name]: value });
  };

  useEffect(() => {
    if (edit) {
      const { date, description, title, waktuMulai, waktuSelesai } = singleDataKegiatan || {};

      dispatch(
        setNewActivity({
          judulKegiatan: title,
          deskripsiKegiatan: description,
          waktuMulai: convertTime(waktuMulai),
          waktuSelesai: convertTime(waktuSelesai),
          tanggalKegiatan: convertDateString(date),
        })
      );
    } else {
      dispatch(
        setNewActivity({
          judulKegiatan: '',
          deskripsiKegiatan: '',
          waktuMulai: '',
          waktuSelesai: '',
          tanggalKegiatan: '',
        })
      );
    }
  }, [edit, singleDataKegiatan]);

  return (
    <div className={`w-full  h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${openModalNewActivity ? 'flex' : 'hidden'}`}>
      <div className="lg:w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative mt-10 lg:mt-0">
        <h1 className="text-darkGreen font-medium text-2xl">{edit ? 'Edit' : 'Tambah'} Kegiatan</h1>

        <form className="flex flex-col justify-center gap-3 mt-5 " onSubmit={handleSubmit}>
          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="judulKegiatan" className="font-light">
              Judul Kegiatan
            </label>
            <input type="text" name="judulKegiatan" id="judulKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={newKegiatan.judulKegiatan} />
          </div>

          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="deskripsiKegiatan" className="font-light">
              Deskripsi Kegiatan
            </label>
            <input type="text" name="deskripsiKegiatan" id="deskripsiKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={newKegiatan.deskripsiKegiatan} />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="waktuMulai" className="font-light">
                Waktu Mulai
              </label>
              <input type="time" name="waktuMulai" id="waktuMulai" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={newKegiatan.waktuMulai} />
            </div>
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="waktuSelesai" className="font-light">
                Waktu Selesai
              </label>
              <input type="time" name="waktuSelesai" id="waktuSelesai" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={newKegiatan.waktuSelesai} />
            </div>
          </div>

          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="tanggalKegiatan" className="font-light">
              Tanggal Kegiatan
            </label>
            <input type="date" name="tanggalKegiatan" id="tanggalKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={newKegiatan.tanggalKegiatan} />
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

export default ModalTambahKegiatan;
