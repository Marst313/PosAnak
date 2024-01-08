import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import heroImg from '../images/dashboard/image5.png';
import iconWaktu from '../images/clock.svg';
import { SearchBarUser } from '../components/user/';
import { countPostNewsDateCreated } from '../utils/function';

const DashboardBerita = () => {
  const { data, isLoading } = useSelector((store) => store.news);
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(data.records);
  }, [isLoading]);

  console.log(dataBerita);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mt-5 ">
        <SearchBarUser />

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dataBerita.map((item) => {
            console.log(item);
            return (
              <li key={item.id} className=" p-3 rounded-2xl border-grey border">
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
