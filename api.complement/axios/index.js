import axios from "axios"


const client = axios.create({baseURL:"api/"})
export default client

export function getByRoot(root){
    return async () => {
        const { data } = await client.get(root)
        return data
    }
} 