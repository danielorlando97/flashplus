import { useRouter } from 'next/router'
import { useContext } from "react"
import { AppContext } from "../../../global_context/app.global.context"
import { rootTypes } from "../../../global_context/root.reduce/root.action.types"
import FolderView from "./Folder.view"

export default function Folder({children,element}){
    const { rootDispatch} = useContext(AppContext)
    const route = useRouter()

    const handlerChangeRoot = () => { 
        rootDispatch({
            type : rootTypes.setPage,
            value : element.path
        })
    }

    return <FolderView icon={children} folder={element} handler={handlerChangeRoot}/>
}






 