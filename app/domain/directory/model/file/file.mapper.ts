import { fileEntity } from './file.entity'
import { fileModel } from './file.model'
import { IMapper } from '../../../../core/domain/mapper' 

export class FilesMapper implements IMapper<fileEntity, fileModel>{
    
    getModel(entity: fileEntity): fileModel {
        const namelist = entity.name.split('.')
        let type : string = 'und'
        if (namelist.length > 1) type = namelist.pop()
        
        return {
            name : namelist.join('.'),
            type : type, 
            size : entity.size
        }
    }
    
}