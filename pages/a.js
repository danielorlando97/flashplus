import { BiSort, BiSelectMultiple } from "react-icons/bi"
import { MdPlaylistAdd,
        MdNotificationsOff } from "react-icons/md"


import { RiMenuAddFill } from "react-icons/ri"
import { BsFillHouseFill } from "react-icons/bs"
import { BiGridAlt } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"

import {SimpleTopBarScaffolding, CircleContainerScaffolding} from "../components/scaffolding"
import NavigateLabel from "../components/common/navigate.label/Navigate.logic"
import DirectoryBody from "../components/page.home/directory.list.body"

const Icons = [
  <BsFillHouseFill className="text-gray-100 text-opacity-50 text-2xl"/>,
  <MdPlaylistAdd className="text-gray-100 text-opacity-50 text-3xl"/>,
  <MdNotificationsOff className="text-gray-100 text-opacity-50 text-2xl"/>,
  <AiOutlineSearch className="text-gray-100 text-opacity-50 text-2xl"/>,
]


function Home () {
  const list = [1,2,3,4]
  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="w-full px-4 pt-8 mb-1">
        <div className="relative flex items-end w-full h-full "> 
          <h1 className="absolute -top-6 left-4 text-orange text-3xl z-30">PaqtTV+</h1>
          <div className="grid grid-cols-4 pt-1 place-items-center w-full h-16 gap-2 border-2 border-back rounded-xl ">
          {list.map( (element,index) => 
            <div key={index} className="flex flex-col items-center space-y-2">
                {Icons[element - 1]}
            </div> )}
          </div>
        </div>
      </div>
      
      <div className="sticky -top-0.5 bg-body py-1">
        <SimpleTopBarScaffolding height="h-8" className="px-3 border-b border-back"
          componentName={<NavigateLabel/>}>
          <BiSelectMultiple  className=" stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
          <BiSort  className=" stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
          <BiGridAlt className="stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
        </SimpleTopBarScaffolding>
      </div>

      <DirectoryBody/>
    </div>
  ) 
}


export default Home
