import React from "react";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { profile } = useSelector((store) => store.user);

  const handleSubmitPhoto = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <div className="justify-between\\\\\\ mb-10 mt-5 flex flex-col px-4 pt-10 sm:px-6 lg:mt-0 lg:items-start lg:px-0">
      <h1 className="text-center text-2xl font-semibold lg:text-start">
        Edit Profile
      </h1>

      <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row">
        <img
          src={profile.photo}
          alt="image"
          className="border-lightGreen rounded-full border p-1"
        />

        <form className="flex gap-3" onClick={handleSubmitPhoto}>
          <input
            type="file"
            src=""
            alt=""
            accept="image/png, image/jpeg, image/jpg"
            className="bg-yellowPrimary hover:border-greenPrimary hover:text-greenPrimary flex items-center gap-3 rounded-full border px-5 py-2 text-white transition-all duration-500 hover:bg-white"
          />

          <button className="bg-yellowPrimary hover:border-greenPrimary hover:text-greenPrimary flex items-center gap-3 rounded-full border px-5 py-2 text-white transition-all duration-500 hover:bg-white">
            <svg
              className="fill-current"
              width={24}
              height={24}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9997 13.3333C13.4724 13.3333 14.6663 12.1394 14.6663 10.6667C14.6663 9.19391 13.4724 8 11.9997 8C10.5269 8 9.33301 9.19391 9.33301 10.6667C9.33301 12.1394 10.5269 13.3333 11.9997 13.3333Z"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3337 2.66602H12.0003C5.33366 2.66602 2.66699 5.33268 2.66699 11.9993V19.9993C2.66699 26.666 5.33366 29.3327 12.0003 29.3327H20.0003C26.667 29.3327 29.3337 26.666 29.3337 19.9993V13.3327"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.5195 3.45288L20.6795 8.29288C20.4929 8.47955 20.3062 8.83955 20.2795 9.10622L20.0129 10.9595C19.9195 11.6262 20.3862 12.0929 21.0529 11.9995L22.9062 11.7329C23.1595 11.6929 23.5329 11.5195 23.7195 11.3329L28.5595 6.49288C29.3995 5.65288 29.7862 4.69288 28.5595 3.46622C27.3195 2.21288 26.3595 2.61288 25.5195 3.45288Z"
                stroke="white"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.8271 4.14648C25.2405 5.61315 26.3871 6.75982 27.8538 7.17315"
                stroke="white"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.55957 25.2661L10.1329 20.8528C11.1862 20.1461 12.7062 20.2261 13.6529 21.0394L14.0929 21.4261C15.1329 22.3194 16.8129 22.3194 17.8529 21.4261L23.3996 16.6661C24.4396 15.7728 26.1196 15.7728 27.1596 16.6661L29.3329 18.5328"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Unggah Foto
          </button>
        </form>
      </div>

      <hr className="my-5 w-full border" />

      <h1 className="text-center text-2xl font-semibold lg:text-start">
        Edit Informasi
      </h1>

      <div className="mt-5 flex justify-between gap-5">
        <div className="flex w-full flex-col">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="name"
            value={profile.name}
            className="border-grey mt-2 rounded-xl focus:ring-0"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-between gap-5">
        <div className="flex w-full flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="border-grey mt-2 rounded-xl focus:ring-0"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <hr className="my-5 w-full border" />

      <h1 className="text-2xl font-semibold">Ubah Kata Sandi</h1>

      <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col">
          <label htmlFor="password">Kata Sandi Baru</label>
          <input
            type="password"
            id="password"
            className="border-grey mt-2 rounded-xl focus:ring-0"
            name="password"
          />
        </div>

        <div className="flex w-full flex-col">
          <label htmlFor="kataSandiBaru">Konfirmasi Kata Sandi Baru</label>
          <input
            type="password"
            id="kataSandiBaru"
            name="passwordConfirm"
            className="border-grey mt-2 rounded-xl focus:ring-0"
          />
        </div>
      </div>

      <button
        type="button"
        className="bg-lightGreen hover:border-greenPrimary hover:text-greenPrimary mx-auto mt-10 rounded-full border px-10 py-2 text-white transition-all duration-500 hover:bg-white"
        onClick={() => setEdit(false)}
      >
        Simpan
      </button>
    </div>
  );
};

export default EditProfile;
