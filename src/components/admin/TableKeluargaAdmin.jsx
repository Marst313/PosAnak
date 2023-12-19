import React, { useEffect, useState } from 'react';

import { tableHeaderKeluarga } from '../../utils/link';
import { SingleKeluarga } from './';
import { useSelector } from 'react-redux';

const TableKeluargaAdmin = ({ style, dataKeluarga }) => {
  const [data, setData] = useState([]);
  const { searchKeluarga } = useSelector((store) => store.family);

  useEffect(() => {
    const filteredData = dataKeluarga.filter((item) => item.fields.namaKepalaKeluarga.toLowerCase().includes(searchKeluarga));

    setData(filteredData);
  }, [searchKeluarga]);

  useEffect(() => {
    const sortedData = [...dataKeluarga].sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime));

    setData(sortedData);
  }, []);

  if (data.length <= 0) {
    return <h1>Tidak ada kepala keluarga dengan nama {searchKeluarga}</h1>;
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
          {data?.map((child, index) => {
            return <SingleKeluarga child={child} key={index} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableKeluargaAdmin;
