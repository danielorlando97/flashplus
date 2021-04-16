import { RiHeartAddLine } from "react-icons/ri"

export default function NotActivedLikedView({fontSize, onActive}){
    return <RiHeartAddLine className={`text-gray-100 text-opacity-50 ${fontSize}`} onClick={onActive}/>
}