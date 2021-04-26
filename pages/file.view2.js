import { TiArrowBackOutline } from "react-icons/ti"
import { 
  AiOutlineUsb,
  AiOutlineHeart,
  AiOutlineNotification } from "react-icons/ai"

import {SimpleTopBarScaffolding, CircleContainerScaffolding} from "../components/scaffolding"
import NavigateLabel from "../components/common/navigate.label/Navigate.logic"
import DirectoryBody from "../components/page.home/directory.list.body"

const Icons = [
  <TiArrowBackOutline className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineUsb className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineNotification className="text-gray-100 text-opacity-50 text-3xl"/>,
  <AiOutlineHeart className="text-gray-100 text-opacity-50 text-3xl"/>,
]


function Home () {
  const list = [1,2,3,4]
  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <img className="h-80 w-full"
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
      
      <div className="absolute bottom-0 left-0 w-screen h-20 px-5 z-20">
        <div className="grid grid-cols-4 place-items-center w-full h-16 gap-2 border-2 border-back rounded-xl ">
          {list.map( (element,index) => 
            <div key={index} className="flex flex-col items-center space-y-2">
              <CircleContainerScaffolding className="bg-body"  >
                {Icons[element - 1]}
              </CircleContainerScaffolding>
            </div> )}
        </div>
      </div>

      </div>
    </div>
  ) 
}


export default Home