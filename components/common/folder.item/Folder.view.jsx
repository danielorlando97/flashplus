import  LikedButtomComponent  from "../liked.button/Liked.logic"
import {CircleContainerScaffolding, SumaryContainerScaffolding} from "../../scaffolding"

function ElementName({children}) {
    return <label className="text-gray-100 h-4 tracking-widest text-opacity-50 text-base">
                {children}</label>
}
function SumaryData({children}) {
    return <label className="text-gray-200 text-opacity-25 tracking-widest italic text-xs">
                {children}</label>
}

export default function FolderView ({icon, folder}) { 
    return (
        <div className="flex justify-between ">
            <div className="flex justify-start ml-3">
                <CircleContainerScaffolding dimension="h-10 w-10" >{icon}</CircleContainerScaffolding>
                
                <SumaryContainerScaffolding className="px-4 
                "
                    elementName={<ElementName>{folder.name}</ElementName>}>
                    <SumaryData>{folder.size + " GB"}</SumaryData>
                    <SumaryData>{folder.len + " elementos"}</SumaryData>
                            
                </SumaryContainerScaffolding>
            </div>
            <div className="flex flex-row-reverse items-center">
                <LikedButtomComponent fontSize="text-2xl"/>
            </div>
        </div>
    )
}