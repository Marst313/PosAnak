import React from 'react';

const Loading = () => {
  return (
    <section className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-5 pb-10 items-center justify-center">
      <div className="loader"></div>
      <h1>Loading...</h1>
    </section>
  );
};

export default Loading;
