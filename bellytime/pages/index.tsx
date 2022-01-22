import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card } from '@/components/Card'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Card variant={'elevation'}/>

      <footer className={styles.footer}>
sdf
      </footer>
    </div>
  )
}

export default Home
