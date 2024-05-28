/* eslint-disable react/prop-types */
import styles from './Tracker.module.css';

export default function Tracker({ children }) {
  return <div className={styles.tracker}>{children}</div>;
}
