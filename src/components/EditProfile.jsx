import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleUser,
  setMessage,
  updateUserPassword,
  updateUserProfile,
} from "../features/users/user";
import PopUp from "./PopUp";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const EditProfile = () => {
  const { profile, message } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const jwt = jwtDecode(Cookies.get("jwt"));

  const [loadingImages, setLoadingImages] = useState(false);
  const [images, setImages] = useState("");
  const [dataPassword, setDataPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [data, setData] = useState({
    name: profile.name,
    email: profile.email,
    photo: profile.photo,
  });

  const uploadImageAndGetUrl = async (imageFile) => {
    const imageRef = ref(storage, `profiles/${imageFile.name + uuidv4()}`);
    await uploadBytes(imageRef, imageFile);
    return await getDownloadURL(imageRef);
  };

  useEffect(() => {
    return () => {
      // Clean up URL object when component unmounts
      if (data.photo && typeof data.photo === "string") {
        URL.revokeObjectURL(data.photo);
      }
    };
  }, [data.photo]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setData((prevData) => {
        if (prevData.photo && typeof prevData.photo === "string") {
          URL.revokeObjectURL(prevData.photo);
        }
        return { ...prevData, photo: objectUrl };
      });
    }

    setImages(file);
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();

    if (!data.email || !data.name) {
      return dispatch(
        setMessage({
          open: true,
          status: "error",
          text: "Nama atau Email tidak boleh kosong!",
        }),
      );
    }
    setLoadingImages(true);
    try {
      let imageUrl = images || data.photo;

      if (images instanceof File) {
        imageUrl = await uploadImageAndGetUrl(images);
      }

      const updatedData = { ...data, photo: imageUrl };
      await dispatch(updateUserProfile(updatedData));
      await dispatch(getSingleUser(jwt.id));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingImages(false);
    }
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();

    if (dataPassword.newPassword !== dataPassword.confirmPassword) {
      return dispatch(
        setMessage({
          open: true,
          status: "error",
          text: "Password tidak sesuai",
        }),
      );
    }

    dispatch(updateUserPassword(dataPassword));
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setDataPassword({ ...dataPassword, [name]: value });
  };
  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="mb-10 mt-5 flex w-full justify-between px-4 pt-10 sm:px-6 lg:mt-0 lg:px-0">
      <PopUp message={message.text} type={message.status} open={message.open} />

      <div className="mt-20 flex flex-col items-center gap-10">
        <h1 className="text-center text-2xl font-semibold lg:text-start">
          Edit Profile
        </h1>
        <img
          src={data.photo}
          alt="image"
          className="border-lightGreen h-72 w-72 rounded-full border object-cover p-1"
        />

        <form className="flex flex-col gap-3" onSubmit={handleSubmitProfile}>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleImageChange}
            className="bg-yellowPrimary hover:border-greenPrimary hover:text-greenPrimary flex items-center gap-3 rounded-full border px-5 py-2 text-white transition-all duration-500 hover:bg-white"
          />

          <div className="flex w-full flex-col">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              name="name"
              value={data.name}
              required
              className="border-grey mt-2 rounded-xl focus:ring-0"
              onChange={handleChangeProfile}
            />
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex w-full flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="border-grey mt-2 rounded-xl focus:ring-0"
                value={data.email}
                onChange={handleChangeProfile}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loadingImages}
            className="bg-lightGreen hover:border-greenPrimary hover:text-greenPrimary mx-auto w-full rounded-full border px-10 py-2 text-white transition-all duration-500 hover:bg-white"
          >
            {loadingImages ? "Loading..." : "Update"}
          </button>
        </form>
      </div>

      <hr className="bg-greenPrimary/20 mt-32 h-full w-1" />

      {/* Ubah kata sandi */}
      <form
        className="mt-5 flex w-1/2 flex-col items-start justify-end gap-10"
        onSubmit={handleSubmitPassword}
      >
        <h1 className="text-2xl font-semibold">Ubah Kata Sandi</h1>

        <div className="containerInput">
          <input
            type="password"
            required="required"
            name="currentPassword"
            onChange={handleChangePassword}
          />
          <label>Kata Sandi Lama</label>
          <i></i>
        </div>

        <div className="containerInput">
          <input
            type="password"
            required="required"
            name="newPassword"
            onChange={handleChangePassword}
          />
          <label>Kata Sandi Baru</label>
          <i></i>
        </div>
        <div className="containerInput">
          <input
            type="password"
            required="required"
            name="confirmPassword"
            onChange={handleChangePassword}
          />
          <label>Konfirmasi Kata Sandi</label>
          <i></i>
        </div>

        <button
          type="submit"
          className="bg-lightGreen hover:border-greenPrimary hover:text-greenPrimary mt-6 self-start rounded-full border px-10 py-2 text-white transition-all duration-500 hover:bg-white"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
