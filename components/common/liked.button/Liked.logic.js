import ActivedButtomView from "./Actived.Liked.view"
import NotActivedButtomView from "./Not.Actived.Liked.view"
import { useState } from "react"

export default function LikedButtom({fontSize}){
    const [ isActive, Active ] = useState(false)

    if (isActive) return <ActivedButtomView fontSize={fontSize} offActive={()=>{Active(false)}}/>
    return <NotActivedButtomView fontSize={fontSize} onActive={()=>{Active(true)}}/>
 
} 


