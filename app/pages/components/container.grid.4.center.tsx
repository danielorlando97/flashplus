import React from "react"
import { IProps, color, numberSize, size } from './@types'

export namespace CentralGridContainer {
    export const Component : React.FC<IProps> = ({className, children}) => {
        return <div className={`grid grid-cols-4 gap-x-2 gap-y-4 place-items-center rounded-xl w-full ${className}`}> 
        		{children}
           </div>
    }

    export const compose = (className: string, color: color = 'back', border: numberSize = '4', pt: numberSize = '4', pb: numberSize = '4') => {
        return `${className} border-${color} border-${border} pt-${pt} pb-${pb}`
    }
    
    Component.defaultProps = {
        className : compose(""),
    }
}