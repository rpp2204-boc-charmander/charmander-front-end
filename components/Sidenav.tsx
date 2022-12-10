import styles from '../styles/Sidenav.module.css';
import Link from 'next/link';

export default function Sidenav() {
  return (
      <div className={styles.sidenav}>

        <div className={styles.userinfo}>
          <div className={styles.icon}> </div>
          <p className={styles.username}>@username</p>
          <p className={styles.names}> FirstName LastName</p>
        </div>

        <div className={styles.links}>
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
    </div>
  )
};