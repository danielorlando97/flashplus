import { BiSort, BiSelectMultiple } from "react-icons/bi"
import { MdPlaylistAdd,
        MdNotificationsOff } from "react-icons/md"


import { AiOutlineSearch } from "react-icons/ai"
import { BsFillHouseFill } from "react-icons/bs"
import { BiGridAlt } from "react-icons/bi"

import {SimpleTopBarScaffolding, CircleContainerScaffolding} from "../components/scaffolding"
import NavigateLabel from "../components/common/navigate.label/Navigate.logic"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed z-20 bg-body" >
        <div className="flex h-16 w-screen flex-col justify-center bg-back">
          <SimpleTopBarScaffolding className="pl-2 pr-4"
            componentName={ 
              <div className="flex justify-center items-center space-x-3 ">
                <BsFillHouseFill className="text-gray-100 text-opacity-50 text-2xl"/>
                <h1 className="text-orange text-3xl">PaqtTV+</h1>
              </div>
            }>             
            <AiOutlineSearch className="text-gray-100 text-opacity-50 text-3xl"/>
          </SimpleTopBarScaffolding>
        </div>
        <SimpleTopBarScaffolding height="h-8" className="px-3 "
          componentName={<NavigateLabel/>}>
          <BiSelectMultiple  className=" stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
          <BiSort  className=" stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
          <BiGridAlt className="stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
        </SimpleTopBarScaffolding>
      </div>
      <div className="h-24 mb-2 w-screen"></div>
      <DirectoryBody/>
    </div>
  ) 
}


export default Home
