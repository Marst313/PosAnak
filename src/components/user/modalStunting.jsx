import React from "react";
import doctorImage from "../../images/hampirStunting.png";

const ModalStunting = ({ isModalOpen, closeModal }) => {
    
  return (
    <div
      className={`fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isModalOpen ? "flex" : "hidden"}`}
    >
      <div className="relative mx-2 lg:mx-auto flex max-w-4xl items-center rounded-xl bg-white p-6 shadow-lg">
        <img src={doctorImage} alt="Hampir Stunting" className="w-1/3 hidden lg:block" />
        <div className="ml-6 flex-1 text-start">
          <h2 className="text-xl font-bold text-green-600">
            Hasil Cek Stunting
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-yellow-500">
            Hampir Stunting
          </h3>
          <p className="mt-2 lg:mt-4 text-justify text-gray-500 text-sm lg:text-base">
            Berdasarkan data yang Anda masukkan, anak Anda hampir menunjukkan
            tanda-tanda stunting. Ini berarti ada beberapa aspek gizi atau
            kesehatan yang perlu diperhatikan lebih serius.
          </p>
          <ul className="mt-3 lg:mt-6 space-y-4">
            <li className="flex items-start">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
                <span className="text-xl text-green-600">🍎</span>
              </div>
              <p className="flex-1 text-green-700 text-sm lg:text-base">
                Tingkatkan asupan gizi anak dengan makanan yang kaya vitamin dan
                mineral.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
                <span className="text-xl text-green-600">👩‍⚕️</span>
              </div>
              <p className="flex-1 text-green-700 text-sm lg:text-base">
                Konsultasikan dengan ahli gizi atau dokter anak untuk
                mendapatkan saran yang tepat.
              </p>
            </li>
            <li className="flex items-start">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
                <span className="text-xl text-green-600">🛌</span>
              </div>
              <p className="flex-1 text-green-700 text-sm lg:text-base">
                Pastikan anak mendapat cukup istirahat dan aktivitas fisik yang
                memadai.
              </p>
            </li>
          </ul>
          <div className="flex w-full justify-end">
            <button
              className="mt-6 flex items-center rounded-full bg-green-600 px-6 py-2 text-white shadow-md"
              onClick={closeModal}
            >
              <span className="mr-2">🛡️</span>
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStunting;
