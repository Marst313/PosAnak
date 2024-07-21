import React, { useState } from "react";
import heroLogin from "../images/hero-login2.png";

import logoPosyandu from "../images/logo-posyandu.webp";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/users/user";
import { useDispatch, useSelector } from "react-redux";

const Daftar = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((store) => store.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [message, setMessage] = useState({
    text: "",
    msg: false,
    status: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name } = user;

    if (!email || !password || !name)
      return setMessage({
        ...message,
        text: "Email or password cannot be empty",
        msg: true,
        status: 400,
      });

    const data = await dispatch(registerUser({ email, password, name }));

    if (data.meta.requestStatus === "rejected") {
      return setMessage({
        ...message,
        text: data.payload,
        msg: true,
        status: 400,
      });
    } else {
      setMessage({
        ...message,
        text: "Berhasil membuat akun baru",
        msg: true,
        status: 200,
      });
    }
  };

  return (
    <section className="relative flex overflow-hidden px-5">
      <div className="flex h-screen w-full flex-col justify-center gap-6 lg:mt-0 lg:w-1/2 lg:items-center">
        <div className="flex items-center">
          <img
            src={logoPosyandu}
            className="h-10 lg:h-20"
            alt="Flowbite Logo"
          />
          <h1 className="ml-3 text-5xl font-bold lg:text-6xl">
            <span className="text-lightGreen">Pos</span>anak
          </h1>
        </div>

        <div className="w-full self-start lg:w-1/2 lg:self-center">
          <h5 className="text-3xl font-medium">Daftar</h5>

          <form className="mt-5 w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="nama"
                className="text-darkGreen mb-2 block text-sm font-light"
              >
                Nama
              </label>
              <input
                type="name"
                id="nama"
                name="name"
                className="border-grey focus:ring-greenStabilo focus:border-greenStabilo block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-darkGreen mb-2 block text-sm font-light"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-grey focus:ring-greenStabilo focus:border-greenStabilo block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="text-darkGreen mb-2 block text-sm font-light dark:text-white"
              >
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-grey focus:ring-greenStabilo focus:border-greenStabilo block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900"
                required={true}
                onChange={handleChange}
              />
            </div>

            <div className="w-40 items-center justify-between lg:flex lg:w-full">
              <button
                type="submit"
                className="bg-greenPrimary flex items-center gap-5 rounded-full px-3 py-2 pl-7 text-center text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Daftar"}
                <div className="bg-lightGreen flex h-10 w-10 items-center justify-center rounded-full lg:ml-5">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.49006 13.2628L7.21165 11.9986L11.6506 7.55966H0.5V5.71307H11.6506L7.21165 1.28125L8.49006 0.00994253L15.1165 6.63636L8.49006 13.2628Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>

              <p className="text-darkGreen ml-3 mt-3 whitespace-nowrap text-xs">
                Tidak mempunyai akun?
                <Link className="text-greenStabilo ml-2 text-xs" to="/login">
                  Masuk
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden w-1/2 items-center justify-end lg:flex">
        <img src={heroLogin} alt="hero login image" className="lg:h-[40rem]" />
      </div>

      {message.msg === true && (
        <div
          className={`${
            message.status === 400
              ? "rounded-lg border border-red-300 bg-red-50 p-4 text-red-800 dark:bg-gray-800 dark:text-red-400"
              : "mb-4 rounded-lg border border-green-300 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-gray-800 dark:text-green-400"
          } absolute left-1/2 top-1/2 h-fit w-fit -translate-x-1/2 -translate-y-1/2 transform`}
        >
          <div className="flex items-center">
            <svg
              className="me-2 h-4 w-4 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium">Warning !</h3>
          </div>
          <div className="mb-4 mt-2 text-sm">{message.text}</div>

          <button
            type="button"
            className={`${
              message.status === 400
                ? "me-2 inline-flex items-center rounded-lg bg-red-800 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                : "me-2 inline-flex items-center rounded-lg bg-green-800 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            } `}
            onClick={() => {
              setMessage({ msg: false, text: "", status: 0 });
              if (message.status === 200) {
                navigate("/login");
              }
            }}
          >
            Okay
          </button>
        </div>
      )}
    </section>
  );
};

export default Daftar;

{
  /* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-fit w-fit">
  <div className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium">Success !</h3>
  </div>
  <div className="mt-2 mb-4 text-sm">{message.text}</div>

  <button
    type="button"
    className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    onClick={() => setMessage({ msg: false, text: '' })}
  >
    Okay
  </button>
</div>; */
}
