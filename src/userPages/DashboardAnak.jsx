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
import SingleDataAnak from "../components/user/SingleDataAnak";
import {
  connectDataAnak,
  setIsKidThere,
  getDataAnak,
  getNikDataAnak,
} from "../features/kids/kids";

const DashboardAnak = () => {
  const {
    dataAnak,
    isLoading,
    graphShow,
    singleDataAnak,
    isKidsThere,
    kidsBio,
    allDataAnakNik,
  } = useSelector((store) => store.kids);

  const { allUserNikKids } = useSelector((store) => store.user);

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
    dispatch(getNikDataAnak([allUserNikKids]));
  }, []);

  console.log();

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
      {allDataAnakNik?.length === 0 ? (
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
          {allDataAnakNik.map((item) => (
            <SingleDataAnak key={item._id} item={item} />
          ))}
        </>
      )}
    </section>
  );
};

export default DashboardAnak;
