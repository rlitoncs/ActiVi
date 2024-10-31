import '../styles/Calendar.scss';
import dayjs from 'dayjs';
import { TextField, Tooltip } from '@mui/material';
import { useState }  from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useCalendar } from '../providers/CalendarProvider';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Calendar = () => {
  const {selectedDate, setSelectedDate} = useCalendar(); 
  
  const handlePreviousDay = () => {
    setSelectedDate((prevDate) => prevDate.subtract(1, 'day'));
  }

  const handleNextDay = () => {
    setSelectedDate((prevDate) => prevDate.add(1, 'day'));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='calendar-container'>
        <DatePicker
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          format='dddd, MMMM D, YYYY'
          showDaysOutsideCurrentMonth
          renderInput={(params) => <TextField {...params} />}
          sx={{
            '.MuiInputBase-root': {
              borderRadius: '25px',
            }
          }}
        />
        <Tooltip title="Previous Day" arrow>
          <button onClick={handlePreviousDay} className="calendar-prev">
            <ArrowBackIosOutlinedIcon />
          </button>
        </Tooltip>
        <Tooltip title="Next Day" arrow>
          <button onClick={handleNextDay} className="calendar-next">
            <ArrowForwardIosOutlinedIcon />
          </button>
        </Tooltip>
      </div>
    </LocalizationProvider>
  );
}

export default Calendar;