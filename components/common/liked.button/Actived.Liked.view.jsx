import { AiFillHeart } from "react-icons/ai"

export default function ActivedLikedButtonView({fontSize, offActive}){
    return <AiFillHeart className={`text-orange ${fontSize}`} onClick={offActive}/>
}