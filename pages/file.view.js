import { FaEllipsisV } from "react-icons/fa"
import { BsArrow90DegLeft } from "react-icons/bs"
import { RiMenuAddFill } from "react-icons/ri"
import { RiHomeGearLine } from "react-icons/ri"
import { BiGridAlt } from "react-icons/bi"
import { 
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUsb,
  AiOutlineHeart,
  AiOutlineCheckCircle,
  AiOutlineNotification } from "react-icons/ai"

import {SimpleTopBarScaffolding, CircleContainerScaffolding} from "../components/scaffolding"
import NavigateLabel from "../components/common/navigate.label/Navigate.logic"
import DirectoryBody from "../components/page.home/directory.list.body"



function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="flex h-16 w-screen flex-col justify-center bg-back">
        <SimpleTopBarScaffolding className="pl-4 pr-2"
          componentName={<h1 className="text-orange text-3xl">PaqtTV+</h1>}>             
          <RiHomeGearLine className="text-gray-100 text-opacity-50 text-3xl"/>     
        </SimpleTopBarScaffolding>
      </div>
      <SimpleTopBarScaffolding height="h-8" className="px-3"
        componentName={<NavigateLabel/>}>
      
      </SimpleTopBarScaffolding>
    
     <img className="h-2/5 w-full mt-1.5 "
            src="picture/Alexis & Fido - La Esencia (Abdel La Esencia).jpg"/>
    <div className="flex flex-col w-full space-y-3 pt-3 px-5">
      <label className="text-gray-100 tracking-wider text-opacity-50 text-2xl">
          Alexis y Figo - La Esencia</label>
      <div className="flex items-center space-x-2">
        <label className="text-gray-100 tracking-wider py-0.5 px-1 text-opacity-50 text-sm
                            border-2 border-gray-100 border-opacity-50">MP3</label>
        <label className="text-gray-100 tracking-wider py-0.5 px-1 text-opacity-50 text-sm
                            border-2 border-gray-100 border-opacity-50">4000 MB</label>
      </div>
      <div className="flex justify-around items-center pt-5">
          <CircleContainerScaffolding color="back" className="bg-back" dimension="16">
            <AiOutlineUsb className="text-gray-100 text-opacity-50 text-3xl"/>
          </CircleContainerScaffolding>
          <CircleContainerScaffolding  dimension="16">
            <AiOutlineNotification className="text-gray-100 text-opacity-50 text-3xl"/>
          </CircleContainerScaffolding>
          <CircleContainerScaffolding color="back" className="bg-back" dimension="16">
              <AiOutlineHeart className="text-orange text-3xl"/>
          </CircleContainerScaffolding>
        </div>
      </div>
    </div>
  ) 
}


export default Home


