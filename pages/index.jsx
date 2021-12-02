import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ninja list</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus harum pariatur modi debitis sunt, eos expedita, accusamus voluptas, porro aut nobis? Alias nulla corrupti magnam, reprehenderit totam tempora tempore?</p>
        <a className={styles.btn}>View all listings</a>
      </div>
    </>
  )
}
