/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CustomView from './CustomView';

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
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={header}
      initialView={initialView}
      events={setAppreance(schedules)}
      eventContent={(arg) => {
        console.log(arg);
        return (
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              flexWrap: 'wrap',
              padding: '20px',
            }}
          >
            <div
              style={{
                width: '50%',
              }}
            >
              Lorem ipsum, dolor sit amet
            </div>
            <div
              style={{
                width: '50%',
              }}
            >
              Lorem ipsum, dolor sit amet
            </div>
          </div>
        );
      }}
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
  allDay: PropTypes.bool,
};

export default FullCalender;
