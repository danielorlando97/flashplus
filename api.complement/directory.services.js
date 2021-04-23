import {jsonData} from './dirTree'


export function mapperfolder(item){
    return {
        name : item.name,
        path : item.path,
        size : item.size,
        len : item.len
    }
}

export function mapperfile(item){
    return {
        name : item.name,
        path : item.path,
        size : item.size,
    }
}

export function mapperDirectory(folder = jsonData){
    const folders = []
    folder.folders.forEach(item => { folders.push(mapperfolder(item)) } );

    const items = []
    folder.files.forEach(item => { items.push(mapperfile(item)) } );

    return { folders: folders, files: items }
}

export function find(path){
    const list = path.split(";")
    const obj = list.join('/')
    let index = 1
    let folder = jsonData
    while(true){
        if (folder.path == obj)
            return mapperDirectory(folder)

        let breack = true
        folder.folders.forEach(item => {
            if (item.name == list[index]){
                folder = item
                breack = false
            }
        })
                
        if (breack) return null
        index ++
    }
}