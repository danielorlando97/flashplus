import React from "react"
import { IProps, size, color, opacity } from './@types'
import { IconType } from 'react-icons'

export namespace IconsStyle {

    export interface Props extends IProps{
        size : size
        Component : IconType 
        onClick? : () => void
    }

    export const Component : React.FC<Props> = ({className, size, Component, onClick}) => {

        return <Component className={`${className} text-${size}`} onClick={onClick}/>
    }

    export const compose = (className: string, color: color = 'gray-100', opacity: opacity = '50') => {
        return ` ${className} text-${color} text-opacity-${opacity}`
    }
        
    Component.defaultProps = {
        className : compose(""),
    }
    

}