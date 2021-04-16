import { AiOutlineEllipsis } from "react-icons/ai"
import {OrangeBorder} from "../components/scaffolding/simple.top.bar" 
import RouterBar from "../components/page.home/router.bar"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed z-20">
        <div className="flex h-20 w-screen flex-col justify-center">
          <OrangeBorder height="h-20"
            componentName={ <h1 className="text-orange text-4xl">PaqtTV+</h1> }>
            <AiOutlineEllipsis className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-3xl"/>     
          </OrangeBorder>
        </div>
        <DirectoryBar></DirectoryBar>
      </div>
      <div className="h-24 mt-4 w-screen"></div>
      <DirectoryBody/>
    </div>
  ) 
}

export function DirectoryBar() {
  const text = "Series\\ Ingles "
  return (
      <div className="flex justify-between w-full h-8 border-b-2 border-back" >
          <div className="flex w-11/12 justify-start items-center ml-8" >
              <label className="text-gray-100 tracking-wider text-opacity-50 text-base">{text}</label>
          </div>

      </div>
  )
}


export default Home
