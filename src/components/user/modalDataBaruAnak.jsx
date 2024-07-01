import React, { useState } from "react";
import { iconSend, iconClose } from "../../images/icons";

const AddAnak = ({ isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    nama: "",
    namaIbu: "",
    nik: "",
    tanggalLahir: "",
    umur: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    closeModal();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm ${isModalOpen ? "flex" : "hidden"}`}
    >
      <div className="relative w-96 rounded-2xl bg-white p-8 shadow-lg mx-5 mt-14 lg:mx-0 lg:mt-0 border-2 border-[#57C9A7]">
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
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-green-700"
              htmlFor="umur"
            >
              Umur
            </label>
            <input
              type="number"
              name="umur"
              id="umur"
              value={formData.umur}
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
