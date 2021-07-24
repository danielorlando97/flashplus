import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { CircleContainer } from '../components/container.circle'
import { IconsStyle } from '../components/styles.icons'
import { DataLabel } from '../components/style.label.data'
import { AiFillUsb, AiFillSetting } from 'react-icons/ai'
import { MdNotificationsActive, MdNotificationsOff } from "react-icons/md"
import { SvgContainer } from '../components/svg.container'


function VerticalText( { text } : {text: string} ) {
    const list : Array<string> = []
    for (let index = 0; index < text.length; index++) list.push(text[index])

    return (
    <div className='flex flex-col justify-center'>
        {list.map(chr => {
            return <DataLabel.Component size='xl' className={DataLabel.compose('h-5 font-black text-center', 'back', '')}>{chr}</DataLabel.Component>
        })}
    </div>
    )
}

function HorizontalText( { text } : {text: string} ) {
    return <DataLabel.Component size='xl' className={DataLabel.compose('font-black text-center', 'back', '')}>About Us</DataLabel.Component>
}

export default function Home() {
    const about : string = 'ABOUT US'
    

  return (
    <Link href="/folder?path=/">
      <div className="flex w-screen h-screen">
        <Head>
          <title>Flash+</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
          <div className="relative w-full pl-5 h-screen" >
            <div className='absolute flex flex-col top-1/3 space-y-1.5'>              
                <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-orange to-red-600 text-5xl font-extrabold">PaqtTV+</h1>
                <DataLabel.Component size='base' className={DataLabel.compose('tracking-widest')}>
                    Banco de audiovisuales, grande, eficiente y crece todos los dias. Contamos con: 
                </DataLabel.Component>
                <ul className={DataLabel.compose("list-disc tracking-widest  pl-5 text-base") }>
                    <li className='border-b-2 border-back w-auto '>Paquete Semanal </li>
                </ul>
            </div>
          </div>

          
          <div className='relative h-full w-1/5 '>
              <SvgContainer.Component >
                <SvgContainer.Flow/>
              </SvgContainer.Component>
              <div className="absolute top-0 left-0 flex flex-col justify-between items-center py-3 items-end h-full w-full " >
                <div className='flex flex-col justify-center pl-2 items-center w-full space-y-3'>
                  <CircleContainer.Component className={CircleContainer.compose('', 'back', '11', '2')}>  
                    <IconsStyle.Component Component={AiFillUsb} size='3xl' className={IconsStyle.compose('', 'back', '')} ></IconsStyle.Component>
                  </CircleContainer.Component>
                  <CircleContainer.Component className={CircleContainer.compose('', 'back', '11', '2')}>  
                    <IconsStyle.Component Component={MdNotificationsActive} size='3xl' className={IconsStyle.compose('', 'back', '')} ></IconsStyle.Component>
                  </CircleContainer.Component>
                  <CircleContainer.Component className={CircleContainer.compose('', 'back', '11', '2')}>  
                    <IconsStyle.Component Component={AiFillSetting} size='3xl' className={IconsStyle.compose('', 'back', '')} ></IconsStyle.Component>
                  </CircleContainer.Component>
                </div>
                <HorizontalText text={about}></HorizontalText>
              </div>
          </div>

          

      </div>
    </Link>
  )
}