import React from 'react';
import { sliceEvents, createPlugin } from '@fullcalendar/react';
import style from './style.module.css';

class CustomView extends React.Component {
  render(props) {
    let segs = sliceEvents(props, true); // allDay=true

    return (
      <div className={style['event-container']}>
        <div class={style['w-50']}>{props.dateProfile.currentRange.start.toUTCString()}</div>
        <div class={style['w-50']}>{segs.length} events</div>
      </div>
    );
  }
}

export default createPlugin({
  views: {
    custom: CustomView,
  },
});
