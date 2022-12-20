import Sidenav from './Sidenav';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Layout({children}:any) {
  return (
    <div className="relative min-h-screen flex">
      <aside>
        <Sidenav />
      </aside>

      <main className='flex-1'>
        {children}
      </main>
    </div>
  )
};