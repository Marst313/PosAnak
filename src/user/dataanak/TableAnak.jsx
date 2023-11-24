import React from 'react';
import { dummyData, tableHeader } from '../../utils/link';

import logoDelete from '../../images/dataanak/delete.svg';
import logoEdit from '../../images/dataanak/editAnak.svg';
import logoGraph from '../../images/dataanak/graph-anak.svg';
import logoPanah from '../../images/dataanak/Vector.svg';
import logoUser from '../../images/dataanak/User.svg';

const TableAnak = () => {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg mt-5">
      <table className="w-3/4 text-sm text-left rtl:text-right text-greenPrimary bg-white shadow-md ">
        <thead className="text-xs  uppercase text-greenPrimary border-b-2 border-grey ">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            {tableHeader.map((header) => {
              return (
                <th scope="col" className="px-6 py-3 whitespace-nowrap" key={header.name}>
                  <div className="flex gap-5">
                    <img src={logoUser} alt="" />
                    <span>{header.name}</span>
                    <img src={logoPanah} alt="" />
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {dummyData.map((child, index) => {
            return (
              <tr key={child.nik} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-lightGreen/30 ">
                <th scope="row" className="px-6 py-4 ">
                  {index + 1}
                </th>
                <td className="px-6 py-4">{child.nik}</td>
                <td className="px-6 py-4">{child.nama}</td>
                <td className="px-6 py-4">{child.tanggalLahir}</td>
                <td className="px-6 py-4 whitespace-nowrap">{child.umur}</td>
                <td className="px-6 py-4 flex gap-2  ">
                  <button>
                    <img src={logoDelete} alt="logo delete" />
                  </button>
                  <button>
                    <img src={logoEdit} alt="logo edit" />
                  </button>
                  <button>
                    <img src={logoGraph} alt="logo graph" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableAnak;
