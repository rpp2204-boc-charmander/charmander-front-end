import Sidenav from './Sidenav';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Layout({children}:any) {
  return (
    <div className={styles.container}>
      <Sidenav />
      {children}
    </div>
  )
};