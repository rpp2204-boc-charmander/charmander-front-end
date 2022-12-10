import styles from '../styles/Sidenav.module.css';
import Link from 'next/link';

export default function Sidenav() {
  return (
      <div className={styles.sidenav}>
      <ul>
        <li>
          <Link href='/'>Overview</Link>
        </li>
        <li>
          <Link href='/exercise'>Exercise</Link>
        </li>
        <li>
          <Link href='/'>Nutrition</Link>
        </li>
        <li>
          <Link href='/'>Report</Link>
        </li>
        <li>
          <Link href='/'>Friends</Link>
        </li>
        <li>
          <Link href='/'>Settings</Link>
        </li>
        <li>
          <Link href='/'>Logout</Link>
        </li>
      </ul>
    </div>
  )
};