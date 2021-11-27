/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
const FullCalender = ({ schedules, header, initialView, bgColor, textColor, allDay, ...props }) => {
  const setAppreance = (schedules = []) => {
    schedules.forEach((schedule) => {
      schedule.color = bgColor;
      schedule.textColor = textColor;
      schedule.allDay = allDay ? true : false;
    });
    return schedules;
  };
  console.log(setAppreance(schedules));
  return (
    <FullCalendar
      {...props}
      headerToolbar={header}
      initialView={initialView}
      plugins={[dayGridPlugin]}
      events={setAppreance(schedules)}
    />
  );
};

FullCalender.defaultProps = {
  schedules: [],
  allDay: true,
  bgColor: '#3775cb',
  textColor: 'white',
};

FullCalender.propTypes = {
  schedules: PropTypes.array.isRequired,
  header: PropTypes.object.isRequired,
  initialView: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  allDay: PropTypes.bool
};

export default FullCalender;
