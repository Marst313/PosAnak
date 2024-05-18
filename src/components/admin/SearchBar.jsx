import React, { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import debouce from 'lodash.debounce';

import search from '../../images/search-normal.svg';
import { setSearchAnak } from '../../features/kids/kids';
import { setSearchKegiatan } from '../../features/activity/activity';
import { setSearchKeluarga } from '../../features/family/family';
import { setSearchBerita } from '../../features/news/news';

const SearchBar = ({ style, data }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;

    if (data === 'anak') dispatch(setSearchAnak(value));
    if (data === 'kegiatan') dispatch(setSearchKegiatan(value));
    if (data === 'keluarga') dispatch(setSearchKeluarga(value));
    if (data === 'berita') dispatch(setSearchBerita(value));
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, []);

  return (
    <form className={`relative w-2/3 ${style}`}>
      <input type="text" className="w-full pl-10 relative rounded-3xl  border-grey focus:ring-0  focus:outline-none" placeholder="Search" onChange={debouncedResults} />
      <img src={search} alt="" className="absolute top-0 mt-2 ml-2" />
    </form>
  );
};

export default SearchBar;
