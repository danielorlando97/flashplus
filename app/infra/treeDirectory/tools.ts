import { directoryEntity, folderEntity, fileEntity } from '../../domain/directory/model'

export async function  mapper(dir : any) : Promise<directoryEntity> {
    const folders : Array<folderEntity> = []
    const files : Array<fileEntity> = []
    
    dir.folders
       .forEach( item => { 
           folders.push( {
               name : item.name, 
               len : item.len,
               size : item.size
           } ) 
        });

    dir.files
        .forEach( item => { 
            files.push( {
                name : item.name, 
                size : item.size
            } ) 
         });

    return { folders: folders, files: files }
}