import Head from 'next/head'
import Image from 'next/image'
import ItemsList from '../components/ItemsList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery</title>
        <meta name="description" content="Best delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ItemsList>
      </ItemsList>
    </div>
  )
}
