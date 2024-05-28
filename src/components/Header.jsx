/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

export default function Header({ header }) {
  return <h1 className={styles.header}>{header}</h1>;
}
