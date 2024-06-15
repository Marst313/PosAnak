import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logoGraph from '../../images/dataanak/graph-anak.svg';
import logoDelete from '../../images/dataanak/delete.svg';
import logoEdit from '../../images/dataanak/editAnak.svg';

import { convertDateString, convertUsia } from '../../utils/function';
import { deleteDataAnak, getDataAnak, getSingleDataAnak, setEditAnak, setGraph } from '../../features/kids/kids';

const SingleDataAnak = ({ child, index, tambahDataAnak, setTambahDataAnak }) => {
  const { graphShow } = useSelector((store) => store.kids);
  const dispatch = useDispatch();

  const [popUp, setPopUp] = useState(false);

  const { nik, nama, tanggalLahir, namaIbu } = child;
  const formattedDate = convertDateString(tanggalLahir);
  const usia = convertUsia(formattedDate);

  const handleDelete = async () => {
    try {
      await dispatch(deleteDataAnak(child.id));
      await dispatch(getDataAnak());
      setPopUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setPopUp(true);
  };
  const handleEdit = (id) => {
    setTambahDataAnak(true);
    dispatch(setEditAnak(true));
    dispatch(getSingleDataAnak(id));
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
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-lightGreen/30 ">
      <th scope="row" className="px-6 py-4 ">
        {index + 1}
      </th>
      <td className="px-6 py-4">{nik}</td>
      <td className="px-6 py-4 whitespace-nowrap capitalize">{nama}</td>
      <td className="px-6 py-4 ">{formattedDate}</td>
      <td className="px-6 py-4 whitespace-nowrap w-fit">{usia}</td>
      <td className="px-6 py-4 whitespace-nowrap w-fit capitalize">{namaIbu} </td>
      <td className="  py-4 flex gap-2 px-4  items-center justify-center ">
        <button type="button" onClick={openModal}>
          <img src={logoDelete} alt="logo delete" />
        </button>
        <button type="button">
          <img src={logoEdit} alt="logo edit" onClick={() => handleEdit(child._id)} />
        </button>
        <button type="button" onClick={handleGraphShow}>
          <img src={logoGraph} alt="logo graph" />
        </button>
      </td>

      {popUp && (
        <th className={`flex  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setPopUp(false)}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this data?</h3>
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  onClick={handleDelete}
                >
                  Yes, I'm sure
                </button>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => setPopUp(false)}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </th>
      )}
    </tr>
  );
};

export default SingleDataAnak;
