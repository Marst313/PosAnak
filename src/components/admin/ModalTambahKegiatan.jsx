import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useDispatch, useSelector } from 'react-redux';

import iconClose from '../../images/iconClose.svg';
import { convertHoursToSecond, convertTime } from '../../utils/function';
import { getDataKegiatan, newDataKegiatan, setEditKegiatan, updateDataKegiatan } from '../../features/activity/activity';

const ModalTambahKegiatan = ({ newKegiatan, setNewKegiatan }) => {
  const dispatch = useDispatch();
  const { singleDataKegiatan, edit } = useSelector((store) => store.activity);

  const [emailNotif, setEmailNotif] = useState([]);
  const [dataKegiatan, setDataKegiatan] = useState({
    judulKegiatan: '',
    deskripsiKegiatan: '',
    waktuMulai: '',
    waktuSelesai: '',
    tanggalKegiatan: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { judulKegiatan, deskripsiKegiatan, waktuMulai, waktuSelesai } = dataKegiatan;

    if (judulKegiatan === '' || deskripsiKegiatan === '' || waktuMulai === '' || waktuSelesai === '') {
      console.log('All fields cant be empty');
      return;
    }

    const newData = {
      records: [
        {
          fields: {
            title: dataKegiatan.judulKegiatan,
            date: dataKegiatan.tanggalKegiatan,
            description: dataKegiatan.deskripsiKegiatan,
            waktuMulai: convertHoursToSecond(dataKegiatan.waktuMulai),
            waktuSelesai: convertHoursToSecond(dataKegiatan.waktuSelesai),
          },
        },
      ],
    };

    try {
      if (!edit) {
        await dispatch(newDataKegiatan(newData));
        await dispatch(getDataKegiatan());
        setNewKegiatan(false);
        dispatch(setEditKegiatan(false));

        const templateParams = {
          to_emails: ['karmadharmanalendra@gmail.com', 'dlegoinyoman9@gmail.com'],
          subject: dataKegiatan.judulKegiatan,
          message: `Kegiatan baru ${dataKegiatan.tanggalKegiatan} ${dataKegiatan.deskripsiKegiatan}`,
        };
        console.log('templateParams:', templateParams);

        const response = await emailjs.send('service_8hwnbfh', 'template_0zl93ag', templateParams, 'L2lmR-Rk9UAg8fOOY');
      }

      if (edit) {
        const updatedData = {
          records: [
            {
              id: singleDataKegiatan.id,
              fields: {
                title: dataKegiatan.judulKegiatan,
                date: dataKegiatan.tanggalKegiatan,
                description: dataKegiatan.deskripsiKegiatan,
                waktuMulai: convertHoursToSecond(dataKegiatan.waktuMulai),
                waktuSelesai: convertHoursToSecond(dataKegiatan.waktuSelesai),
              },
            },
          ],
        };

        await dispatch(updateDataKegiatan(updatedData));
        await dispatch(getDataKegiatan());
        setNewKegiatan(false);
        dispatch(setEditKegiatan(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataKegiatan({ ...dataKegiatan, [name]: value });
  };

  useEffect(() => {
    if (edit) {
      const { date, description, title, waktuMulai, waktuSelesai } = singleDataKegiatan?.fields || {};

      setDataKegiatan({
        judulKegiatan: title,
        deskripsiKegiatan: description,
        waktuMulai: convertTime(waktuMulai),
        waktuSelesai: convertTime(waktuSelesai),
        tanggalKegiatan: date,
      });
    }
  }, [edit, singleDataKegiatan]);

  return (
    <div className={`w-full  h-full bg-white/20 backdrop-blur-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2    justify-center items-center ${newKegiatan ? 'flex' : 'hidden'}`}>
      <div className="w-1/2 h-fit px-10 py-10 bg-white shadow-custom rounded-xl relative">
        <h1 className="text-darkGreen font-medium text-2xl">Tambah Kegiatan</h1>

        <form className="flex flex-col justify-center gap-3 mt-5 " onSubmit={handleSubmit}>
          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="judulKegiatan" className="font-light">
              Judul Kegiatan
            </label>
            <input type="text" name="judulKegiatan" id="judulKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={dataKegiatan.judulKegiatan} />
          </div>

          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="deskripsiKegiatan" className="font-light">
              Deskripsi Kegiatan
            </label>
            <input type="text" name="deskripsiKegiatan" id="deskripsiKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={dataKegiatan.deskripsiKegiatan} />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="waktuMulai" className="font-light">
                Waktu Mulai
              </label>
              <input type="time" name="waktuMulai" id="waktuMulai" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={dataKegiatan.waktuMulai} />
            </div>
            <div className="w-full  flex flex-col text-darkGreen gap-2">
              <label htmlFor="waktuSelesai" className="font-light">
                Waktu Selesai
              </label>
              <input type="time" name="waktuSelesai" id="waktuSelesai" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={dataKegiatan.waktuSelesai} />
            </div>
          </div>

          <div className="w-full  flex flex-col text-darkGreen gap-2">
            <label htmlFor="tanggalKegiatan" className="font-light">
              Tanggal Kegiatan
            </label>
            <input type="date" name="tanggalKegiatan" id="tanggalKegiatan" className="focus:outline-none focus:ring-0 border-grey rounded-lg" onChange={handleChange} value={dataKegiatan.tanggalKegiatan} />
          </div>

          <button type="submit" className="text-white bg-lightGreen focus:ring-4 focus:outline-none  font-medium rounded-full text-sm w-32 px-8 py-2 text-center self-center mt-5">
            {edit ? 'Edit' : 'Tambah'}
          </button>
        </form>
        <button
          type="button"
          className="absolute top-0 right-0 mt-3 mr-3"
          onClick={() => {
            setNewKegiatan(false);
            dispatch(setEditKegiatan(false));
          }}
        >
          <img src={iconClose} alt="icon close" className="w-8 " />
        </button>
      </div>
    </div>
  );
};

export default ModalTambahKegiatan;
