import { useContext } from 'react'
import { DepContext } from '../dependencyContext'
import { useQuery } from 'react-query'
import { fetchData } from './fetch.data.type'
import { directoryModel } from '../../domain/directory/model'


export function useGetDirectory(path: string) : fetchData<directoryModel> {
    const { getDirectoryByPath } = useContext(DepContext)
    const { isLoading, isError, error, data: directory } = useQuery(['directory', path], () => {
        return getDirectoryByPath.execute(path)
    })

    return {isLoading: (isLoading || directory == undefined), isError, error, data: directory }
}