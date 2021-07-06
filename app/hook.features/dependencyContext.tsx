import { createContext } from 'react'
import { useQuery, QueryFunction, QueryKey } from 'react-query'
import { TreeDirClient } from '../infra/treeDirectory'
import { CopyListInSession } from '../infra/SessionCache'

import { GetDirectoryByPath, DirectoryMapper, DirectoryRepository, FoldersMapper, FilesMapper } from '../domain/directory'
import { directoryModel } from '../domain/directory/model'


type depList = {
    getDirectoryByPath: GetDirectoryByPath
}

export const DepContext = createContext<depList | null>(null)

export const DependencyProvider : React.FC = ({children}) => {
    
    // infra dependencies
    const httpClient: TreeDirClient = new TreeDirClient()
    const copyListInSession : CopyListInSession = new CopyListInSession()
    
    // domain dependencies
    const foldersMap: FoldersMapper = new FoldersMapper()
    const filesMap: FilesMapper = new FilesMapper()

    const directoryRepo: DirectoryRepository = new DirectoryRepository('', httpClient)
    const directoryMap : DirectoryMapper = new DirectoryMapper(foldersMap, filesMap)

    const deplist : depList = {
        getDirectoryByPath: new GetDirectoryByPath(directoryRepo, directoryMap, copyListInSession)
    }

    return <DepContext.Provider value = {deplist}> {children}</DepContext.Provider>
}