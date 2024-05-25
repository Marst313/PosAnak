import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import heroImg from '../images/dashboard/image5.webp';
import iconWaktu from '../images/clock.svg';
import { SearchBarUser } from '../components/user/';
import { getDataBerita, setEditBerita } from '../features/news/news';
import { countPostNewsDateCreated } from '../utils/function';
import Loading from '../components/Loading';

const DashboardBerita = () => {
  const dispatch = useDispatch();
  const { data, isLoading, searchBerita } = useSelector((store) => store.news);
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(data.records);
  }, [isLoading]);

  useEffect(() => {
    const searchData = data.records?.filter((item) => item.fields.title?.toLowerCase().includes(searchBerita));

    setDataBerita(searchData);
  }, [searchBerita]);

  useEffect(() => {
    dispatch(getDataBerita());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <div className="px-4 sm:px-6 lg:px-8 mt-16 lg:mt-5 ">
        <SearchBarUser data="berita" />

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dataBerita.map((item) => {
            return (
              <li key={item.id} className=" p-3 rounded-2xl lg:border-grey border border-black">
                <Link className="bg-white" to={`/dashboard/berita/${item.id}`}>
                  <img src={item.fields.images} alt="hero img" />

                  <div className="p-5">
                    <h3 className="font-semibold">{item.fields.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <img src={iconWaktu} alt="" />
                      <p className="text-xs">{countPostNewsDateCreated(item.fields.Created)}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default DashboardBerita;
