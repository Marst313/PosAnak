import React, { useEffect, useState } from 'react';
import { tableHeaderDataAnak } from '../../utils/link';
import { SingleDataAnak } from './';

import logoPanah from '../../images/dataanak/Vector.svg';
import logoUser from '../../images/dataanak/User.svg';
import { useSelector } from 'react-redux';

const TableAnakAdmin = ({ style, dataAnak, tambahDataAnak, setTambahDataAnak }) => {
  const [data, setData] = useState([]);
  const { searchAnak } = useSelector((store) => store.kids);

  useEffect(() => {
    const searchDataAnak = dataAnak.filter((item) => item.fields.nama.toLowerCase().includes(searchAnak));

    setData(searchDataAnak);

    // search anak empty
    if (searchAnak === '') {
      const sortedData = [...dataAnak].sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime));
      setData(sortedData);
    }
  }, [searchAnak]);

  useEffect(() => {
    const sortedData = [...dataAnak].sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime));

    setData(sortedData);
  }, []);

  if (data.length <= 0) {
    return <h1>Tidak ada data anak dengan nama {searchAnak}</h1>;
  }

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
          {data.map((child, index) => {
            return <SingleDataAnak key={index} tambahDataAnak={tambahDataAnak} setTambahDataAnak={setTambahDataAnak} child={child} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableAnakAdmin;
