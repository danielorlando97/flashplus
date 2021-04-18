import { AiOutlineEllipsis } from "react-icons/ai"
import { BiLeftArrow } from "react-icons/bi"
import { BsArrow90DegLeft } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import {SimpleTopBarScaffolding} from "../components/scaffolding"
import RouterBar from "../components/page.home/router.bar"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed z-20">
        <div className="flex h-18 w-screen flex-col justify-center bg-back">
          <div className="flex justify-between items-center w-full h-16 pl-2 pr-4">
            <AiFillHome className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-3xl"/>
            <h1 className="text-orange text-3xl">PaqtTV+</h1> 
            <AiOutlineEllipsis className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-3xl"/>     
          </div>
        </div>
        <DirectoryBar></DirectoryBar>
      </div>
      <div className="h-24 mb-2 w-screen"></div>
      <DirectoryBody/>
    </div>
  ) 
}

export function DirectoryBar() {
  const text = "Series\\ Ingles "
  return (
      <div className="flex justify-between items-center w-full h-8 px-3 " >
          <div className="flex w-11/12 justify-start items-center" >
              <BsArrow90DegLeft className="mr-3 stroke-current stroke-0 text-gray-100 text-opacity-50 text-xl"/>
              <label className="text-gray-100 tracking-wider text-opacity-50 text-sm">{text}</label>
          </div>
      </div>
  )
}



export default Home
