import { FC } from 'react'
import { IProps, color, opacity, size, textStyle, numberSize } from './@types'

export namespace CircleContainer {
    export const Component : FC<IProps> = ({className, children, onClick}) => {
        return <div className={`${className} flex justify-center items-center rounded-full`} onClick={onClick}>
                    {children}
                </div>
    }

    export const compose = (className: string, color: color='orange', size: numberSize = '12', withh: numberSize = '2') => {
        return `${className} h-${size} w-${size} border-${color} border-${withh}`
    }

    Component.defaultProps = {
        className : compose("")
    }
}

