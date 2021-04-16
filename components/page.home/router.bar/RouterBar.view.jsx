import RouterBox from "../router.box"
import {ParallelRouterBarScaffolding} from "../../scaffolding"

export default function RouterBarView({nameFolders}){
    return (
        <ParallelRouterBarScaffolding>
            {nameFolders.map((name,index) => <RouterBox name={name} index={index} key={name}/>)}        
        </ParallelRouterBarScaffolding>
    )
}

