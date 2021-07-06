import { ActionsGlobal, GlobalActions } from './actions'
import { globalState } from './state'

export function globalReduce ( state : globalState, action : ActionsGlobal ) : globalState {
    switch( action.type ){
        case GlobalActions.ChangePath :  return { ...state, path : action.path }
        
        default: return state
    }
}