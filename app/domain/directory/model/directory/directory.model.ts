import { folderModel, fileModel } from '../index'

export type directoryModel = {
    name: string,
    folder : folderModel[],
    file : fileModel[],
    inCopyList : boolean,
    inSubList : boolean
}