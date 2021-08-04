import { directoryEntity, folderEntity, fileEntity } from '../../domain/directory/model'

export async function  mapper(dir : any) : Promise<directoryEntity> {
    const folders : Array<folderEntity> = []
    const files : Array<fileEntity> = []
    
    dir.folders.forEach( item => { folders.push( mapperFolder(item) )});
    dir.files.forEach( item => { files.push( mapperFile(item) )});

    return { name: dir.name, folders: folders, files: files }
}

export function  mapperFolder(item : any) : folderEntity {
    return {
        name : item.name, 
        len : item.len,
        size : item.size,
        path:  item.path
    } 
}

export function  mapperFile(item : any) : fileEntity {
    return {
        name : item.name, 
        size : item.size,
        path:  item.path
    } 
}