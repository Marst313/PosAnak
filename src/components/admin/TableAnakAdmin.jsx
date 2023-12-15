import React from 'react';
import { tableHeaderDataAnak } from '../../utils/link';
import { SingleDataAnak } from './';

import logoPanah from '../../images/dataanak/Vector.svg';
import logoUser from '../../images/dataanak/User.svg';

const TableAnakAdmin = ({ style, dataAnak, tambahDataAnak, setTambahDataAnak }) => {
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
          {dataAnak.map((child, index) => {
            return <SingleDataAnak key={index} tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} child={child} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableAnakAdmin;
