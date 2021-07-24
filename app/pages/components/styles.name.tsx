import { FC } from 'react'
import { IProps, size, gradient, text_ } from './@types'

export namespace NameSystem {
    export interface Props extends IProps {
        size: size
    }

    export const Component : FC<Props> = ({className, size}) => {
        return <h1 className= {`${className} text-${size} `}>PaqtTV+</h1>
    }


    export const compose = (className: string, color: string=null ) => {
        color = color === null ? text_ + ' ' + gradient : color 
        return `${className} ${color} font-extrabold`
    }

    Component.defaultProps = {
        className : compose('')
    }
}