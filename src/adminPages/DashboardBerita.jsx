import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { union } from '../images/icons/';
import { SearchBar, SingleDataBerita } from '../components/admin';
import { getDataBerita, setEditBerita } from '../features/news/news';
import { Loading } from '../components';

const DashboardBerita = () => {
  const dispatch = useDispatch();
  const { searchBerita, isLoading, data } = useSelector((store) => store.news);
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(data);
  }, [data]);

  useEffect(() => {
    const searchData = data?.filter((item) => item.title?.toLowerCase().includes(searchBerita));

    setDataBerita(searchData);
  }, [searchBerita]);

  useEffect(() => {
    dispatch(getDataBerita());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 lg:mt-5 sm:px-6 lg:px-8 pb-10 bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <div className="flex mt-16 lg:mt-0 gap-5 justify-between">
        <SearchBar data="berita" />

        <Link className=" bg-lightGreen flex items-center px-8 gap-2 text-white rounded-full whitespace-nowrap " to="/dashboard/tambahberita" onClick={() => dispatch(setEditBerita(false))}>
          <img src={union} alt="icon tambah" className="w-5 h-5" />
          Tambah Berita
        </Link>
      </div>

      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {dataBerita?.map((item) => {
          return <SingleDataBerita key={item._id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default DashboardBerita;
