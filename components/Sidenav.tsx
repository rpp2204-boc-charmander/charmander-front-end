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
        <Link href='/nutrition'>Nutrition</Link>
        </li>
        <li>
          Report
        </li>
        <li>
          Friends
        </li>
        <li>
          Settings
        </li>
        <li>
          Logout
        </li>
      </ul>
    </div>
  )
};