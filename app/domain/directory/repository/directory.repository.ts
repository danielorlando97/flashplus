import { HttpClient } from '../../../core/infra'
import { directoryEntity } from '../model'
import { IDirectoryRepo } from '../usecase/interfaces/directory.repo'

export class DirectoryRepository implements IDirectoryRepo {

    constructor( private readonly url : string,
        private readonly httpClient : HttpClient) {}
    
    async getByList(list: string[]): Promise<directoryEntity> {
        const req : HttpClient.getParams = {
            url : this.url,
            query : { list : list }
        }

        return this.httpClient.get(req) 
    }

    async getByPath(path: string): Promise<directoryEntity> {
        const req : HttpClient.getParams = {
            url : this.url,
            query : { path : path }
        }

        return this.httpClient.get(req) 
    }
    
}