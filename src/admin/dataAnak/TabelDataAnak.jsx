import React from 'react';

import { dummyDataAnak, tableHeaderDataAnak } from '../../utils/link';

import logoDelete from '../../images/dataanak/delete.svg';
import logoEdit from '../../images/dataanak/editAnak.svg';
import logoPanah from '../../images/dataanak/Vector.svg';
import logoGraph from '../../images/dataanak/graph-anak.svg';
import logoUser from '../../images/dataanak/User.svg';

const TabelDataAnak = ({ style, setGraphShow, graphShow }) => {
  return (
    <div className={`relative w-full  overflow-x-auto sm:rounded-lg mt-5  ${style && style}`}>
      <table className="w-full text-sm text-left rtl:text-right text-greenPrimary bg-white shadow-md rounded-lg">
        <thead className="text-xs  uppercase text-greenPrimary border-b-2 border-grey ">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            {tableHeaderDataAnak.map((header) => {
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
          {dummyDataAnak.map((child, index) => {
            return (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-lightGreen/30 ">
                <th scope="row" className="px-6 py-4 ">
                  {index + 1}
                </th>
                <td className="px-6 py-4">{child.nik}</td>
                <td className="px-6 py-4">{child.nama}</td>
                <td className="px-6 py-4 ">{child.tanggalLahir}</td>
                <td className="px-6 py-4 whitespace-nowrap w-fit ">{child.umur} </td>
                <td className="px-6 py-4 whitespace-nowrap w-fit ">{child.namaIbu} </td>
                <td className="items-start  py-4 flex gap-2 px-4  ">
                  <button type="button">
                    <img src={logoDelete} alt="logo delete" />
                  </button>
                  <button type="button">
                    <img src={logoEdit} alt="logo edit" />
                  </button>
                  <button type="button" onClick={() => setGraphShow(!graphShow)}>
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

export default TabelDataAnak;
