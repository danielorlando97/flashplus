import { useState } from 'react'

export function useBooleanState(init: boolean) : [boolean, (value: boolean) => void]{
    const [state, setState] = useState(init)

    return [state, setState ]
}