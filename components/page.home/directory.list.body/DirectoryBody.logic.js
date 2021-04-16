import { useState, useEffect, useContext } from "react"
//import {AppContext} from "../../global.context/app.global.context"
//import { getByRoot } from "../../../fetch/directory/get"
import { useQuery } from "react-query"
import DirectoryBodyView from "./DirectoryBody.view"

export default function DirectoryBody({size}){
    //const { rootState } = useContext(AppContext)
    //const [ page, setPage ] = useState(rootState.page)
    //const { isLoading, isError, error, data: directory } = useQuery( "directory",getByRoot(page) )

    //if(isError) return <h1>Error</h1>
    //if(isLoading) return (
    //    <div className="flex justify-center items-center w-screen h-screen">
    //        <h1>Loading</h1>
    //    </div>
    //)
    const directory = [
        {
            name : `La que se avecina ${1}`,
            size : 17,
            len : 60
        },
        {
            name : `La que se avecina ${2}`,
            size : 17,
            len : 60
        },
        {
            name : `La que se avecina ${3}`,
            size : 17,
            len : 60
        }
    ]
    return <DirectoryBodyView directory={directory}/>
}