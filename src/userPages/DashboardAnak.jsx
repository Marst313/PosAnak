import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { parseStringJson } from "../utils/function";
import { SearchBarUser, TableAnakUser } from "../components/user";
import Loading from "../components/Loading";
import { editAnak, add } from "../images/icons/";
import gambarAnak from "../images/dashboard/gambarAnak.png";
import ruller from "../images/dashboard/ruller.png";
import arrow from "../images/dashboard/arrow.png";
import timbangan from "../images/dashboard/scales.png";
import Charts from "../components/Charts";
import StuntingResult from "../components/user/modalStunting";
import AddAnak from "../components/user/modalTambahAnak";
import { connectDataAnak, setIsKidThere } from "../features/kids/kids";

const DashboardAnak = () => {
  const {
    dataAnak,
    isLoading,
    graphShow,
    singleDataAnak,
    isKidsThere,
    kidsBio,
    allDataAnak,
  } = useSelector((store) => store.kids);
  const [dataPertumbuhan, setDataPertumbuhan] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenAnak, setIsModalOpenAnak] = useState(false);

  const dispatch = useDispatch();

  const openModalstunting = () => {
    setIsModalOpen(true);
  };
  const closeModalstunting = () => {
    setIsModalOpen(false);
  };

  const openModalAnak = () => {
    setIsModalOpenAnak(true);
  };
  const closeModalAnak = () => {
    setIsModalOpenAnak(false);
  };

  const handleConnectDataAnak = () => {
    dispatch(connectDataAnak({ nik: kidsBio.nik }));
    dispatch(setIsKidThere(true));
  };

  useEffect(() => {
    if (graphShow && singleDataAnak?.child_growth) {
      const result = parseStringJson(singleDataAnak.child_growth);

      setDataPertumbuhan(result);
    }
  }, [graphShow, singleDataAnak]);

  useEffect(() => {
    dispatch(connectDataAnak());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover px-4 sm:px-6 lg:bg-none lg:px-8">
      <div className="mt-16 flex h-fit w-full gap-3 lg:mt-4">
        <SearchBarUser data="anak" />

        <button className="border-lightGreen bg-stabiloGreen text-darkGreen flex h-fit items-center justify-center gap-2 rounded-lg p-3 font-semibold lg:p-2">
          <img src={editAnak} alt="icon edit" />
        </button>

        <button
          className="border-lightGreen bg-coldGreen text-darkGreen hover:bg-lightGreen group flex h-10 w-60 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg py-2 font-semibold duration-500 lg:px-8"
          onClick={openModalstunting}
        >
          <p className="-translate-y-[120%] transition-all duration-500 group-hover:flex group-hover:translate-y-4">
            Cek Stunting{" "}
          </p>
          <p className="-translate-y-4 transition-all duration-500 group-hover:translate-y-[120%]">
            Cek Stunting{" "}
          </p>
        </button>
        <StuntingResult
          isModalOpen={isModalOpen}
          closeModalstunting={closeModalstunting}
        />
      </div>

      {/* Content */}
      {allDataAnak.length === 0 ? (
        <div className="mb-4 h-10 w-fit rounded-xl bg-[#57C9A7] p-2">
          <button onClick={openModalAnak} className="flex text-white">
            <img src={add} alt="image add" className="mr-2" />
            Tambah data
          </button>
          <AddAnak
            isModalOpenAnak={isModalOpenAnak}
            closeModalAnak={closeModalAnak}
          />
        </div>
      ) : (
        <>
          {" "}
          <div className="mb-4 h-10 w-fit rounded-xl bg-[#57C9A7] p-2">
            <button onClick={openModalAnak} className="flex text-white">
              <img src={add} alt="image add" className="mr-2" />
              Tambah data
            </button>
            <AddAnak
              isModalOpenAnak={isModalOpenAnak}
              closeModalAnak={closeModalAnak}
            />
          </div>
          <div className="mb-5 w-full justify-between gap-5 lg:flex">
            <div className="text-darkGreen my-5 flex items-start gap-5 rounded-xl bg-white p-10 lg:my-0 lg:w-2/3">
              <img
                src={gambarAnak}
                alt="gambar anak"
                className="hidden w-72 lg:block"
              />

              <ul className="mt-5 flex flex-col justify-start gap-10">
                <li>
                  <h5>NIK</h5>
                  <p className="mt-3 text-3xl font-medium">6132234565432345</p>
                </li>

                <li>
                  <h5>NAMA</h5>
                  <p className="mt-3 text-3xl font-medium">
                    Abyan Adelio Adnan
                  </p>
                </li>

                <li>
                  <h5>Umur</h5>
                  <p className="mt-3 text-3xl font-medium">4 Bulan</p>
                </li>
              </ul>
            </div>

            <ul className="mt-5 flex h-full flex-col justify-between gap-3 lg:mt-0 lg:w-1/2">
              {/* Tinggi */}
              <li className="flex h-1/3 items-center gap-20 rounded-lg bg-white p-5">
                <div className="flex">
                  <img src={ruller} alt="gambar penggaris" />
                  <img src={arrow} alt="gambar panah" />
                </div>

                <div className="relative flex flex-col">
                  <h5>Tinggi</h5>
                  <h1 className="text-5xl font-semibold ordinal">
                    24{" "}
                    <span className="absolute top-7 text-sm font-medium">
                      Cm
                    </span>
                  </h1>
                </div>
              </li>

              {/* Berat */}
              <li className="flex h-1/3 items-center gap-20 rounded-lg bg-white p-5">
                <div className="flex">
                  <img src={timbangan} alt="gambar timbangan" />
                </div>

                <div className="relative flex flex-col">
                  <h5>Berat</h5>
                  <h1 className="text-5xl font-semibold">
                    4{" "}
                    <span className="absolute top-7 text-sm font-medium">
                      Kg
                    </span>
                  </h1>
                </div>
              </li>

              {/* Tanggal Lahir */}
              <li className="flex h-1/3 items-center gap-20 rounded-lg bg-white p-5">
                <div className="from-stabiloGreen to-stabiloLightGreen relative flex h-28 w-28 flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-l">
                  <h1 className="mr-7 text-4xl font-bold">
                    23 <span className="absolute ml-2 text-lg">rd</span>
                  </h1>
                  <h5 className="text-lg font-semibold">January</h5>
                </div>

                <div className="relative flex flex-col">
                  <h1 className="text-3xl font-semibold lg:text-4xl">
                    Tanggal{" "}
                  </h1>
                  <h1 className="text-3xl font-semibold lg:text-5xl">Lahir </h1>
                </div>
              </li>

              {/* Chart Mobile */}
              <li>
                <div className="flex w-full lg:hidden">
                  <Charts />
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-5 hidden w-full lg:flex">
            <Charts />
          </div>{" "}
        </>
      )}
    </section>
  );
};

export default DashboardAnak;
