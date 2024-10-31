import '../styles/Calendar.scss';
import dayjs from 'dayjs';
import { useState, createContext, useContext }  from 'react';

export const calendarContext = createContext();

export const useCalendar = () => {
  return useContext(calendarContext)
}

const CalendarProvider = (props) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());  
  console.log(selectedDate);

  const value = {selectedDate, setSelectedDate};

  return (
    
    <calendarContext.Provider value={value}>
      {props.children}
    </calendarContext.Provider>
  )
}

export default CalendarProvider;