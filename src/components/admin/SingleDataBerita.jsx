import React from 'react';
import heroImg from '../../images/dashboard/image5.webp';
import iconWaktu from '../../images/clock.svg';
import { Link, useNavigate } from 'react-router-dom';
import { countPostNewsDateCreated } from '../../utils/function';
import { useDispatch } from 'react-redux';
import { deleteDataBerita, getDataBerita, getSingleDataBerita, setEditBerita } from '../../features/news/news';

const SingleDataBerita = ({ item }) => {
  const { title, images, Created } = item.fields;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteDataBerita(item.id));
    await dispatch(getDataBerita());
  };
  const handleEdit = async () => {
    await dispatch(getSingleDataBerita(item.id));

    await dispatch(setEditBerita(true));
    navigate('/dashboard/tambahBerita');
  };

  return (
    <li className=" p-3 rounded-2xl border-grey border hover:scale-105 transition-all bg-white relative">
      <img src={images} alt="hero img" className="rounded-t-lg h-52] flex  mx-auto w-full object-cover " />

      <div className="p-5 ">
        <Link to={`/dashboard/berita/${item.id}`}>
          <h3 className="font-semibold capitalize hover:text-lightGreen ">{title}</h3>
        </Link>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img src={iconWaktu} alt="" />
            <p className="text-xs">{countPostNewsDateCreated(Created)}</p>
          </div>
          <button type="button" onClick={handleDelete}>
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover-svg">
              <path
                d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
                fill="#FF0000"
              />
              <path
                d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14ZM13.6597 17.75H10.3297C9.91975 17.75 9.57975 17.41 9.57975 17C9.57975 16.59 9.91975 16.25 10.3297 16.25H13.6597C14.0697 16.25 14.4097 16.59 14.4097 17C14.4097 17.41 14.0697 17.75 13.6597 17.75ZM14.4997 13.75H9.49975C9.08975 13.75 8.74975 13.41 8.74975 13C8.74975 12.59 9.08975 12.25 9.49975 12.25H14.4997C14.9097 12.25 15.2497 12.59 15.2497 13C15.2497 13.41 14.9097 13.75 14.4997 13.75Z"
                fill="#FF0000"
              />
            </svg>

            <svg width={20} height={20} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="initial-svg">
              <path d="M14.9697 4.48568C12.7497 4.26568 10.5164 4.15234 8.28973 4.15234C6.96973 4.15234 5.64973 4.21901 4.32973 4.35234L2.96973 4.48568" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.63641 3.81203L6.78308 2.9387C6.88975 2.30536 6.96975 1.83203 8.09641 1.83203H9.84308C10.9697 1.83203 11.0564 2.33203 11.1564 2.94536L11.3031 3.81203" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5367 6.59375L13.1033 13.3071C13.03 14.3537 12.97 15.1671 11.11 15.1671H6.82999C4.96999 15.1671 4.90999 14.3537 4.83665 13.3071L4.40332 6.59375" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.85645 11.5H10.0764" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.30304 8.83203H10.6364" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <button type="button" onClick={handleEdit} className="absolute top-0 right-0 mr-2 mt-2">
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className=" fill-[#06E2A0]/50 hover:fill-[#F9A319]/50">
          <g filter="url(#filter0_b_935_6076)">
            <rect width={32} height={32} rx={16} fill="currentColor" fillOpacity="0.5" />
            <rect x="0.5" y="0.5" width={31} height={31} rx="15.5" stroke="white" />
            <path
              d="M9.99086 23.4359C10.6701 24.1151 11.7667 24.1151 12.4459 23.4359L23.0843 12.7975C23.7636 12.1182 23.7636 11.0216 23.0843 10.3424C22.4051 9.6632 21.3085 9.6632 20.6293 10.3424L9.99086 20.9809C9.31164 21.6601 9.31164 22.7567 9.99086 23.4359Z"
              stroke="white"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M21.8652 14.0156L19.4102 11.5605" stroke="white" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M14.083 8.65597L15.3105 8.2959L14.9504 9.52341L15.3105 10.7509L14.083 10.3909L12.8555 10.7509L13.2155 9.52341L12.8555 8.2959L14.083 8.65597Z"
              stroke="white"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8095 13.5671L12.0371 13.207L11.677 14.4345L12.0371 15.6621L10.8095 15.302L9.58203 15.6621L9.9421 14.4345L9.58203 13.207L10.8095 13.5671Z"
              stroke="white"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.0849 17.6579L24.3124 17.2979L23.9524 18.5254L24.3124 19.7529L23.0849 19.3928L21.8574 19.7529L22.2175 18.5254L21.8574 17.2979L23.0849 17.6579Z"
              stroke="white"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter id="filter0_b_935_6076" x={-4} y={-4} width={40} height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_935_6076" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_935_6076" result="shape" />
            </filter>
          </defs>
        </svg>
      </button>
    </li>
  );
};

export default SingleDataBerita;
