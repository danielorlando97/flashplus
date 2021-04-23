import FolderComponent from "../../common/folder.item"
import FileComponent from '../../common/file.item'
import { AiFillFolderOpen, AiOutlineFileText } from "react-icons/ai"


export default function DirectoryBodyView({folders, files}){
    const folder_list = folders.map( (element) => (
        <div className="mt-2 pb-1.5 lg:mt-1.5  mr-2 select-none " key={element.name}>
            <FolderComponent element={element}>
                <AiFillFolderOpen className="stroke-current stroke-0 text-3xl text-gray-100 text-opacity-50"/>
            </FolderComponent>
        </div>
    ))
    const file_list = files.map((element) => (
        <div className="mt-2 pb-1.5 lg:mt-1.5  mr-2 select-none " key={element.name}>
            <FileComponent element={element}>
                <AiOutlineFileText className="stroke-current stroke-0 text-3xl text-gray-100 text-opacity-50"/>
            </FileComponent>
         </div>
    ))

    return (
        <div>
            <div>
                {folder_list}
            </div>
            <div>
                {file_list}
            </div>
        </div>
    )
}
