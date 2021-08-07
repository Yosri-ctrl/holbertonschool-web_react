import React from 'react';
import './Notifications.css';
import close from './close.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent'>
          <div
            dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
          ></div>
        </li>
      </ul>
      <button 
        type='button'
        aria-label='Close'
        onClick={console.log('Close button has been clicked')}
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        >
          <img src={close} alt="X" hight="8px" width="8px"></img>
        </button>
    </div>
  );
};
export default Notifications;
