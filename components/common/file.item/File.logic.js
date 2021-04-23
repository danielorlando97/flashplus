import { useRouter } from 'next/router'
import { useContext } from "react"
import { AppContext } from "../../../global_context/app.global.context"
import { rootTypes } from "../../../global_context/root.reduce/root.action.types"
import FileView from "./File.view"

export default function File({children,element}){
    const { rootDispatch} = useContext(AppContext)
    const route = useRouter()

    const handlerChangeRoot = () => {}

    return <FileView icon={children} file={element} handler={handlerChangeRoot}/>
}






 