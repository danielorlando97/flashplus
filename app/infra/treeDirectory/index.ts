import { HttpClient } from '../../core/infra'
import { jsonData } from './dirTree'
import { directoryEntity, folderEntity } from '../../domain/directory/model'
import { mapper } from './tools'

export class TreeDirClient implements HttpClient {
    
    private readonly json = jsonData

    async get({query}: HttpClient.getParams): Promise<directoryEntity> {
        if (query && query.path) return await this.find(query.path as string)

        return null
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