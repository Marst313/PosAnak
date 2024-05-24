import React, { useState } from 'react';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header>
      <div className="lg:px-8 mt-5 lg:mt-0 lg:hidden">
        <div className="flex items-center justify-between -mb-px">
          {/* Header: Left side */}

          <button
            className="text-slate-500 hover:text-slate-600 lg:hidden absolute z-10 top-5 left-5"
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
          <div className="hidden">
            {/* Hamburger button */}
            {/* <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
