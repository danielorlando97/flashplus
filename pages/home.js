import { FaEllipsisV } from "react-icons/fa"
import { BsArrow90DegLeft } from "react-icons/bs"
import { RiMenuAddFill } from "react-icons/ri"
import { RiHomeGearLine } from "react-icons/ri"
import { BiGridAlt } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"

import {SimpleTopBarScaffolding} from "../components/scaffolding"
import NavigateLabel from "../components/common/navigate.label/Navigate.logic"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed z-20 bg-body" >
        <div className="flex h-16 w-screen flex-col justify-center bg-back">
          <SimpleTopBarScaffolding className="pl-4 pr-2"
            componentName={<h1 className="text-orange text-3xl">PaqtTV+</h1>}>             
            <AiOutlineSearch className="text-gray-100 text-opacity-50 text-3xl"/>
            <RiHomeGearLine className="text-gray-100 text-opacity-50 text-3xl"/>     
          </SimpleTopBarScaffolding>
        </div>
        <SimpleTopBarScaffolding height="h-8" className="px-3"
          componentName={<NavigateLabel/>}>
          <BiGridAlt className="mr-2 stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
          <FaEllipsisV className="stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
        </SimpleTopBarScaffolding>
      </div>
      <div className="h-24 mb-2 w-screen"></div>
      <DirectoryBody/>
    </div>
  ) 
}


export default Home
