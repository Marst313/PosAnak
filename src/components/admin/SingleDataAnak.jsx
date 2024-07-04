import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertDateString, convertUsia } from "../../utils/function";
import {
  deleteDataAnak,
  getDataAnak,
  getSingleDataAnak,
  setEditAnak,
  setGraph,
  setTambahDataAnak,
} from "../../features/kids/kids";
import {
  editAnakIcon,
  deleteIcon,
  graphAnakIcon,
} from "../../images/dataanak/";

const SingleDataAnak = ({ child, index }) => {
  const dispatch = useDispatch();
  const { graphShow } = useSelector((store) => store.kids);
  const formattedDate = convertDateString(child.tanggalLahir);
  const usia = convertUsia(formattedDate);

  const [popUp, setPopUp] = useState(false);

  const openModal = () => {
    setPopUp(true);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteDataAnak(child._id));
      await dispatch(getDataAnak());
      setPopUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      await dispatch(getSingleDataAnak(id));
      dispatch(setTambahDataAnak(true));
      dispatch(setEditAnak(true));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGraphShow = async () => {
    try {
      if (!graphShow) {
        await dispatch(getSingleDataAnak(child._id));
      }

      await dispatch(setGraph(!graphShow));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="hover:bg-lightGreen/30 border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th scope="row" className="px-6 py-4">
        {index + 1}
      </th>
      <td className="px-6 py-4">{child.nik}</td>
      <td className="whitespace-nowrap px-6 py-4 capitalize">{child.nama}</td>
      <td className="px-6 py-4">{formattedDate}</td>
      <td className="w-fit whitespace-nowrap px-6 py-4">{usia}</td>
      <td className="w-fit whitespace-nowrap px-6 py-4 capitalize">
        {child.namaIbu}{" "}
      </td>
      <td className="flex items-center justify-center gap-2 px-4 py-4">
        <button type="button" onClick={openModal}>
          <img src={deleteIcon} alt="logo delete" />
        </button>
        <button type="button">
          <img
            src={editAnakIcon}
            alt="logo edit"
            onClick={() => handleEdit(child._id)}
          />
        </button>
        <button type="button" onClick={handleGraphShow}>
          <img src={graphAnakIcon} alt="logo graph" />
        </button>
      </td>

      {/* CONFIRM DELETE BUTTON */}
      <th
        className={`fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 ${popUp ? "flex" : "hidden"}`}
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setPopUp(false)}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 text-center md:p-5">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this data?
              </h3>
              <button
                type="button"
                className="me-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                onClick={handleDelete}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                onClick={() => setPopUp(false)}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </th>
      {/* CONFIRM DELETE BUTTON */}
    </tr>
  );
};

export default SingleDataAnak;
