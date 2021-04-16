import { AiOutlineEllipsis } from "react-icons/ai"
import {OrangeBorder} from "../components/scaffolding/simple.top.bar" 
import RouterBar from "../components/page.home/router.bar"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="flex flex-col space-y-4  m-6 h-screen w-screen overflow-scroll">
      <h1 className="text-orange tracking-wider text-4xl">PaqtTV+</h1> 
      <h2 className="text-orange tracking-wider text-4xl">PaqtTV+</h2> 
      <h3 className="text-orange tracking-wider text-4xl">PaqtTV+</h3> 
      <h4 className="text-orange tracking-wider text-4xl">PaqtTV+</h4> 
      <h5 className="text-orange tracking-wider text-4xl">PaqtTV+</h5> 
      <h6 className="text-orange tracking-wider text-4xl">PaqtTV+</h6> 

    </div>
  ) 
}

export function DirectoryBar() {
  const text = "Series\\ Ingles "
  return (
      <div className="flex justify-between w-full h-8 
      rounded-b-xl border-b-4 border-opacity-50 border-orange" >
          <div className="flex w-11/12 justify-center items-center " >
              <label className="text-gray-100 tracking-wider text-opacity-50 text-base">{text}</label>
          </div>

      </div>
  )
}

export default Home
