import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { union } from "../images/icons/";
import { SearchBar, SingleDataBerita } from "../components/admin";
import { getDataBerita, setEditBerita } from "../features/news/news";
import { Loading } from "../components";

const DashboardBerita = () => {
  const dispatch = useDispatch();
  const { searchBerita, isLoading, data } = useSelector((store) => store.news);
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(data);
  }, [data]);

  useEffect(() => {
    const searchData = data?.filter((item) =>
      item.title?.toLowerCase().includes(searchBerita),
    );

    setDataBerita(searchData);
  }, [searchBerita]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover px-4 pb-10 sm:px-6 lg:mt-5 lg:bg-none lg:px-8">
      <div className="mt-16 flex justify-between gap-5 lg:mt-0">
        <SearchBar data="berita" />

        <Link
          className="bg-lightGreen flex items-center gap-2 whitespace-nowrap rounded-full px-8 text-white"
          to="/dashboard/tambahberita"
          onClick={() => dispatch(setEditBerita(false))}
        >
          <img src={union} alt="icon tambah" className="h-5 w-5" />
          Tambah Berita
        </Link>
      </div>

      <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dataBerita?.map((item) => {
          return <SingleDataBerita key={item._id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default DashboardBerita;
