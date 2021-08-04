import Head from 'next/head'
import { Link } from '../../hook.features/routing'
import { FC, useEffect } from 'react'

import { CircleContainer } from '../components/container.circle'
import { IconsStyle } from '../components/styles.icons'
import { DataLabel } from '../components/style.label.data'
import { SvgContainer } from '../components/svg.container'
import { NameSystem } from '../components/styles.name'

import { IconType } from 'react-icons'
import { AiFillUsb, AiFillSetting } from 'react-icons/ai'
import { MdNotificationsActive, MdNotificationsOff } from "react-icons/md"


const ItemList : FC<{href:string, name:string}> = ({href, name}) => {
    return <Link href={href}>
    <div className='flex justify-between items-center w-full border-b-2 border-back'>
      <li>{name}</li>
      <label>&gt;</label>
    </div>
  </Link>
} 

const NavIcons : FC<{href:string, name:string, Icon: IconType}> = ({href, name, Icon}) => {
    return <Link href={href}>
    <CircleContainer.Component className={CircleContainer.compose('', 'back', '11', '2')}>  
      <IconsStyle.Component Component={Icon} size='3xl' className={IconsStyle.compose('', 'back', '')} ></IconsStyle.Component>
    </CircleContainer.Component>
  </Link>
}

export default function Home() {
  const routesList = ["/folder?path=/"]
  const routesIcon = ["/copy.list", '/', '/']
  const names = ['Paquete Semanal']
  const namesIcons = ['Lista de Copia', 'Notificaciones', 'Opciones']
  const icons = [AiFillUsb, MdNotificationsActive, AiFillSetting]
  
  useEffect(()=> {
    console.log(sessionStorage.length)
  })
  return (
    <div className="flex w-screen h-screen">
        <Head>
          <title>Flash+</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="select-none relative w-full pl-5 h-screen" >
          <div className='absolute flex flex-col top-1/3 space-y-1.5'>              
            <NameSystem.Component size='5xl'/>
              <DataLabel.Component size='base' className={DataLabel.compose('tracking-widest')}>
                Banco de audiovisuales, grande, eficiente y crece todos los dias. Contamos con: 
              </DataLabel.Component>
              <ul className={DataLabel.compose("list-disc tracking-widest  pl-5 text-base") }>
                {names.map((name, index) => {
                  return <ItemList href={routesList[index]} name={name} key={name}/>
                })}
              </ul>
          </div>
        </div>

          
        <div className='relative h-full w-1/5 '>
          <SvgContainer.Component >
            <SvgContainer.Flow/>
          </SvgContainer.Component>
          <div className="absolute top-0 left-0 flex flex-col justify-between items-center py-3 items-end h-full w-full " >
            <div className='flex flex-col justify-center pl-2 items-center w-full space-y-3'>
              {icons.map((Icon, index) => {
                  return <NavIcons href={routesIcon[index]} name={namesIcons[index]} Icon={Icon} key={namesIcons[index]}/>
                })}     
 
            </div>
            <DataLabel.Component size='xl' className={DataLabel.compose('font-black text-center', 'back', '')}>About Us</DataLabel.Component>
          </div>
        </div>

          

      </div>
    
  )
}