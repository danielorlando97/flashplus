import { FC } from 'react'
import { IProps, color, size, gradient, numberSize } from './@types'

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

    export interface Props extends IProps{
        size : numberSize,
        bg?: color,
        border?: string,
        width : 1 | 2 | 3
    }

    export const ActificialBorder : FC<Props> = ({className, children, onClick, size, bg, border, width})=> {
        const rsize : number = +size - width 
        return <div className={`${className} ${border} h-${size} w-${size} flex justify-center items-center rounded-full`} onClick={onClick}>
            <div className={`${className} bg-${bg} h-${rsize} w-${rsize} flex justify-center items-center rounded-full`}>
                {children}
            </div>
        </div>
    }

    ActificialBorder.defaultProps = {
        border : gradient,
        bg : 'body'
    }


}

