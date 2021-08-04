import { DataLabel } from '../components/style.label.data'
import { IconsStyle } from '../components/styles.icons'
import { gradient } from '../components/@types'
import { BiSort, BiSelectMultiple, BiArrowBack } from "react-icons/bi"
import { Folders } from '../folder/folders'
import { Files } from '../folder/files'
import { MdNotificationsActive, MdDelete } from "react-icons/md"
import { useGetItemsInCopyList } from '../../hook.features/sessionCache/useCopyList' 
import { folderModel, fileModel } from '../../domain/directory/model' 
import { useRouter } from 'next/router'

function isFolder(item) : item is folderModel {
    if (item.len === undefined) return false

    return true
}


export default function Page () {
    const [totalSize, items, deleteHandler] = useGetItemsInCopyList( (a,b) => {return a.size < b.size ? 1 : -1} )
    const router = useRouter()

    return (
        <div className='relative h-screen w-screen p-3'>
            <div className='flex justify-between items-center w-full h-14 border-b-4 border-back'>
                <IconsStyle.Component Component={BiArrowBack} size='xl' onClick={()=> router.push('/')}/>
                <DataLabel.Component size='xl'>Lista de Copia</DataLabel.Component>
                <div className='flex space-x-2 items-center h-full'>
                    <IconsStyle.Component Component={BiSelectMultiple} size='xl'/>
                    <IconsStyle.Component Component={BiSort} size='xl'/>
                </div>
            </div>

            <div className='w-full'>
                {items.map(item => {
                    if (isFolder(item)) { 
                        return <Folders.Style className='mt-2 pb-1' folder={item} borderConfig={`border-b border-back`} key={item.path} >
                                    <IconsStyle.Component Component={MdDelete} size='2xl' className={IconsStyle.compose('ml-5 mr-2')} onClick={deleteHandler(item.path)} />
                                    <IconsStyle.Component Component={MdNotificationsActive} size='2xl' />
                                </Folders.Style>
                    }

                    return <Files.Style className='mt-2 pb-1' file={item} borderConfig={`border-b border-back`} key={item.path}>
                                <IconsStyle.Component Component={MdDelete} size='2xl' className={IconsStyle.compose('ml-5 mr-2')} onClick={deleteHandler(item.path)}/>
                                <IconsStyle.Component Component={MdNotificationsActive} size='2xl' />
                            </Files.Style>
                })}
                
            </div>

            <div className='absolute bottom-0 left-0 h-1/6 w-full p-3 bg-body'>
                <div className='flex flex-col justify-center items-center h-full w-full border-t-4 border-back'>
                    <div className='flex justify-around h-1/3 w-full'>
                        <DataLabel.Component size='base'>Total: 123 GB</DataLabel.Component>
                        <DataLabel.Component size='base'>Precio: 75 MN</DataLabel.Component>
                    </div>
                    <div className={`${gradient} flex justify-center items-center h-1/3 w-11/12`}>
                        <DataLabel.Component className={DataLabel.compose('tracking-widest font-extrabold', 'body','')} size='lg'>Pagar</DataLabel.Component>
                    </div>
                </div>
            </div>
        </div>
    )
}