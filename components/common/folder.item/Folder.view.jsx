import  LikedButtomComponent  from "../liked.button/Liked.logic"
import {CircleContainerScaffolding, SumaryContainerScaffolding} from "../../scaffolding"

function ElementName({children}) {
    return <label className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">
                {children}</label>
}
function SumaryData({children}) {
    return <label className="text-gray-200 text-opacity-25 tracking-wider italic text-xs">
                {children}</label>
}

export default function FolderView ({icon, folder}) { 
    return (
        <div className="flex items-center w-screen px-3 ">
            <CircleContainerScaffolding className="flex-grow-0" >{icon}</CircleContainerScaffolding>
            <div className="flex flex-grow justify-between border-b border-back">                
                <SumaryContainerScaffolding className="px-4 "
                    elementName={<ElementName>{folder.name}</ElementName>}>
                    <SumaryData>{folder.size + " GB"}</SumaryData>
                    <SumaryData>{folder.len + " elementos"}</SumaryData>
                            
                </SumaryContainerScaffolding>
                <div className="flex flex-row-reverse items-center ">
                    <LikedButtomComponent fontSize="text-2xl"/>
                </div>
            </div>
        </div>
    )
}