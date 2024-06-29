import React, { useEffect, useState } from 'react';
import profile from '../images/contohProfile.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Profiles = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const { allUser, uuid, isLoading, singleUser } = useSelector((store) => store.user);
  const [edit, setEdit] = useState(false);
  const [dataProfile, setDataProfile] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataProfile({ ...dataProfile, [name]: value });
  };

  useEffect(() => {
    if (user !== null) {
      const email = user.email;
      const photoURL = user.photoURL;

      setDataProfile({
        ...dataProfile,
        email,
        name: email.split('@')[0],
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex flex-col items-center lg:items-stretch w-full lg:rounded-3xl lg:px-20 pb-14 overflow-auto  bg-white">
      {edit ? (
        <div
          className="px-4 sm:px-6 lg:px-0 
    mt-5 lg:mt-0 pt-10 flex flex-col  lg:items-start justify-between\\\ mb-10"
        >
          <h1 className="text-2xl text-center lg:text-start font-semibold">Edit Profile</h1>

          <div className="flex flex-col lg:flex-row items-center mt-10 gap-10">
            <img src={profile} alt="image" className="rounded-full p-1 border border-lightGreen" />

            <button type="button" className="bg-yellowPrimary text-white px-5 py-2 rounded-full border hover:border-greenPrimary flex items-center gap-3 hover:bg-white hover:text-greenPrimary transition-all duration-500">
              <svg className="fill-current" width={24} height={24} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <path d="M24.8271 4.14648C25.2405 5.61315 26.3871 6.75982 27.8538 7.17315" stroke="white" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M3.55957 25.2661L10.1329 20.8528C11.1862 20.1461 12.7062 20.2261 13.6529 21.0394L14.0929 21.4261C15.1329 22.3194 16.8129 22.3194 17.8529 21.4261L23.3996 16.6661C24.4396 15.7728 26.1196 15.7728 27.1596 16.6661L29.3329 18.5328"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Unggah Foto
            </button>
          </div>

          <hr className="border w-full my-5" />

          <h1 className="text-2xl text-center lg:text-start font-semibold">Edit Informasi</h1>

          <div className="mt-5 flex justify-between gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="nama">Nama</label>
              <input type="text" id="nama" name="name" value={dataProfile.name} className="rounded-xl focus:ring-0 border-grey mt-2" onChange={handleChange} />
            </div>
          </div>

          <div className="mt-5 flex justify-between gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className="rounded-xl focus:ring-0 border-grey mt-2" value={dataProfile.email} onChange={handleChange} />
            </div>
          </div>

          <hr className="border w-full my-5" />

          <h1 className="text-2xl font-semibold">Ubah Kata Sandi</h1>

          <div className="mt-5  flex flex-col lg:flex-row justify-between gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="password">Kata Sandi Baru</label>
              <input type="password" id="password" className="rounded-xl focus:ring-0 border-grey mt-2" name="password" />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="kataSandiBaru">Konfirmasi Kata Sandi Baru</label>
              <input type="password" id="kataSandiBaru" name="passwordConfirm" className="rounded-xl focus:ring-0 border-grey mt-2" />
            </div>
          </div>

          <button type="button" className="mx-auto mt-10 bg-lightGreen text-white px-10 py-2 rounded-full border hover:bg-white hover:border-greenPrimary hover:text-greenPrimary transition-all duration-500" onClick={() => setEdit(false)}>
            Simpan
          </button>
        </div>
      ) : (
        <>
          <div
            className="px-4 sm:px-6 lg:px-0 
       mt-5 lg:mt-0 pt-10 lg:flex  items-start justify-between mb-10"
          >
            <h1 className="text-2xl font-semibold text-center lg:text-start lg:mt-0">Informasi Profile</h1>

            <img src={profile} alt="hero image" className="rounded-full p-1 border border-lightGreen w-56 h-56 mt-10 lg:mt-16" />
            <button
              type="button"
              onClick={() => setEdit(true)}
              className="bg-[#F9A319] px-5 py-2 mt-10 hidden lg:flex lg:mt-0 text-white gap-3 rounded-3xl font-semibold hover:bg-white border hover:border-greenPrimary hover:text-greenPrimary transition-all"
            >
              <svg width={24} className="fill-current" height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M16.0399 3.02025L8.15988 10.9003C7.85988 11.2003 7.55988 11.7903 7.49988 12.2203L7.06988 15.2303C6.90988 16.3203 7.67988 17.0803 8.76988 16.9303L11.7799 16.5003C12.1999 16.4403 12.7899 16.1403 13.0999 15.8403L20.9799 7.96025C22.3399 6.60025 22.9799 5.02025 20.9799 3.02025C18.9799 1.02025 17.3999 1.66025 16.0399 3.02025Z"
                  stroke="#FFFFFF"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039" stroke="#FFFFFF" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Edit
            </button>
          </div>
          <hr />

          <div className="mt-5 p-2">
            <h1 className="text-2xl font-semibold">Informasi Profile</h1>

            <div className="mt-5 flex justify-between gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="nama">Nama</label>
                <input type="text" id="nama" value={dataProfile.name} className="rounded-xl focus:ring-0 border-grey mt-2" disabled />
              </div>
            </div>

            <div className="mt-5 flex justify-between gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="rounded-xl focus:ring-0 border-grey mt-2" value={dataProfile.email} disabled />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setEdit(true)}
              className="bg-[#F9A319] px-5 py-2 mt-5 lg:hidden flex lg:mt-0 text-white gap-3 rounded-3xl font-semibold hover:bg-white border hover:border-greenPrimary hover:text-greenPrimary transition-all"
            >
              <svg width={24} className="fill-current" height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M16.0399 3.02025L8.15988 10.9003C7.85988 11.2003 7.55988 11.7903 7.49988 12.2203L7.06988 15.2303C6.90988 16.3203 7.67988 17.0803 8.76988 16.9303L11.7799 16.5003C12.1999 16.4403 12.7899 16.1403 13.0999 15.8403L20.9799 7.96025C22.3399 6.60025 22.9799 5.02025 20.9799 3.02025C18.9799 1.02025 17.3999 1.66025 16.0399 3.02025Z"
                  stroke="#FFFFFF"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039" stroke="#FFFFFF" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Edit
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Profiles;
