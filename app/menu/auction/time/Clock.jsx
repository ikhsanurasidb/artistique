'use client'
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { format, isToday } from 'date-fns';

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCalendarChange = (date) => {
    setSelectedDate(date);
    setCurrentDateTime(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const isTodayDate = isToday(date);
      const isSelectedDate = selectedDate && date.getDate() === selectedDate.getDate();

      return `text-black w-full h-full rounded-[100%] ${
        isTodayDate ? 'bg-blue-300' : ''
      } ${isSelectedDate ? 'bg-blue-600' : ''}`;
    }
    return null;
  };

  return (
    <div className='text-black w-[100vw] h-full flex flex-col gap-[20px] pl-[20px] pr-[20px]'>
      <div className=''>
        <p>Date & Time : {format(currentDateTime, 'MMMM dd, yyyy HH:mm:ss')}</p>
      </div>
      <div className='w-[500px] border border-[2px] border-black p-[10px] rounded-[10px]'>
        <Calendar
          onChange={handleCalendarChange}
          value={currentDateTime}
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
}

export default Clock;
