import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Link href="/home">
      <div className="flex flex-col justify-center items-center space-y-2 w-screen h-screen">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">La que se avecina</h1>
        <h2 className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">La que se avecina</h2>
        <h3 className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">La que se avecina</h3>
        <h4 className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">La que se avecina</h4>
        <h5 className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">La que se avecina</h5>
        <h6 className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">La que se avecina</h6>


      </div>
    </Link>
  )
}
