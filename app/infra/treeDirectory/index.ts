import { HttpClient } from '../../core/infra'
import { jsonData } from './dirTree'
import { directoryEntity, folderEntity } from '../../domain/directory/model'
import { mapper, mapperFile, mapperFolder } from './tools'

export class TreeDirClient implements HttpClient {
    
    private readonly json = jsonData

    async get({query}: HttpClient.getParams): Promise<directoryEntity> {
        if (query && query.path) return await this.find(query.path as string)
        if (query && query.list) return await this.select(query.list as string[])

        return null
    }

    private async select(list: string[]) : Promise<directoryEntity> {
        let foldersQueu = [this.json]
        const result = { name: '', folders: [], files: [] }

        while(foldersQueu.length != 0 && list.length != 0) {
            let folder = foldersQueu.pop()
            
            for (let f of folder.folders){
                let index = list.indexOf(f.path)
                if (index === null) foldersQueu.push(f)
                else {
                    result.folders.push( mapperFolder(f) )
                    delete list[index]
                }
            }

            for (let f of folder.files){
                let index = list.indexOf(f.path)
                if (!(index === null)) {
                    result.files.push( mapperFile(f) )
                    delete list[index]
                }
            }
        }

        return result
    }

    private async find(path : string): Promise<directoryEntity> {
        let folder = this.json
        const listPath = path.split('/')
        
        let index = 1
        while(folder.path != path){
            let breakk = true 
            for(let item of folder.folders)
                if (item.name == listPath[index]) { 
                    folder = item
                    breakk = false; break;
                }
            if (breakk) return null
            index ++
        }

        return await mapper(folder)
    }
}