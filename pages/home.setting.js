import Link from 'next/link'

import { SiNextDotJs } from "react-icons/si"
import { MdLocalMovies } from "react-icons/md"
import { RiQuestionnaireLine } from "react-icons/ri"
import { GoPackage } from "react-icons/go"
import { 
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUsb,
  AiOutlineHeart,
  AiOutlineCheckCircle,
  AiOutlineNotification } from "react-icons/ai"


import {
  SimpleTopBarScaffolding,
  CircleContainerScaffolding,
  ItemToListScaffolding } from "../components/scaffolding"
import Folder from "../components/common/folder.item"
import DirectoryBody from "../components/page.home/directory.list.body"

const Icons = [
  <AiOutlineCheckCircle className="text-gray-100 text-opacity-50 text-3xl"/>,
  <MdLocalMovies className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineNotification className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineUser className="text-gray-100 text-opacity-50 text-3xl"/>,
  <RiQuestionnaireLine className="text-gray-100 text-opacity-50 text-3xl"/>,
  <SiNextDotJs className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineHeart className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineUsb className="text-gray-100 text-opacity-50 text-3xl"/>
]

function Home () {
  const list = [1,2,3,4,5,6,7,8]

  return(
    <div className="relative px-3 h-screen w-screen space-y-1.5 overflow-hide">
      <div className="flex h-16 flex-col justify-center ">
        <SimpleTopBarScaffolding className="pl-1"
          componentName={<h1 className="text-orange text-3xl">PaqtTV+</h1>}>             
          <AiOutlineSearch className="text-gray-100 text-opacity-50 text-3xl"/>
        </SimpleTopBarScaffolding>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-2 w-full rounded-xl h-44 pt-1 bg-back">
        {list.map( (element,index) => 
          <div key={index} className="flex flex-col items-center space-y-2">
            <CircleContainerScaffolding className="bg-body" color="body">
              {Icons[element - 1]}
            </CircleContainerScaffolding>
            <label className="text-gray-100 text-opacity-50 tracking-wider text-xs">Name</label>
          </div>
        )}
      </div>
      
      <Link href="/home">
      <div>
      <ItemToListScaffolding className="pt-5 pl-1" >
        <GoPackage className="text-gray-100 text-opacity-50 text-3xl"/>
        <label className="text-gray-100 text-opacity-50 tracking-wider text-base">Paquete Semanal</label>
        
      </ItemToListScaffolding>
      </div>
      </Link>
    </div>
  ) 
}


export default Home


