import { rootTypes } from "./root.action.types"

export function reduce( state, action ){
    
    switch( action.type ){
        case rootTypes.setPage : {
            return {
                page : action.value
            }
        }
        default: return state
    }
}