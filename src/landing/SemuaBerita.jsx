import React from 'react';
import { Link } from 'react-router-dom';
import FooterLanding from './FooterLanding';

import heroImg from '../images/dashboard/image5.png';
import logoCalender from '../images/calender.svg';
import Pagination from './Pagination';
const SemuaBerita = () => {
  return (
    <div className="relative  px-4 sm:px-6  flex xl:px-60 mt-5 gap-3 flex-col pb-40 overflow-x-hidden items-center">
      <ul className="w-full gap-5 flex-col flex">
        <li>
          <Link className="flex flex-col md:flex-row justify-start gap-5  w-full shadow-custom p-5">
            <img src={heroImg} alt="gambar ibu" className="h-60 rounded-lg" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={logoCalender} alt="" />
                <p>Senin 12/12/2025 19.60 WIB</p>
              </div>
              <h1 className="text-3xl line-clamp-2 font-medium">Lorem ipsum dolor sit amet consectetur. Ultrices mauris at aliquam scelerisque ac tellus a.</h1>

              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
            </div>
          </Link>
        </li>

        <li>
          <Link className="flex flex-col md:flex-row justify-start gap-5  w-full shadow-custom p-5">
            <img src={heroImg} alt="gambar ibu" className="h-60 rounded-lg" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={logoCalender} alt="" />
                <p>Senin 12/12/2025 19.60 WIB</p>
              </div>
              <h1 className="text-3xl line-clamp-2 font-medium">Lorem ipsum dolor sit amet consectetur. Ultrices mauris at aliquam scelerisque ac tellus a.</h1>

              <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur. Viverra at turpis nunc ac eget pharetra commodo purus integer. Lorem massa lacus condimentum in. Ornare malesuada id massa quis nibh.</p>
            </div>
          </Link>
        </li>
      </ul>

      <Pagination />

      <FooterLanding />
    </div>
  );
};

export default SemuaBerita;
