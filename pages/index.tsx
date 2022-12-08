import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Nutrition from "./nutrition"

export default function Home() {
  return (
    <div>
      <Nutrition />
    </div>
  )
}