import '../styles/Calendar.scss';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { useState }  from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        format='dddd, MMMM D, YYYY'
        showDaysOutsideCurrentMonth
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;