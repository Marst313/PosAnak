import React, { useState } from "react";
import { iconSend, iconClose } from "../../images/icons";
import { useDispatch, useSelector } from "react-redux";
import { connectDataAnak, newDataAnak } from "../../features/kids/kids";
import { convertDateString } from "../../utils/function";
import { setAllUserNikKids } from "../../features/users/user";

const AddAnak = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  const { profile } = useSelector((store) => store.user);

  const [formData, setFormData] = useState({
    nama: "",
    namaIbu: profile.name,
    nik: "",
    tanggalLahir: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      newDataAnak({
        ...formData,
        nik: +formData.nik,
        tanggalLahir: convertDateString(formData.tanggalLahir),
      }),
    );

    await dispatch(connectDataAnak(formData.nik));
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm ${isModalOpen ? "flex" : "hidden"}`}
    >
      <div className="relative mx-5 mt-14 w-96 rounded-2xl border-2 border-[#57C9A7] bg-white p-8 shadow-lg lg:mx-0 lg:mt-0">
        <button
          type="button"
          className="absolute -right-1 top-0 mr-3 mt-2 w-6"
          onClick={closeModal}
        >
          <img src={iconClose} alt="icon close" className="w-8" />
        </button>
        <h2 className="mb-4 text-center text-2xl font-bold">
          Tambah Data Baru
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-green-700"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-green-700"
              htmlFor="namaIbu"
            >
              Nama Ibu
            </label>
            <input
              type="text"
              name="namaIbu"
              id="namaIbu"
              value={formData.namaIbu}
              disabled={true}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded-xl border bg-black/10 px-3 py-2 leading-tight text-gray-600 shadow focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-green-700"
              htmlFor="nik"
            >
              NIK
            </label>
            <input
              type="number"
              name="nik"
              id="nik"
              value={formData.nik}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              className="mb-2 block text-sm font-bold text-green-700"
              htmlFor="tanggalLahir"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              name="tanggalLahir"
              id="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="focus:shadow-outline flex w-full items-center justify-center rounded-full bg-[#036346] px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
          >
            <img src={iconSend} alt="Send Icon" className="mr-2 h-6 w-6" />
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnak;
