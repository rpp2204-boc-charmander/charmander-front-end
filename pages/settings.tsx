import React from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import UserExperience from '../components/settings/UserExperience'
import UserMetrics from '../components/settings/UserMetrics'
import Head from "next/head";

export default function Settings () {
 return (
  <div>
    <Head>
      <title> My Health Coach </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <UserMetrics />
    <UserExperience />
  </div>

 )
}