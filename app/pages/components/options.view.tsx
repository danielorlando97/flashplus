import React, {FC} from "react"
import { folderModel, fileModel } from '../../domain/directory/model'
import { IconsStyle } from './styles.icons'
import { DataLabel } from './style.label.data'
import { AiOutlineMore } from 'react-icons/ai'
import { useBooleanState } from '../../hook.features/use.boolean.state' 
import { useCopyList } from '../../hook.features/sessionCache/useCopyList' 
import { IProps, size} from './@types'
import { BiFontSize } from "react-icons/bi"

export namespace OptionView {

    const BackSpace : React.FC<IProps> = ({className, children, onClick}) => {
        return(
            <div className='absolute flex flex-col justify-end overscroll-none bg-back bg-opacity-50 top-0 left-0 w-screen h-screen z-20 px-1'>
                <div className='flex-grow ' onClick={onClick}/>
                <div className= 'bottom-0 left-0 w-screen rounded-t-3xl bg-body px-3 pb-2 pt-1 z-30'>
                    {children}
                </div>
            </div>
        )
    }

    const Neutro : FC<IProps> = ({onClick}) => {
        return <IconsStyle.Component Component={AiOutlineMore} size='xl' onClick={onClick}/>

    }

    export const Item : React.FC<IProps & {size: size}> = ({className, children, onClick, size}) => {
        return(
            <div className='flex justify-center items-center border-b-2 border-back w-full p-3' onClick={onClick}> 
                <DataLabel.Component size={size} >{children}</DataLabel.Component>
            </div>
        )
    }
    
    export const Componet : FC<IProps & {nameFile : string, item: folderModel | fileModel}> = ({children, nameFile, item}) => {
        const [bool, change] = useBooleanState(false)
        const [label, action] = useCopyList(item.path, item)
    
        if (! bool) return <Neutro onClick={() => {change(!bool)}}/>
        return (
            <BackSpace onClick={() => {change(!bool)}}>
                <Item size='base' >{nameFile}</Item>
                <Item size='sm' onClick={action}>{label}</Item>
                <Item size='sm'>Subcribirse</Item>
            </BackSpace>
        )
    }



}




