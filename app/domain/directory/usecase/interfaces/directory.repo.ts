import {directoryEntity} from '../../model'

export interface IDirectoryRepo{
    getByPath(path : string) : Promise<directoryEntity>
}