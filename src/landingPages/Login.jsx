import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import heroLogin from "../images/hero-login2.png";
import logoPosyandu from "../images/logo-posyandu.webp";
import { loginUser, setMessage } from "../features/users/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, jwt } = useSelector((store) => store.user);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = user;

      if (!email || !password)
        return dispatch(
          setMessage({
            ...message,
            text: "Email atau password tidak boleh kosong!",
            msg: true,
            status: "error",
          }),
        );

      await dispatch(loginUser({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const jwt = Cookies.get("jwt");

    if (jwt) {
      navigate("/dashboard/menu");
    }
  }, [jwt]);

  return (
    <section className="flex overflow-hidden px-5">
      {message.open && (
        <div
          className={`${"rounded-lg border border-red-300 bg-red-50 p-4 text-red-800 dark:bg-gray-800 dark:text-red-400"} absolute left-1/2 top-1/2 flex h-52 w-64 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-between`}
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
            <h3 className="text-lg font-medium text-red-700">Perhatian !</h3>
          </div>
          <div className="mb-4 mt-2 text-sm capitalize">{message.text}</div>

          <button
            type="button"
            className={`me-2 inline-flex items-center rounded-lg bg-red-800 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700`}
            onClick={() => {
              dispatch(
                setMessage({ open: false, text: "", status: "success" }),
              );
            }}
          >
            Oke
          </button>
        </div>
      )}

      <div className="flex h-screen w-full flex-col justify-center gap-10 lg:mt-0 lg:w-1/2 lg:items-center">
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
          <h5 className="text-3xl font-medium">Masuk</h5>

          <form className="mt-5 w-full" onSubmit={handleSubmit}>
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
                value={user.email}
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
                name="password"
                id="password"
                className="border-grey focus:ring-greenStabilo focus:border-greenStabilo block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900"
                value={user.password}
                required={true}
                onChange={handleChange}
              />
            </div>

            <div className="w-40 items-center justify-between lg:flex lg:w-full">
              <button
                type="submit"
                className="bg-greenPrimary flex items-center gap-5 rounded-full px-3 py-2 pl-7 text-center text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Masuk
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
                Tidak mempunyai akun?{" "}
                <Link className="text-greenStabilo ml-2 text-xs" to="/daftar">
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden w-1/2 items-center justify-end lg:flex">
        <img src={heroLogin} alt="hero login image" className="lg:h-[40rem]" />
      </div>
    </section>
  );
};

export default Login;
