import { IUseCase } from '../../../core/domain/usecase'
import { IMapper } from '../../../core/domain/mapper'
import { Cache }  from '../../../core/infra'

import { IDirectoryRepo } from './interfaces/directory.repo' 
import { directoryModel, directoryEntity } from '../model'

export class GetItemsByList implements IUseCase<string[], directoryModel>{
    
    constructor(
        private readonly directoryRepo : IDirectoryRepo,
        private readonly directoryMapper : IMapper<directoryEntity, directoryModel>,) {}
    
    async execute( list : string[] ): Promise<directoryModel> {
        if (list.length === 0) return undefined
        
        const dirEntity = await this.directoryRepo.getByList(list)
        const dirModel = this.directoryMapper.getModel(dirEntity)

        
        return dirModel
    }
    
}