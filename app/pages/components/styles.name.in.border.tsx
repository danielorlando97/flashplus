import React from "react"
import { IProps, numberSize } from './@types'

export namespace NameInBorder {

    export interface Props extends IProps {
        name : string,
        margin? : numberSize,
    }

    export const Component : React.FC<Props> = ({name, className, margin, children}) => {
        return (
            <div className={"relative flex items-end w-full h-auto mt-" + margin}> 
                <h1 className={"absolute " + className}> {name} </h1>
                {children}
            </div>
          )
    }

    export const compose = (className: string, x: string = 'left-4', y: string =  '-top-5') => {
        return `${className} ${x} ${y}`
    }

    Component.defaultProps = {
        className : compose(""),
        margin : '4'
    }
}







