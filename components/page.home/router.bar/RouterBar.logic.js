import { useState, useContext, useEffect  } from 'react'
import RouterBarView from "./RouterBar.view"

export default function RouterBar () {
    const [ state, setState ] = useState([])

    useEffect( () => {
        setState(["diary", "weekly","data base"])
    },[])

    return <RouterBarView nameFolders={state}/>
}