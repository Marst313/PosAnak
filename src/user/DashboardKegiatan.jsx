import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { JadwalKegiatanUser, SearchBarUser } from "../components/user";
import Loading from "../components/Loading";

const DashboardKegiatan = () => {
  const { dataKegiatan, isLoading, searchKegiatan } = useSelector(
    (store) => store.activity
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchDataKegiatan = dataKegiatan.filter((item) =>
      item.fields.title.toLowerCase().includes(searchKegiatan)
    );

    setData(searchDataKegiatan);
  }, [searchKegiatan]);

  useEffect(() => {
    setData(dataKegiatan);
  }, [dataKegiatan]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative flex flex-col bg-gradient-to-t from-[#57C9A7] lg:mt-5 to-white bg-cover lg:bg-none flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8">
      <div className="mt-16 lg:mt-0">
        <SearchBarUser data="kegiatan" />
        {data.length <= 0 ? (
          <h1>Tidak ada kegiatan dengan judul {searchKegiatan}</h1>
        ) : (
          <JadwalKegiatanUser dataKegiatan={data} />
        )}
      </div>
    </section>
  );
};

export default DashboardKegiatan;
