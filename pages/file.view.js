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
  return(
    <div className="flex flex-col space-y-2 top-0 left-0 h-screen w-screen">
      <div className="relative h-1/3 w-full">
			  <img className="absolute h-full w-full rounded-b-3xl z-10 "
            src="picture/Alexis & Fido - La Esencia (Abdel La Esencia).jpg"/>
			  <h1 className="absolute text-gray-100 text-opacity-50 text-2xl 
                       left-4 bottom-4 h-auto w-auto bg-body z-20">
            Alexis y Figo
        </h1>
		  </div>
      <div className="flex justify-between items-center w-screen h-10 border-back border-b pl-2 pr-4 ">
        <AiOutlineCheckCircle className="text-gray-100 text-opacity-50 text-3xl"/>
        <div className="flex space-x-3">
          <AiOutlineHeart className="text-gray-100 text-opacity-50 text-3xl"/>
          <AiOutlineUsb className="text-gray-100 text-opacity-50 text-3xl"/>
        </div>
      </div>
    </div>
  ) 
}


export default Home