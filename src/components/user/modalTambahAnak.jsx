import React, { useState } from "react";
import existdata from "../../images/existdata.png";
import adddata from "../../images/adddata.png";
import { iconClose } from "../../images/icons";
import AddAnakNew from "../user/modalDataBaruAnak";
import AddAnakExisting from "../user/modalDataExistingAnak";

const ModalTambahAnak = ({ isModalOpenAnak, closeModalAnak }) => {
  const [activeForm, setActiveForm] = useState(null);

  const openForm = (formType) => {
    setActiveForm(formType);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm ${
        isModalOpenAnak ? "visible" : "invisible"
      }`}
    >
      <div className="relative rounded-lg p-8">
        <button
          type="button"
          className="absolute right-3  lg:-right-2 -top-5 lg:-top-2 w-8"
          onClick={closeModalAnak}
        >
          <img src={iconClose} alt="icon close" className="w-full" />
        </button>
        <div className="lg:flex">
          {!activeForm ? (
            <>
              <section
                className="border-3 flex transform cursor-pointer rounded-3xl border-[#57C9A7] bg-white p-3 transition-transform duration-300 hover:scale-105 lg:mr-10 lg:block"
                onClick={() => openForm("new")}
              >
                <h2 className="text-2xl font-bold text-[#57C9A7] lg:w-32 lg:text-3xl">
                  Tambah Data Baru
                </h2>
                <div className="flex w-1/2 justify-end lg:block lg:w-full lg:ml-3">
                  <img
                    src={adddata}
                    alt="Image new data"
                    className="h-20 w-20 lg:-mt-20 lg:ml-5 lg:h-32 lg:w-40"
                  />
                </div>
              </section>
              <section
                className="border-3 lg:ml-2 mt-5 flex transform cursor-pointer rounded-3xl border-[#57C9A7] bg-white p-3 transition-transform duration-300 hover:scale-105 lg:mt-0 lg:block"
                onClick={() => openForm("existing")}
              >
                <h2 className="text-2xl font-bold text-[#57C9A7] lg:w-40">
                  Tambah Data yang <br /> Sudah <br /> Ada
                </h2>
                <div className="flex w-1/2 items-center lg:block lg:w-full lg:ml-8">
                  <img
                    src={existdata}
                    alt="Image existing data"
                    className="lg:-mt-20 lg:h-32 lg:w-40"
                  />
                </div>
              </section>
            </>
          ) : activeForm === "new" ? (
            <AddAnakNew isModalOpen={true} closeModal={closeForm} />
          ) : (
            <AddAnakExisting isModalOpen={true} closeModal={closeForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalTambahAnak;
