import React, { useState } from "react";
import { iconSend } from "../../images/icons";
import { useDispatch, useSelector } from "react-redux";
import { connectDataAnak } from "../../features/kids/kids";

const ModalDataExistingAnak = ({ isModalOpen, closeModal }) => {
  const { allUserNikKids } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  console.log(allUserNikKids);

  const [nik, setNik] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(connectDataAnak(nik));

    await dispatch(getNikDataAnak(allUserNikKids));
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isModalOpen ? "" : "hidden"}`}
    >
      <div className="m-3 w-full max-w-xl rounded-lg border-2 border-[#57C9A7] bg-white p-6 shadow-xl lg:m-0">
        <h2 className="mb-4 text-2xl font-bold text-green-700">
          Tambah Data Anak yang Sudah Ada
        </h2>
        <label htmlFor="nik" className="mb-2 block font-medium text-green-700">
          Masukkan NIK Anak
        </label>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4 flex">
            <input
              type="text"
              id="nik"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contoh: 3172022210990001"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 transform p-2 text-white"
              aria-label="Submit"
            >
              <div className="ml-2 flex w-16 cursor-pointer justify-center rounded-xl bg-[#036346] p-2 hover:bg-green-700 focus:outline-none">
                <img src={iconSend} alt="image send" className="w-5" />
              </div>
            </button>
          </div>
        </form>
        <button
          onClick={closeModal}
          className="mt-4 rounded bg-[#036346] px-4 py-2 text-white"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default ModalDataExistingAnak;
