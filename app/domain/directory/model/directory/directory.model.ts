import { folderModel, fileModel } from '../index'

export type directoryModel = {
    folder : folderModel[],
    file : fileModel[],
    inCopyList : boolean,
    inSubList : boolean
}