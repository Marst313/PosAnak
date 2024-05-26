import React, { useState } from 'react';
import heroLogin from '../images/hero-login2.png';
import axios from 'axios';

import logoPosyandu from '../images/logo-posyandu.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDataUser } from '../features/users/user';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState({
    text: '',
    msg: false,
    status: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          setDataUser({
            token: user.accessToken,
            email: user.email,
            uuid: user.uid,
          })
        );

        navigate('/dashboard/menu');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode.split('/')[1] == 'too-many-requests') {
          setMessage({
            ...message,
            text: 'Terlalu banyak, Coba Lagi Nanti',
            msg: true,
          });
        } else {
          setMessage({
            ...message,
            text: 'Email atau Password Salah',
            msg: true,
          });
        }
      });
  };
  return (
    <section className="px-5 flex  overflow-hidden">
      {message.msg && (
        <div
          className={`${'p-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-52 flex flex-col justify-between items-center `}
        >
          <div className="flex items-center">
            <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium text-red-700">Perhatian !</h3>
          </div>
          <div className="mt-2 mb-4 text-sm capitalize">{message.text}</div>

          <button
            type="button"
            className={` text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700`}
            onClick={() => {
              setMessage({ msg: false, text: '', status: 0 });
            }}
          >
            Oke
          </button>
        </div>
      )}

      <div className="w-full h-screen lg:mt-0 lg:w-1/2  flex lg:items-center justify-center flex-col gap-10">
        <div className="flex items-center">
          <img src={logoPosyandu} className=" h-10 lg:h-20" alt="Flowbite Logo" />
          <h1 className="text-5xl lg:text-6xl ml-3 font-bold">
            <span className="text-lightGreen">Pos</span>anak
          </h1>
        </div>
        <div className="self-start lg:self-center w-full lg:w-1/2">
          <h5 className="font-medium text-3xl">Masuk</h5>

          <form className="mt-5 w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm  text-darkGreen font-light ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-grey text-gray-900 text-sm rounded-lg focus:ring-greenStabilo focus:border-greenStabilo block w-full p-2.5"
                required={true}
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-light text-darkGreen dark:text-white">
                Kata Sandi
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-grey text-gray-900 text-sm rounded-lg focus:ring-greenStabilo focus:border-greenStabilo block w-full p-2.5"
                value={user.password}
                required={true}
                onChange={handleChange}
              />
            </div>

            <div className="w-40 lg:w-full lg:flex items-center justify-between">
              <button type="submit" className="text-white bg-greenPrimary  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-3 py-2 text-center flex items-center gap-5 pl-7">
                Masuk
                <div className="rounded-full bg-lightGreen lg:ml-5 w-10 h-10 flex items-center justify-center">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49006 13.2628L7.21165 11.9986L11.6506 7.55966H0.5V5.71307H11.6506L7.21165 1.28125L8.49006 0.00994253L15.1165 6.63636L8.49006 13.2628Z" fill="white" />
                  </svg>
                </div>
              </button>

              <p className="text-xs whitespace-nowrap text-darkGreen ml-3 mt-3">
                Tidak mempunyai akun?{' '}
                <Link className="text-greenStabilo text-xs ml-2" to="/daftar">
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/2 hidden lg:flex items-center justify-end">
        <img src={heroLogin} alt="hero login image" className=" lg:h-[40rem]" />
      </div>
    </section>
  );
};

export default Login;
