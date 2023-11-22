import React from 'react';
import profile from '../images/contohProfile.jpeg';
import logoEdit from '../images/edit.svg';

const Profiles = () => {
  return (
    <div className="relative flex flex-col  bg-white ml-10 mr-10  w-2/3 rounded-3xl px-20 h-fit pb-14">
      <div
        className="px-4 sm:px-6 lg:px-0 
       mt-5 lg:mt-0 pt-10 flex  items-start justify-between mb-10"
      >
        <h1 className="text-2xl font-semibold">Informasi Profiles</h1>

        <img src={profile} alt="" className="rounded-full p-1 border border-lightGreen w-44 h-44 mt-10" />
        <button type="button" className="flex bg-[#F9A319] px-5 py-2 text-white gap-3 rounded-3xl font-semibold">
          <img src={logoEdit} alt="logo edit" className="text-white" />
          Edit
        </button>
      </div>
      <hr />

      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Informasi Profiles</h1>

        <div className="mt-5   flex justify-between gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="nik">NIK</label>
            <input type="text" id="nik" className="rounded-xl focus:ring-0 border-grey" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" className="rounded-xl focus:ring-0 border-grey" />
          </div>
        </div>

        <div className="mt-5   flex justify-between gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="rounded-xl focus:ring-0 border-grey" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="nohp">No HP</label>
            <input type="text" id="nohp" className="rounded-xl focus:ring-0 border-grey" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
