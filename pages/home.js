import { AiOutlineEllipsis } from "react-icons/ai"
import {SimpleTopBarScaffolding} from "../components/scaffolding"
import RouterBar from "../components/page.home/router.bar"
import DirectoryBody from "../components/page.home/directory.list.body"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed bg-back z-20">
        <div className="flex h-20 w-screen flex-col justify-center">
          <SimpleTopBarScaffolding
            componentName={ <h1 className="text-orange text-3xl">PaqtTV+</h1> }>
            <AiOutlineEllipsis className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-3xl"/>     
          </SimpleTopBarScaffolding>
        </div>
        <RouterBar></RouterBar>
      </div>
      <div className="h-28 mt-2 w-screen"></div>
      <DirectoryBody/>
    </div>
  ) 
}



export default Home
