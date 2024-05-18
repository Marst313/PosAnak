import React from 'react';
import { useDispatch } from 'react-redux';

import logoDelete from '../../images/dataanak/delete.svg';
import logoEdit from '../../images/dataanak/editAnak.svg';
import { deleteDataKeluarga, getDataKeluarga } from '../../features/family/family';

const SingleKeluarga = ({ index, child }) => {
  const dispatch = useDispatch();

  const handleDeleteKeluarga = async () => {
    try {
      await dispatch(deleteDataKeluarga(child.id));
      await dispatch(getDataKeluarga());
    } catch (error) {
      console.log(error);
    }
  };

  const { nikKepalaKeluarga, namaKepalaKeluarga, anggota, noKK } = child.fields;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-lightGreen/30 ">
      <th scope="row" className="px-6 py-4 ">
        {index + 1}
      </th>
      <td className="px-6 py-4">{noKK}</td>
      <td className="px-6 py-4">{nikKepalaKeluarga}</td>
      <td className="px-6 py-4 capitalize">{namaKepalaKeluarga}</td>
      <td className="px-6 py-4 whitespace-nowrap w-fit ">{anggota} Orang</td>
      <td className="items-start  py-4 flex gap-2 px-4  ">
        <button type="button" onClick={handleDeleteKeluarga}>
          <img src={logoDelete} alt="logo delete" />
        </button>
        <button type="button">
          <img src={logoEdit} alt="logo edit" />
        </button>
      </td>
    </tr>
  );
};

export default SingleKeluarga;
