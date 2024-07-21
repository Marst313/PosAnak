import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  connectDataAnakAdmin,
  getDataAnak,
  newDataAnak,
  setEditAnak,
  setNewAnak,
  setTambahDataAnak,
  updateDataAnak,
} from "../../features/kids/kids";
import { iconClose } from "../../images/icons/";
import { convertDateString } from "../../utils/function";
import { setMessage } from "../../features/users/user";
import PopUp from "../PopUp";
import { unwrapResult } from "@reduxjs/toolkit";

const ModalTambahAnak = () => {
  const dispatch = useDispatch();
  const { singleDataAnak, edit, tambahDataAnak, newAnak } = useSelector(
    (store) => store.kids,
  );
  const { allUserName, message } = useSelector((store) => store.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nama, nik, namaIbu, tanggalLahir } = newAnak;

    const currentDate = new Date().toLocaleDateString("af-ZA");

    if (nama === "" || nik === "" || tanggalLahir === "" || namaIbu === "") {
      return dispatch(
        setMessage({
          open: true,
          status: "errror",
          text: "Data tidak boleh kosong !",
        }),
      );
    } else {
      const dataBaru = {
        ...newAnak,
        child_growth: `[{\"date\":\"${new Date().toLocaleDateString("af-ZA")}\",\"height\":0,\"weight\":0},{\"date\":\"${currentDate}\",\"height\":0,\"weight\":0}]`,
      };

      try {
        if (!edit) {
          // Register new child
          const result = await dispatch(newDataAnak(dataBaru));
          const newAnakResult = unwrapResult(result);

          await dispatch(
            connectDataAnakAdmin({
              nikKids: newAnakResult.data.nik,
              namaIbu: newAnakResult.data.namaIbu,
            }),
          );

          // Ensure the data is fetched and updated
          await dispatch(getDataAnak());

          // Reset form and close modal
          dispatch(setTambahDataAnak(false));

          dispatch(
            setNewAnak({ nama: "", nik: "", namaIbu: "", tanggalLahir: "" }),
          );
        } else {
          const dataUpdate = {
            ...newAnak,
            id: singleDataAnak._id,
            nik: newAnak.nik,
            nama: newAnak.nama,
            namaIbu: newAnak.namaIbu,
            tanggalLahir: newAnak.tanggalLahir,
          };

          const result = await dispatch(updateDataAnak(dataUpdate));
          const updatedAnakResult = unwrapResult(result);

          // Ensure the data is fetched and updated
          await dispatch(getDataAnak());

          // Connect the child data
          await dispatch(
            connectDataAnakAdmin({ nikKids: updatedAnakResult.nik, namaIbu }),
          );

          // Reset form and close modal
          await dispatch(setEditAnak(false));
          dispatch(setTambahDataAnak(false));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setNewAnak({ ...newAnak, [name]: value }));
  };

  const handleCloseModal = () => {
    dispatch(setTambahDataAnak(false));
    dispatch(setEditAnak(false));
  };

  useEffect(() => {
    if (edit) {
      const {
        namaIbu = "",
        nama = "",
        nik = "",
        tanggalLahir = "",
      } = singleDataAnak || {};
      dispatch(
        setNewAnak({
          nama,
          nik,
          namaIbu,
          tanggalLahir: convertDateString(tanggalLahir),
        }),
      );
    }
  }, [edit]);

  return (
    <div
      className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-white/20 backdrop-blur-sm ${tambahDataAnak ? "flex" : "hidden"}`}
    >
      <div className="shadow-custom relative h-fit rounded-xl bg-white px-10 py-10 lg:w-1/2">
        <h1 className="text-darkGreen text-2xl font-medium">
          {edit ? "Update" : "Tambah"} Anak
        </h1>

        <form
          className="mt-5 flex flex-col justify-center gap-3"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            {/* NIK */}
            <div className="text-darkGreen flex w-full flex-col gap-2">
              <label htmlFor="nik" className="font-light">
                NIK
              </label>
              <input
                onChange={handleChange}
                type="number"
                name="nik"
                required
                id="nik"
                className="border-grey remove-arrow rounded-lg focus:outline-none focus:ring-0"
                value={newAnak.nik}
              />
            </div>

            {/* NAMA */}
            <div className="text-darkGreen flex w-full flex-col gap-2">
              <label htmlFor="nama" className="font-light">
                Nama
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="nama"
                required
                id="nama"
                className="border-grey rounded-lg focus:outline-none focus:ring-0"
                value={newAnak.nama}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            {/* TANGGAL LAHIR */}
            <div className="text-darkGreen flex w-full flex-col gap-2">
              <label htmlFor="tanggalLahir" className="font-light">
                Tanggal Lahir
              </label>
              <input
                onChange={handleChange}
                type="date"
                name="tanggalLahir"
                required
                id="tanggalLahir"
                className="border-grey rounded-lg focus:outline-none focus:ring-0"
                value={newAnak.tanggalLahir}
              />
            </div>

            {/* NAMA IBU */}
            <div className="text-darkGreen mt-4 flex w-full flex-col gap-2 lg:mt-0">
              <label htmlFor="namaIbu" className="font-light">
                Nama Ibu
              </label>
              <select
                onChange={handleChange}
                name="namaIbu"
                required
                id="namaIbu"
                value={newAnak.namaIbu}
                className="border-grey rounded-lg focus:outline-none focus:ring-0"
              >
                <option value="" disabled>
                  Pilih Nama Ibu
                </option>
                {allUserName.map((name) => {
                  if (name !== "admin")
                    return (
                      <option value={name} key={name}>
                        {name}
                      </option>
                    );
                })}
              </select>
            </div>
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

        <PopUp
          open={message.open}
          type={message.status}
          message={message.text}
        />
      </div>
    </div>
  );
};

export default ModalTambahAnak;
