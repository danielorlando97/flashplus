import { useState, useEffect, useContext } from "react"
import {AppContext} from "../../../global_context/app.global.context"
import axios, { getByRoot } from "../../../api.complement/axios"
import { useQuery } from "react-query"
import DirectoryBodyView from "./DirectoryBody.view"

export default function DirectoryBody(){
    const { rootState } = useContext(AppContext)
    const { isLoading, isError, error, data: directory } = useQuery( ["directory", rootState.page], 
                                                                      getByRoot(rootState.page))

    if(isError) return <h1 className="text-orange">Error</h1>
    if(isLoading) return (
        <div className="flex justify-center items-center w-screen h-2/3">
            <h1 className="text-orange">Loading</h1>
        </div>
    )
 
    return <DirectoryBodyView directory={directory}/>
}