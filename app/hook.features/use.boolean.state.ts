import { useState } from 'react'

export function useBooleanState(init: boolean) : [boolean, () => void]{
    const [state, setState] = useState(init)
    return [state, () => { setState(!state)}]
}