import { FC } from 'react'
import { IProps, color, opacity, size, textStyle, numberSize } from './@types'

export namespace SummaryContainer {
    export interface Props extends IProps {
        name: string,
        nameSize : size
    }

    export const Component : FC<Props> = ({name, nameSize, className, children, onClick}) => {
        return (
            <div className="flex flex-col justify-center items-start pb-1 space-y-1 w-full"  onClick={onClick}>
                <label className={`${className} text-${nameSize}`}> {name} </label>
                <div className="flex items-center space-x-2">
                    {children}
                </div>
            </div>
        )
    }

    export const compose = (className: string, color: color='gray-100', opacity: opacity='50', heigh: numberSize = '5') => {
        return `${className} text-${color} text-opacity-${opacity} h-${heigh}`
    }

    Component.defaultProps = {
        className : compose("tracking-wider")
    }
}


