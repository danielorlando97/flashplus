import { Cache } from '../core/infra/cache'

export class CopyListInSession implements Cache{
    async add(key: string): Promise<void> {
        sessionStorage.setItem(key, 'true')
    }

    async remove(key: string): Promise<void> {
        sessionStorage.removeItem(key)
    }

    async contains(key: string): Promise<boolean> {
        const stored = sessionStorage.getItem(key)
        if (!stored) return false

        return true
    }
    
}
