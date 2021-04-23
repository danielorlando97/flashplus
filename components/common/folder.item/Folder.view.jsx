import LikedButtomComponent  from "../liked.button/Liked.logic"
import {CircleContainerScaffolding, SumaryContainerScaffolding} from "../../scaffolding"

function ElementName({children}) {
    return <label className="text-gray-100 h-5 tracking-wider text-opacity-50 text-base">
                {children}</label>
}
function SumaryData({children}) {
    return <label className="text-gray-200 text-opacity-25 tracking-wider italic text-xs">
                {children}</label>
}

export default function FolderView ({icon, folder, handler}) { 
    return (
        <div className="flex items-center w-screen pl-3 pr-4" >
            <CircleContainerScaffolding className="flex-grow-0" onClick={handler}>{icon}</CircleContainerScaffolding>
            <div className="flex flex-grow justify-between border-b border-back">                
                <SumaryContainerScaffolding className="px-4 w-full" onClick={handler}
                    elementName={<ElementName>{folder.name}</ElementName>}>
                    <SumaryData>{folder.size + " GB"}</SumaryData>
                    <SumaryData>{folder.len + " elementos"}</SumaryData>
                            
                </SumaryContainerScaffolding>
                <div className="flex flex-row-reverse items-center " onClick={null}>
                    <LikedButtomComponent fontSize="text-2xl z-20"/>
                </div>
            </div>
        </div>
    )
}