import { createContext, useReducer, Dispatch, useContext } from "react"
import { globalState, defaultGlobalState } from './reduce/state'
import { ActionsGlobal, GlobalActions } from './reduce/actions'
import { globalReduce } from './reduce/dispatch' 

type GlobalContextProp = {
    state : globalState,  
    dispatch : Dispatch<ActionsGlobal>
}

const GlobalContext = createContext<GlobalContextProp>({ 
    state : defaultGlobalState, 
    dispatch : () => undefined 
})

export const GlobalContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(globalReduce, defaultGlobalState)
    
    return ( <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider> )
}

export function useGlobalPath() : string {
    const { state } = useContext(GlobalContext)

    return state.path
}

export function useMoveTo() : (newpath : string) => void {
    const { state, dispatch } = useContext(GlobalContext)

    return (newpath : string) => { 
        dispatch({
            type: GlobalActions.ChangePath,
            path: newpath
        })
    }
}

export function useBack() : () => void {
    const { state, dispatch } = useContext(GlobalContext)

    return () => { 
        const temp = state.path.split("/")
        if (temp.length > 1) temp.pop()
        dispatch({
            type: GlobalActions.ChangePath,
            path: temp.join("/")
        })
    }
}

