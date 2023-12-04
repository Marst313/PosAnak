import React from 'react';
import { dummyDataKeluarga, tableHeaderKeluarga } from '../../utils/link';

import logoDelete from '../../images/dataanak/delete.svg';
import logoEdit from '../../images/dataanak/editAnak.svg';
import logoPanah from '../../images/dataanak/Vector.svg';
import logoUser from '../../images/dataanak/User.svg';

const TableKeluarga = ({ style }) => {
  return (
    <div className={`relative w-full  overflow-x-auto sm:rounded-lg mt-5  ${style}`}>
      <table className="w-full text-sm text-left rtl:text-right text-greenPrimary bg-white shadow-md rounded-lg">
        <thead className="text-xs  uppercase text-greenPrimary border-b-2 border-grey ">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            {tableHeaderKeluarga.map((header) => {
              return (
                <th scope="col" className="px-6 py-3 whitespace-nowrap " key={header.name}>
                  <div className="flex gap-5">
                    <img src={logoUser} alt="" />
                    <span>{header.name}</span>
                    <img src={logoPanah} alt="" />
                  </div>
                </th>
              );
            })}

            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>

        <tbody>
          {dummyDataKeluarga.map((child, index) => {
            return (
              <tr key={child.noKk} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-lightGreen/30 ">
                <th scope="row" className="px-6 py-4 ">
                  {index + 1}
                </th>
                <td className="px-6 py-4">{child.noKk}</td>
                <td className="px-6 py-4">{child.nikKepalaKeluarga}</td>
                <td className="px-6 py-4 ">{child.kepalaKeluarga}</td>
                <td className="px-6 py-4 whitespace-nowrap w-fit ">{child.anggota} Orang</td>
                <td className="items-start  py-4 flex gap-2 px-4  ">
                  <button>
                    <img src={logoDelete} alt="logo delete" />
                  </button>
                  <button>
                    <img src={logoEdit} alt="logo edit" />
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

export default TableKeluarga;
