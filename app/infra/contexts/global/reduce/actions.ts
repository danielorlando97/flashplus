export enum GlobalActions {
    ChangePath = "ChangePath",
}

type ChangePathAction = {
    type : GlobalActions.ChangePath
    path : string
}


export type ActionsGlobal = ChangePathAction
