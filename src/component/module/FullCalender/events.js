const events = [
  { title: 'All Day Event', start: getDate('YEAR-MONTH-01'), test: 'asasasasas' },
  {
    title: 'Long Event Long Event Long EventLong EventLong EventLong EventLong EventLong EventLong Event',
    start: getDate('YEAR-MONTH-06'),
    end: getDate('YEAR-MONTH-10'),
  },
  {
    title: 'Conference',
    start: 'YEAR-MONTH-17',
    end: getDate('YEAR-MONTH-19'),
  },
  {
    title: 'Meeting',
    start: getDate('YEAR-MONTH-19T10:30:00+00:00'),
  },
  { title: 'Lunch', start: getDate('YEAR-MONTH-19') },
  { title: 'Birthday Party', start: getDate('YEAR-MONTH-18') },
  { title: 'Meeting', start: getDate('YEAR-MONTH-18') },
  { title: 'Happy Hour', start: getDate('YEAR-MONTH-18') },
  { title: 'Dinner', start: getDate('YEAR-MONTH-18') },
  { title: 'Dinner', start: getDate('YEAR-MONTH-18') },
  { title: 'Dinner', start: getDate('YEAR-MONTH-18') },
  { title: 'Dinner', start: getDate('YEAR-MONTH-18') },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = '0' + month;
  }

  return dayString.replace('YEAR', year).replace('MONTH', month);
}

export default events;
