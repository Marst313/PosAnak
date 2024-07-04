import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clock } from "../images/icons/";
import { SearchBarUser } from "../components/user/";
import { getDataBerita, setEditBerita } from "../features/news/news";
import { countPostNewsDateCreated } from "../utils/function";
import Loading from "../components/Loading";

const DashboardBerita = () => {
  const dispatch = useDispatch();
  const { data, isLoading, searchBerita } = useSelector((store) => store.news);
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(data);
  }, [isLoading]);

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
    <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-t from-[#57C9A7] to-white bg-cover lg:bg-none">
      <div className="mt-16 px-4 sm:px-6 lg:mt-5 lg:px-8">
        <SearchBarUser data="berita" />

        <ul className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dataBerita.map((item) => {
            return (
              <li
                key={item._id}
                className="lg:border-grey rounded-2xl border border-black p-3"
              >
                <Link className="bg-white" to={`/dashboard/berita/${item._id}`}>
                  <img src={item.images} alt="hero img" />

                  <div className="p-5">
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <img src={clock} alt="icon waktu" />
                      <p className="text-xs">
                        {countPostNewsDateCreated(item.Created)}
                      </p>
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
