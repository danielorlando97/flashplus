import { folderEntity } from './folder.entity'
import { folderModel } from './folder.model'
import { IMapper } from '../../../../core/domain/mapper' 

export class FoldersMapper implements IMapper<folderEntity, folderModel>{
    
    getModel(entity: folderEntity): folderModel {
        return {
            name : entity.name,
            len : entity.len,
            size : entity.size,
            path : entity.path
        }
    }
    
}