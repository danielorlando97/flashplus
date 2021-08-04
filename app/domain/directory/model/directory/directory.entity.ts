import { folderEntity, fileEntity } from '../index'

export type directoryEntity = {
    name : string,
    folders : folderEntity[],
    files : fileEntity[]
}