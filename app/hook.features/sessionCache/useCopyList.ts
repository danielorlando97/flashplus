import { useBooleanState } from '../use.boolean.state'
import { useEffect, useState } from 'react'
import { fileModel, folderEntity, folderModel } from '../../domain/directory/model'

export function useCopyList(name, item) : [ string, ()=> void ] { 
    const [bool, change] = useBooleanState(true)

    useEffect(()=> {
        change(null === sessionStorage.getItem(`copy-${name}`))
    }, [name])

    const Add = () => { 
        sessionStorage.setItem(`copy-${name}`, JSON.stringify(item)) 
        change(!bool)
    }
    const Delete = () => { 
        sessionStorage.removeItem(`copy-${name}`) 
        change(!bool)
    }

    if(bool) return ["Anadir a la Copia", Add]
    return ["Remover de la Copia", Delete]
}

type Item = fileModel | folderModel
export function useGetItemsInCopyList( func: (a:Item, b:Item) => number ) : [number, Item [] , (path: string) => () => void ] {
    const [ sizeSum, setSizeSum ] = useState(0)
    const [ list, setList ] = useState([])
    const [ change, setChange ] = useState(true)
    const k = 'copy-'

    useEffect( () => {
        let result = []
        let size = 0

        for (let index = 0; index < sessionStorage.length; index++) {
            const key : string = sessionStorage.key(index)
            if (key.substring(0, k.length).includes(k)) {
                const element = JSON.parse( sessionStorage.getItem(key) )
                size += 0
                result.push(element)
            }
        }

        setSizeSum(size)
        setList(result)
        setChange(true)
    }, [change])

    const deleteHandler = path => {
        return () => {
            sessionStorage.removeItem(`${k}${path}`)
            setChange(false)
        }
    }



    
    return [sizeSum, list.sort(func), deleteHandler ]
}
