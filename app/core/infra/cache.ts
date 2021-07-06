export interface Cache {
    contains(key : string) : Promise<boolean>
    add(key: string) :  Promise<void>
    remove(key: string) : Promise<void>   
}


