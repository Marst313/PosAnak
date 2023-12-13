import React from 'react';
import { useSelector } from 'react-redux';

import { tableHeaderKeluarga } from '../../utils/link';
import SingleKeluarga from './SingleKeluarga';

const TableKeluargaAdmin = ({ style }) => {
  const { dataKeluarga, isLoading } = useSelector((store) => store.family);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
                    <span>{header.name}</span>
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
          {dataKeluarga?.records?.map((child, index) => {
            return <SingleKeluarga child={child} key={index} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableKeluargaAdmin;
