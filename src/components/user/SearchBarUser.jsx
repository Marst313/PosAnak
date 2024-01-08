import React from 'react';
import search from '../../images/search-normal.svg';

const SearchBarUser = ({ style }) => {
  return (
    <form className=" relative mb-5 w-full ">
      <input type="text" className={`w-full pl-10 relative rounded-3xl  border-grey focus:ring-0   focus:outline-none ${style}`} placeholder="Search" />
      <img src={search} alt="" className="absolute top-0 mt-2 ml-2" />
    </form>
  );
};

export default SearchBarUser;
