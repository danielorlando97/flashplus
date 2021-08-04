export { useGetQuery } from './use.get.query'
export { useRoutingByPath } from './use.routing.by.path'

import {FC} from 'react'
import { useRouter } from 'next/router'
export const Link : FC<{href: string}> = ({href, children}) => {
    const router = useRouter()

    return <div onClick={()=>{router.push(href)}}> {children} </div>
}   

