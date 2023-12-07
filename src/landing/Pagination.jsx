import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <ul className="flex items-center -space-x-px h-8 text-sm gap-5">
      <li>
        <Link className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-darkGreen bg-white shadow-custom rounded-s-lg hover:bg-gray-100 ">
          <span className="sr-only">Previous</span>
          <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
          </svg>
        </Link>
      </li>
      <li>
        <Link className="flex items-center justify-center px-3 h-8 leading-tight text-darkGreen bg-white shadow-custom hover:bg-gray-100 rounded-lg ">1</Link>
      </li>

      <li>
        <Link className="flex items-center justify-center px-3 h-8 leading-tight text-darkGreen bg-white shadow-custom hover:bg-gray-100 rounded-lg ">2</Link>
      </li>
      <li>
        <Link className="flex items-center justify-center px-3 h-8 leading-tight text-darkGreen bg-white shadow-custom rounded-e-lg hover:bg-gray-100 ">
          <span className="sr-only">Next</span>
          <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
