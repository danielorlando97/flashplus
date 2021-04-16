import FolderComponent from "../../common/folder.item"
import { AiFillFolderOpen } from "react-icons/ai"


export default function DirectoryBodyView({directory}){
    return (directory.map( (element) => (
                <div className="mt-3.5 lg:mt-1.5  mr-2 select-none" key={element.name}>
                    <FolderComponent element={element}>
                        <AiFillFolderOpen className="stroke-current stroke-0 text-3xl text-gray-100 text-opacity-50"/>
                    </FolderComponent>
                </div>
            ))
    )
}
