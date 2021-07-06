export interface GetHandlerProtocol{
    <T>(params : GetHandlerProtocol.Params ) : Promise<T>
}

export namespace GetHandlerProtocol{
    export type Params = {
        url : string,
        query? : {
            [index : string] : string | number
        }
    }
}