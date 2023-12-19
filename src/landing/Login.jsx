import React, { useState } from 'react';
import heroLogin from '../images/hero-login.png';
import axios from 'axios';

import logoPosyandu from '../images/logo-posyandu.png';
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

        dispatch(setDataUser({ token: user.accessToken, email: user.email, uuid: user.uid }));
        navigate('/dashboard/menu');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <section className="px-5 flex  overflow-hidden">
      <div className="w-full h-screen lg:mt-0 lg:w-1/2  flex lg:items-center justify-center flex-col gap-10  ">
        <div className="flex items-center">
          <img src={logoPosyandu} className=" h-10 lg:h-20" alt="Flowbite Logo" />
          <h1 className="text-5xl lg:text-6xl ml-3 font-bold">
            <span className="text-lightGreen">Pos</span>anak
          </h1>
        </div>
        <div className="self-start lg:self-center  ">
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

            <div className="w-full flex items-center justify-between">
              <button type="submit" className="text-white bg-greenPrimary  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-3 py-2 text-center flex items-center gap-5 pl-7">
                Masuk
                <div className="rounded-full bg-lightGreen w-10 h-10 flex items-center justify-center">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49006 13.2628L7.21165 11.9986L11.6506 7.55966H0.5V5.71307H11.6506L7.21165 1.28125L8.49006 0.00994253L15.1165 6.63636L8.49006 13.2628Z" fill="white" />
                  </svg>
                </div>
              </button>

              <p className="text-xs whitespace-nowrap text-darkGreen ml-3">
                Tidak mempunyai akun?{' '}
                <Link className="text-greenStabilo text-lg ml-2" to="/daftar">
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
