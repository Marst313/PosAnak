import React, { useEffect } from 'react';
import heroSingleBerita from '../images/hero-berita.png';
import share from '../images/Share.svg';
import shareSosmed from '../images/share-sosmed.svg';
import shareFb from '../images/share-fb.svg';
import calender from '../images/calender.svg';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDataBerita } from '../features/news/news';

const SingleBerita = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, singleDataBerita } = useSelector((store) => store.news);

  useEffect(() => {
    dispatch(getSingleDataBerita(id));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="relative flex flex-col flex-1 overflow-x-hidden px-4 sm:px-6 lg:px-20 mt-5  pb-10 items-start">
      <div className=" rounded-[30px]  bg-white w-fit flex flex-col gap-5  p-5 h-fit max-w-4xl">
        <img src={singleDataBerita.fields?.images} alt={singleDataBerita.fields?.title} className="w-full h-2/5" />
        <div>
          <h1 className="text-3xl max-w-3xl font-semibold capitalize">{singleDataBerita.fields?.title}</h1>
          <div className="text-justify font-light indent-24 mt-5 text-sm max-w-lg" dangerouslySetInnerHTML={{ __html: singleDataBerita.fields?.description }} />
        </div>

        <hr className=" border border-lightGreen" />

        <ul className="flex justify-between">
          <li className="flex gap-3">
            <button>
              <img src={share} alt="copy link" />
            </button>

            <button>
              <img src={shareSosmed} alt="logo wa" />
            </button>

            <button>
              <img src={shareFb} alt="logo fb" />
            </button>
          </li>

          <li className="flex items-center gap-2">
            <img src={calender} alt="" className="w-4 h-4 " />
            <p className="text-xs">Senin 12/12/2025 19.60 WIB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SingleBerita;
