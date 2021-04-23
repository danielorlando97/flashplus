import {jsonData} from './dirTree'
    
export function mapper(folder = jsonData){
    const result = []
    folder.items.forEach(item => {
        result.push({
                name : item.name,
                path : item.path,
                size : item.size,
                len : item.len
        })
    });
    return result
}

export function find(path){
    const list = path.split("/")
    let index = 1
    let folder = jsonData
    while(true){
        if (folder.path == path)
            return mapper(folder)
            
        let breack = true
        folder.items.forEach(item => {
            if (item.name == list[index]){
                folder = item
                breack = false
            }
        })
                
        if (breack) return null
        index ++
    }
}