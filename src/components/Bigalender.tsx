'use client';

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const safeEvents = (Array.isArray(calendarEvents) ? calendarEvents : [])
    .filter((event) => event !== null && typeof event === 'object')
    .map((event) => ({
      ...event,
      title: event.title ?? 'حصة دراسية', 
      start: new Date(event.start),
      end: new Date(event.end),
    }));

  return (
    <div className="rbc-calendar-container">
      <Calendar
        localizer={localizer}
        events={safeEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}   
        view={view}
        onView={handleOnChangeView}
        min={new Date(2026, 9, 19, 8, 0, 0)}
        max={new Date(2026, 9, 19, 19, 0, 0)}
        style={{ height: '98%', width: '100%', borderRadius: 12 }}
      />
    </div>
  );
};

export default MyCalendar;