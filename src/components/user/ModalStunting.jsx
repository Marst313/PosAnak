import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateAnak } from "../../features/kids/kids";
import { getAgeInMonths } from "../../utils/function";

const ModalStunting = ({ isModalOpen }) => {
  const [selected, setSelected] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((store) => store.kids);

  const calculateData = (e) => {
    e.preventDefault();
    const selectedKidsData = data.allDataAnakNik.find(
      (anak) => anak._id === selected,
    );

    const tinggiBadan = JSON.parse(selectedKidsData?.child_growth).slice(-1)[0]
      .height;

    const umur = getAgeInMonths(selectedKidsData.tanggalLahir);

    // umur = bulan , jenisKelamin 0 = wanita / 1 = laki-laki , tinggiBadan
    dispatch(calculateAnak({ umur, jenisKelamin: 0, tinggiBadan }));
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${isModalOpen ? "scale-100" : "scale-0"}`}
    >
      <form
        onSubmit={calculateData}
        className="relative mx-2 flex max-w-4xl flex-col items-center rounded-xl bg-white p-6 shadow-lg lg:mx-auto"
      >
        <select
          className="focus:ring-greenPrimary border-greenPrimary rounded-lg border focus:outline-none focus:ring-2"
          onChange={handleChange}
          value={selected}
        >
          <option value="" disabled>
            Pilih Nama Anak
          </option>
          {data.allDataAnakNik.map((anak) => (
            <option key={anak._id} value={anak._id} className="px-5">
              {anak.nama}
            </option>
          ))}
        </select>

        <div className="flex w-full">
          <button
            className="mt-6 flex items-center rounded-full bg-green-600 px-6 py-2 text-white shadow-md hover:bg-opacity-80"
            type="submit"
          >
            Hitung
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalStunting;
