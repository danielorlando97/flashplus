import { createContext, useReducer } from "react"
import { rootReduce, rootInit } from "./root.reduce"

export const AppContext = createContext()

export function AppContextProvider ( props ) {
    const [ rootState, rootDispatch ] = useReducer(rootReduce, rootInit)

    return (
        <AppContext.Provider value={{rootState,rootDispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}