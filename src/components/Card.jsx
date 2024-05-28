/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styles from './Card.module.css';
import { MapContext } from '../App';

export default function Card() {
  const {initData} = useContext(MapContext)
  const { location, ip, isp, timezone } = initData;
  return (
    <div className={styles.card}>
      <span>
        <h2>IP Address</h2>
        <p>{ip || '- -'}</p>
      </span>
      <span>
        <h2>Location</h2>
        <p>
          {location?.city || '-'} , {location?.country || '-'}
        </p>
      </span>
      <span>
        <h2>Timezone</h2>
        <p>{timezone || '- -'}</p>
      </span>
      <span>
        <h2>ISP</h2>
        <p>{isp || '- -'}</p>
      </span>
    </div>
  );
}
