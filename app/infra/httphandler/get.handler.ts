import { GetHandlerProtocol } from '../../core/infra'
import axiosServer from './axios.route'

async function axiosGet<T>({ url, query } : GetHandlerProtocol.Params) : Promise<T> {
    const { data, status } = await axiosServer.get<T>(url, {params : query})
    return data   
}

export const axiosGetHandler : GetHandlerProtocol = axiosGet