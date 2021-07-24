import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default () =>  {
    return ( 
    <div className='flex'>
        <div className='h-screen w-1/4 bg-gradient-to-br from-orange to-red-600  '></div>
        <div className='text-5xl font-extrabold'>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-br from-orange to-red-600 '> 
                Hello World!
            </h2>
        </div>
        <div className='flex justify-center items-center rounded-full h-12 w-12 bg-gradient-to-br from-oranged via-orange to-red-600 bg-opacity-50 '>
            <div className='flex justify-center items-center rounded-full h-11 w-11 bg-body'> 

            </div>
        </div>

    </div>
    )
}
