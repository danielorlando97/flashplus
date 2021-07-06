import { IUseCase } from '../../../core/domain/usecase'
import { IMapper } from '../../../core/domain/mapper'
import { Cache }  from '../../../core/infra'

import { IDirectoryRepo } from './interfaces/directory.repo' 
import { directoryModel, directoryEntity } from '../model'

export class GetDirectoryByPath implements IUseCase<string, directoryModel>{
    
    constructor(
        private readonly directoryRepo : IDirectoryRepo,
        private readonly directoryMapper : IMapper<directoryEntity, directoryModel>,
        private readonly copyListCache : Cache) {}
    
    async execute( path : string ): Promise<directoryModel> {
        if (path == '') return undefined
        
        const dirEntity = await this.directoryRepo.getByPath(path)
        const dirModel = this.directoryMapper.getModel(dirEntity)

        dirModel.inCopyList = await this.copyListCache.contains(path)
        
        return dirModel
    }
    
}