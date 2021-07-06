import { IMapper } from '../../../../core/domain/mapper' 
import { directoryEntity, directoryModel,
         folderEntity, folderModel, 
         fileEntity, fileModel} from '../index'

export class DirectoryMapper implements IMapper<directoryEntity, directoryModel>{
    
    constructor(private readonly folderMapper : IMapper<folderEntity,folderModel>,
                private readonly fileMapper : IMapper<fileEntity,fileModel> ) {}

    getModel(entity: directoryEntity): directoryModel {
        const folders : folderModel[] = []
        const files : fileModel[] = []

        for(let folder of entity.folders) 
            folders.push(this.folderMapper.getModel(folder))

        for(let file of entity.files) 
            files.push(this.fileMapper.getModel(file))

        return {
            folder : folders,
            file: files,
            inCopyList : false,
            inSubList : false,
        }
    }
    
}