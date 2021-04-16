import { AiOutlineEllipsis } from "react-icons/ai"
import {SimpleTopBarScaffolding} from "../component/scaffolding"

function Home () {

  return(
    <div className="relative h-screen w-screen overflow-scroll">
      <div className="fixed flex h-20 w-screen flex-col justify-center bg-back z-20">
        <SimpleTopBarScaffolding
            componentName={ <h1 className="text-3xl">PaqtTV+</h1> }>
            <AiOutlineEllipsis className="m-1 stroke-current stroke-0 text-gray-100 text-opacity-50 text-3xl"/>     
        </SimpleTopBarScaffolding>
      </div>
    </div>
  ) 
}



export default Home
