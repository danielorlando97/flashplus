import React from "react"
import { IProps, numberSize } from './@types'

export namespace TopBar {

    export interface Props extends IProps {
        size : numberSize
    }

    export const BetweenSpace : React.FC<Props> = ({className, size, children}) => {
        return(
            <div className={`flex justify-between items-center w-full h-${size} ${className}`} >
                {children}
            </div>
        )
    }

    export function RightItems({children}){
        return <div className="flex space-x-2.5" >
            {children}
        </div>
    }

    export function LeftItems({children}){
        return <div className="flex space-x-2" >
            {children}
        </div>
    }

}


