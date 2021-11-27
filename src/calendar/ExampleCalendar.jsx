import React from 'react';
import { FullCalender, BigCalender } from '../component/module';
import events from '../component/module/FullCalender/events';

const ExampleCalendar = (props) => {
  return (
    <>
      <BigCalender
        bgColor="red"
        textColor="white"
        option={{
          defaultView: 'month',
          taskView: true,
          disableDblClick: true,
          disableClick: true,
          usageStatistics: false,
          template: {
            monthDayname: function (dayname) {
              return '<div class="calendar-week-dayname-name">' + dayname.label + '</div>';
            },
            monthGridHeader: function (dayModel) {
              console.log(dayModel.hiddenSchedules);
              var date = parseInt(dayModel.date.split('-')[2], 10);
              var classNames = ['tui-full-calendar-weekday-grid-date '];

              if (dayModel.isToday) {
                classNames.push('tui-full-calendar-weekday-grid-date-decorator');
              }

              return '<span class="' + classNames.join(' ') + '">' + date + '</span>';
            },
            monthGridHeaderExceed: function (hiddenSchedules) {
              return '<span class="weekday-grid-more-schedules">+' + hiddenSchedules + '</span>';
            },
            monthGridFooterExceed: function (hiddenSchedules) {
              return '';
            },
          },
        }}
        schedules={[
          {
            id: '1',
            title: 'my schedule 1',
            start: '2021-11-18T22:30:00+09:00',
            end: '2021-11-19T02:30:00+09:00',
            category: 'time',
          },
          {
            id: '223',
            title: 'my schedule 2',
            start: '2021-11-18T22:30:00+09:00',
            end: '2021-11-19T02:30:00+09:00',
            category: 'time',
          },
          {
            id: '23',
            title: 'my schedule 3',
            start: '2021-11-18T22:30:00+09:00',
            end: '2021-11-19T02:30:00+09:00',
            category: 'time',
          },
          {
            id: '2',
            title: 'my schedule 4',
            start: '2021-11-18T22:30:00+09:00',
            end: '2021-11-19T02:30:00+09:00',
            category: 'time',
          },
        ]}
      />
      <FullCalender
        height="auto"
        initialView="dayGridMonth"
        header={{
          start: 'today',
          center: 'title',
          end: 'prev,next',
        }}
        bgColor="green"
        textColor="white"
        schedules={events}
        fixedWeekCount={false}
      />
    </>
  );
};

export default ExampleCalendar;
