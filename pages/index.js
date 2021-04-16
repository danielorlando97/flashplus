import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Link href="/home">
      <div className="flex justify-center items-center w-screen h-screen bg-orange">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className={styles.title}>
          Welcome to <Link href="/home">Next.js!</Link>
        </h1>

      </div>
    </Link>
  )
}
