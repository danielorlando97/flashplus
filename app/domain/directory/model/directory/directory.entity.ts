import { folderEntity, fileEntity } from '../index'

export type directoryEntity = {
    folders : folderEntity[],
    files : fileEntity[]
}