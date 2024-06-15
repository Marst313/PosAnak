import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterKegiatan } from '../../features/activity/activity';

const FilterKegiatan = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    waktu: '',
    namaKegiatan: '',
    kategori: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { kategori, waktu, namaKegiatan } = filter;

    dispatch(setFilterKegiatan({ kategori, namaKegiatan, waktu }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilter({ ...filter, [name]: value });
  };
  const handleOnReset = (e) => {
    setFilter({ ...filter, waktu: '', namaKegiatan: '', kategori: '' });
    dispatch(setFilterKegiatan({ kategori: '', namaKegiatan: '', waktu: '' }));
  };

  return (
    <form id="filter-kegiatan" className="flex flex-col bg-white pb-5 rounded-lg shadow-custom h-fit" onSubmit={handleSubmit}>
      <h5 className="bg-greenPrimary text-white pl-5 rounded-t-lg py-5 font-semibold text-lg">Filter kegiatan</h5>

      <div className="p-5 flex flex-col gap-5 text-darkGreen font-semibold">
        <div className="flex flex-col gap-3">
          <label htmlFor="waktu">Waktu</label>
          <input type="date" id="waktu" className="rounded-md border border-grey focus:ring-0 focus:outline-none" name="waktu" onChange={handleChange} value={filter.waktu} />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="kategori">Kategori</label>
          <select id="kategori" className="rounded-md border border-grey focus:ring-0 focus:outline-none " name="kategori" onChange={handleChange} value={filter.kategori}>
            <option value="" className="text-opacity-10">
              Pilih kategori
            </option>
            <option value="balita">Balita</option>
            <option value="bayi">Bayi</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="kegiatan">Nama Kegiatan</label>
          <input type="text" id="kegiatan" className="rounded-md border border-grey focus:ring-0 focus:outline-none" name="namaKegiatan" onChange={handleChange} value={filter.namaKegiatan} />
        </div>
      </div>

      <button className="bg-greenPrimary w-32 self-center text-white px-5 py-2 font-semibold rounded-full hover:bg-opacity-80 ">Cari</button>

      <button className="bg-redPrimary w-32 self-center text-white px-5 py-2 font-semibold rounded-full hover:bg-opacity-80 mt-5" onClick={handleOnReset}>
        Reset
      </button>
    </form>
  );
};

export default FilterKegiatan;
