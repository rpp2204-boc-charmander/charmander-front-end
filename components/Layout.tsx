import Sidenav from './Sidenav';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

/**
 * TODO:
 * 1. Why are we passing 'children' as props?
 * ANS: Because of pageProps
 */

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <Sidenav />
      {children}
    </div>
  );
}
