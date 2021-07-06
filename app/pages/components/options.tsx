import React from "react"
import { IProps, numberSize } from './@types'

export namespace Option {

    export const BackSpace : React.FC<IProps> = ({className, children, onClick}) => {
        return(
            <div className='absolute flex flex-col justify-end overscroll-none top-0 left-0 w-screen h-screen z-20'>
                <div className='flex-grow bg-body bg-opacity-50' onClick={onClick}/>
                <div className= 'bottom-0 left-0 w-screen bg-back p-3 z-30'>
                    {children}
                </div>
            </div>
        )
    }

    export const Item : React.FC<IProps> = ({className, children, onClick}) => {
        return(
            <div className='flex justify-center items-center border-t-2 border-body w-full h-12' onClick={onClick}> 
                {children}
            </div>
        )
    }



}




