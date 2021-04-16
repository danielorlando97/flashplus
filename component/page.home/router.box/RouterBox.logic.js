import { useState, useEffect, useContext } from "react"
//import { AppContext } from "../../global.context/app.global.context"
import RouterBoxView from "./RouterBox.view"
//import { rootTypes } from '../../global.context/root.reduce/root.action.types'



export default function RouterBox({ name, index }){
    //const { rootState, rootDispatch} = useContext(AppContext)  
    //const [ state, setState ] = useState(rootState.page === index)

    //useEffect( () => {
    //    setState(rootState.page === index)
    //},[rootState.page])

    //const handlerActiveBox = () => { 
    //    rootDispatch({
    //        type : rootTypes.setPage,
    //        value : index
    //})
    //}

    return <RouterBoxView name={name} 
                          active={false}
                          action={() => {}}/>
}

