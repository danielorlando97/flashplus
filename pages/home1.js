import { AiOutlineEllipsis } from "react-icons/ai"
import { BiLeftArrow } from "react-icons/bi"
import { BiChevronsDown } from "react-icons/bi"
import { BiCustomize } from "react-icons/bi"
import {SimpleTopBarScaffolding} from "../components/scaffolding"
import RouterBar from "../components/page.home/router.bar"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed z-20">
        <div className="flex h-20 w-screen flex-col justify-center border-b-8 border-double border-back">
          <div className="flex justify-between items-center w-full h-16 pl-2 pr-4">
            <BiLeftArrow className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-xl"/>
            <h1 className="text-orange text-3xl">PaqtTV+</h1> 
            <AiOutlineEllipsis className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-3xl"/>     
          </div>
        </div>
        <DirectoryBar></DirectoryBar>
      </div>
      <div className="h-28 w-screen"></div>
      <DirectoryBody/>
    </div>
  ) 
}

export function DirectoryBar() {
  const text = "Series\\ Ingles "
  return (
      <div className="flex justify-between items-center w-full h-8 border-b px-2 border-back" >
          <div className="flex w-11/12 justify-start items-center" >
              <BiChevronsDown className="mr-2 stroke-current stroke-0 text-gray-100 text-opacity-50 text-xl"/>
              <label className="text-gray-100 tracking-wider text-opacity-50 text-sm">{text}</label>
          </div>
          <BiCustomize className="mr-2 stroke-current stroke-0 text-gray-100 text-opacity-50 text-xl"/>
      </div>
  )
}



export default Home
