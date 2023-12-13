import React from 'react';

const FilterKegiatan = () => {
  return (
    <form id="filter-kegiatan" className="flex flex-col bg-white pb-5 rounded-lg shadow-custom h-fit">
      <h5 className="bg-greenPrimary text-white pl-5 rounded-t-lg py-5 font-semibold text-lg">Filter kegiatan</h5>

      <div className="p-5 flex flex-col gap-5 text-darkGreen font-semibold">
        <div className="flex flex-col gap-3">
          <label htmlFor="waktu">Waktu</label>
          <input type="date" id="waktu" className="rounded-md border border-grey focus:ring-0 focus:outline-none" />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="kategori">Kategori</label>
          <select name="" id="" className="rounded-md border border-grey focus:ring-0 focus:outline-none ">
            <option value="">Balita</option>
            <option value="">Bayi</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="kegiatan">Nama Kegiatan</label>
          <input type="text" id="kegiatan" className="rounded-md border border-grey focus:ring-0 focus:outline-none" />
        </div>
      </div>

      <button className="bg-greenPrimary w-32 self-center text-white px-5 py-3 font-semibold rounded-full">Cari</button>
    </form>
  );
};

export default FilterKegiatan;
