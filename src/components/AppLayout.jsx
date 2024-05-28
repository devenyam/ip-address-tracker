/* eslint-disable react/prop-types */
import styles from './AppLayout.module.css';
export default function AppLayout({ children }) {
  return <main className={styles.app}>{children}</main>;
}
