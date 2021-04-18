import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Link href="/home">
      <div className="flex flex-col justify-around p-6 items-center  w-screen h-screen">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
          <h1 className="text-orange text-6xl">PaqtTV+</h1>
          <p className="text-back h-5 tracking-wider text-opacity-50 text-xl">aaaaa</p>

      </div>
    </Link>
  )
}

function Quater({color, children}){
  return <div className={`flex justify-center p-6 items-center w-full h-full bg-${color}`}>
    {children}
  </div>
}