import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Nutrition from "./nutrition"
import Overview from "./overview"
import Signup from "./Signup"


export default function Home() {
  return (
    <div>
      <Signup />
    </div>
  )
}