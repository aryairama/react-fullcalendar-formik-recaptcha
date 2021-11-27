/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';

const BigCalendar = ({ schedules = [], bgColor, textColor, option, ...props }) => {
  let [calendar, setCalendar] = React.useState(null);
  const calendarContainer = React.useRef();
  React.useEffect(() => {
    setCalendar((oldVal) =>
      oldVal === null
        ? new Calendar(calendarContainer.current, {
            ...option,
          })
        : oldVal
    );
    schedules.forEach((schedule) => {
      schedule.bgColor = bgColor;
      schedule.color = textColor;
    });
    if (calendar) {
      calendar.clear();
      calendar.createSchedules(schedules, false);
      calendar.render();
    }
  }, [schedules, calendar]);
  return <div ref={calendarContainer} {...props}></div>;
};

BigCalendar.propTypes = {
  schedules: PropTypes.array.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  option: PropTypes.object.isRequired,
};

export default BigCalendar;
