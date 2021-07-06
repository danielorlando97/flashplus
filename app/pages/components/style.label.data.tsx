import { FC } from 'react'
import { IProps, color, opacity, size, textStyle } from './@types'

export namespace DataLabel {
    export interface Props extends IProps {
        size: size
    }

    export const Component : FC<Props> = ({className, size, children}) => {
        return <label className={`${className} text-${size}` }>{children}</label>
    }
    
    export const italicCompose = (className: string, color: color='gray-200', opacity: opacity='25') => {
        return `${className} text-${color} text-opacity-${opacity} italic`
    }

    export const compose = (className: string, color: color='gray-100', opacity: opacity='50') => {
        return `${className} text-${color} text-opacity-${opacity}`
    }

    Component.defaultProps = {
        className : compose("tracking-wider")
    }
}