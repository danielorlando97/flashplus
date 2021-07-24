import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'

export function useRoutingByPath(path : string, route:string) : [string, () => void, (name: string) => void] {
    const [state, setState] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        if( !(path === '') ) setState(path)
    }, [path])

    const backHandler = useCallback(() => {
        return () => {
            if (state === "/") router.push('/')
            else {
                const temp = state.split('/')
                temp.pop()
                const newPath = temp.length == 1? "/" : temp.join('/')
                setState(newPath)
                router.push(`${route}=${newPath}`)
            } 
        }
    }, [state])

    const nextHandler = useCallback(() => {
        return (name: string) => {
            const newPath = state + (state === '/' ? name : '/' + name)
            setState(newPath)
            router.push(`${route}=${newPath}`) 
        }
    }, [state])

    return [state, backHandler(), nextHandler()]
}