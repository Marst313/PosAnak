import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import { useDispatch, useSelector } from "react-redux";

import { iconClose } from "../../images/icons/";
import {
  convertDateString,
  convertHoursToSecond,
  convertTime,
} from "../../utils/function";
import {
  getDataKegiatan,
  newDataKegiatan,
  setEditKegiatan,
  setNewActivity,
  setOpenModal,
  updateDataKegiatan,
} from "../../features/activity/activity";

const ModalTambahKegiatan = () => {
  const dispatch = useDispatch();
  const { singleDataKegiatan, edit, openModalNewActivity, newKegiatan } =
    useSelector((store) => store.activity);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      newKegiatan.judulKegiatan === "" ||
      newKegiatan.deskripsiKegiatan === "" ||
      newKegiatan.waktuMulai === "" ||
      newKegiatan.waktuSelesai === ""
    ) {
      console.log("All fields cant be empty");
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

    dispatch(setNewActivity({ ...newKegiatan, [name]: value }));
  };

  useEffect(() => {
    if (edit) {
      const { date, description, title, waktuMulai, waktuSelesai } =
        singleDataKegiatan || {};

      dispatch(
        setNewActivity({
          judulKegiatan: title,
          deskripsiKegiatan: description,
          waktuMulai: convertTime(waktuMulai),
          waktuSelesai: convertTime(waktuSelesai),
          tanggalKegiatan: convertDateString(date),
        }),
      );
    } else {
      dispatch(
        setNewActivity({
          judulKegiatan: "",
          deskripsiKegiatan: "",
          waktuMulai: "",
          waktuSelesai: "",
          tanggalKegiatan: "",
        }),
      );
    }
  }, [edit, singleDataKegiatan]);

  return (
    <div
      className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-white/20 backdrop-blur-sm ${openModalNewActivity ? "flex" : "hidden"}`}
    >
      <div className="shadow-custom relative mt-10 h-fit rounded-xl bg-white px-10 py-10 lg:mt-0 lg:w-1/2">
        <h1 className="text-darkGreen text-2xl font-medium">
          {edit ? "Edit" : "Tambah"} Kegiatan
        </h1>

        <form
          className="mt-5 flex flex-col justify-center gap-3"
          onSubmit={handleSubmit}
        >
          <div className="text-darkGreen flex w-full flex-col gap-2">
            <label htmlFor="judulKegiatan" className="font-light">
              Judul Kegiatan
            </label>
            <input
              type="text"
              name="judulKegiatan"
              id="judulKegiatan"
              className="border-grey rounded-lg focus:outline-none focus:ring-0"
              onChange={handleChange}
              value={newKegiatan.judulKegiatan}
            />
          </div>

          <div className="text-darkGreen flex w-full flex-col gap-2">
            <label htmlFor="deskripsiKegiatan" className="font-light">
              Deskripsi Kegiatan
            </label>
            <input
              type="text"
              name="deskripsiKegiatan"
              id="deskripsiKegiatan"
              className="border-grey rounded-lg focus:outline-none focus:ring-0"
              onChange={handleChange}
              value={newKegiatan.deskripsiKegiatan}
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="text-darkGreen flex w-full flex-col gap-2">
              <label htmlFor="waktuMulai" className="font-light">
                Waktu Mulai
              </label>
              <input
                type="time"
                name="waktuMulai"
                id="waktuMulai"
                className="border-grey rounded-lg focus:outline-none focus:ring-0"
                onChange={handleChange}
                value={newKegiatan.waktuMulai}
              />
            </div>
            <div className="text-darkGreen flex w-full flex-col gap-2">
              <label htmlFor="waktuSelesai" className="font-light">
                Waktu Selesai
              </label>
              <input
                type="time"
                name="waktuSelesai"
                id="waktuSelesai"
                className="border-grey rounded-lg focus:outline-none focus:ring-0"
                onChange={handleChange}
                value={newKegiatan.waktuSelesai}
              />
            </div>
          </div>

          <div className="text-darkGreen flex w-full flex-col gap-2">
            <label htmlFor="tanggalKegiatan" className="font-light">
              Tanggal Kegiatan
            </label>
            <input
              type="date"
              name="tanggalKegiatan"
              id="tanggalKegiatan"
              className="border-grey rounded-lg focus:outline-none focus:ring-0"
              onChange={handleChange}
              value={newKegiatan.tanggalKegiatan}
            />
          </div>

          <button
            type="submit"
            className="bg-lightGreen mt-5 w-32 self-center rounded-full px-8 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            {edit ? "Edit" : "Tambah"}
          </button>
        </form>
        <button
          type="button"
          className="absolute right-0 top-0 mr-3 mt-3"
          onClick={handleCloseModal}
        >
          <img src={iconClose} alt="icon close" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default ModalTambahKegiatan;
