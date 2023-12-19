import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import '../css/additional-styles/Sample.css';

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Sample self-start hidden xl:block ">
      <div className="Sample__container ">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} value={value} />
        </main>
      </div>
    </div>
  );
}

export default Calender;
