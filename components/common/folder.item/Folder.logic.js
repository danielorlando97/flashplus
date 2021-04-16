import FolderView from "./Folder.view"

export default function Folder({children,element}){
    return <FolderView icon={children} folder={element}/>
}