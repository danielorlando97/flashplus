export interface HttpClient {
    get(params : HttpClient.getParams) : Promise<any>
}


export namespace HttpClient { 
    export type getParams = {
        url : string,
        query? : {
            [index : string] : string | string[]
        }
    }
}