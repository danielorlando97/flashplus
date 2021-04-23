import axios from "axios"


const client = axios.create({baseURL:"api/"})
export default client

export function getByRoot(root){
    return async () => {
        const url = root.split("/").join(';')
        console.log(url)
        const { data } = await client.get(url)
        return data
    }
} 