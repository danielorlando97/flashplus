import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../global_context/app.global.context"
import { rootTypes } from "../../../global_context/root.reduce/root.action.types"
import NavigateView from "./Navigate.view"

export default function Navigate(){
    const { rootState, rootDispatch } = useContext(AppContext)
    const [ root, setRoot ] = useState(rootState.page)
    const router = useRouter()

    useEffect( () => {
        setRoot(rootState.page)
    },[rootState.page])

    const handlerChangeRoot = () => {
        
        if (root === "") router.push('/home.setting')
        else {
            let temp = root.split("/")
            temp.pop()
            console.log(temp)
            rootDispatch({
                type : rootTypes.setPage,
                value : temp.join('/')
            })
        }
    }

    return <NavigateView text={root} onClick={handlerChangeRoot}/>
}
