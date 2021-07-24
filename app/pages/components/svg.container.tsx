import { FC } from 'react'
import { IProps, gradient, text_ } from './@types'

export namespace SvgContainer {
    export const Component : FC<IProps> = ({className, children, onClick}) => {
        return (
            <div id='svg-container' className={`relative w-full h-full ${className} `} onClick={onClick} >
                <svg className={`absolute -left-px w-full h-full  `} viewBox='0 0 100 100' preserveAspectRatio='none'>
                    {children}
                </svg>
            </div>
        )
    }

    export const Flow : FC = () => {
        return <path className='fill-current stroke-current text-body' 
            d=' M -1 0                 
                Q 0 20 60 35
                T 60 70 
                T -1 100 Z'>
        </path>
    }  

    
    export const compose = (className: string, bg: string = gradient) => {
        return `${className} ${gradient}`
    }


    Component.defaultProps = {
        className : `${gradient}`
    }
}