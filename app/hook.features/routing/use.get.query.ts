import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'node:querystring'
import { useEffect, useState } from 'react'

export function useGetQuery() : [boolean, ParsedUrlQuery]{
    const router = useRouter()
    const [state, setState] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect( () => {
        if(router.isReady){
            setState(false)
            setQuery(router.query)
            return 
        }
        
        setState(true)

    }, [router.query])

    return [state, query]
}