import { FC } from 'react' 
import { IProps, color } from '../components/@types'
import { folderModel } from '../../domain/directory/model'
import { AiOutlineMore } from "react-icons/ai"
import { AiFillFolderOpen } from "react-icons/ai"
import { CircleContainer } from '../components/container.circle'
import { DataLabel } from '../components/style.label.data'
import { IconsStyle } from '../components/styles.icons'
import { SummaryContainer } from '../components/container.summary.data'
import { Option } from '../components/options'
import { useBooleanState } from '../../hook.features/use.boolean.state'

export namespace Folders {
    export interface Props extends IProps {
        folders: folderModel[], 
        color? : color,
        next?: (str: string) => void
    }

    interface StyleProps extends IProps {
        folder :  folderModel,
        borderConfig? : string
    }

    export const Component : FC<Props> = ({folders, next, className, color, children}) => {
        return <div className='w-full h-auto'>
            { folders.map((folder) => 
                <Style folder={folder} className={className} borderConfig={`border-b border-${color}`} onClick={ ()=>{ next(folder.name) }} key={folder.name}>
                    {children}
                </Style>
            )}
        </div>
    }

    export const ButtomOpcion : FC = () => {
        const [state, change] = useBooleanState(false)
    
        if (! state) return <IconsStyle.Component Component={AiOutlineMore} size='xl' onClick={change}/>
        return (
            <Option.BackSpace onClick={change}>
                <Option.Item onClick={()=> {}}>
                    <DataLabel.Component size='sm'> Añadir a la copia </DataLabel.Component>
                </Option.Item>
                <Option.Item onClick={()=> {}}>
                    <DataLabel.Component size='sm'> Subcribirse </DataLabel.Component>
                </Option.Item>
            </Option.BackSpace>
        )
    }
    
    export const Style : FC<StyleProps> = ({folder, onClick, className, borderConfig, children}) => {
        return (
            <div className={`flex items-center w-full select-none ${className}`} >
                <CircleContainer.ActificialBorder  className="flex-grow-0" size='12' width={1} onClick={onClick}>
                    <IconsStyle.Component Component={AiFillFolderOpen} size='3xl'/>
                </CircleContainer.ActificialBorder>
                <div className={`flex flex-grow justify-between pl-4 ${borderConfig}`}>                
                    <SummaryContainer.Component  name={folder.name} nameSize='base' className={SummaryContainer.compose('tracking-wider')} onClick={onClick}>
                        <DataLabel.Component size='xs' className={DataLabel.italicCompose('tracking-wider')}> {folder.size} </DataLabel.Component>
                        <DataLabel.Component size='xs' className={DataLabel.italicCompose('tracking-wider')}> {folder.len + " elementos"}  </DataLabel.Component>
                    </SummaryContainer.Component>

                    <div className="flex flex-row-reverse items-center" >
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}






