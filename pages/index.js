import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Banner, Quote, TwoColBanner, Featured, EmployeeDetails } from '../components';

import '@splidejs/react-splide/css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigiWhiz Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <Quote/>
      <TwoColBanner/>
      <Featured/>
      <EmployeeDetails/>
    </div>
  )
}
