import React, { useEffect } from 'react';
import { share, shareSosmed, shareFb, calender } from '../images/icons/';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDataBerita } from '../features/news/news';
import { Loading } from '../components';

const SingleBerita = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, singleDataBerita } = useSelector((store) => store.news);

  useEffect(() => {
    dispatch(getSingleDataBerita(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="relative flex flex-col flex-1 overflow-x-hidden px-4 sm:px-6 lg:px-20 mt-5 pb-10 items-start">
      <div className="rounded-[30px] bg-white w-fit flex flex-col gap-5 p-5 h-fit max-w-4xl">
        <img src={singleDataBerita.images} alt={singleDataBerita.title} className="w-full h-2/5" />
        <div>
          <h1 className="text-3xl max-w-3xl font-semibold capitalize">{singleDataBerita.title}</h1>
          <div className="text-justify font-light indent-24 mt-5 text-sm max-w-lg" dangerouslySetInnerHTML={{ __html: singleDataBerita.description }} />
        </div>

        <hr className="border border-lightGreen" />

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
            <p className="text-xs">{formatDate(singleDataBerita.Created)}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SingleBerita;
