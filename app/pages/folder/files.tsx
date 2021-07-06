import { FC } from 'react' 
import { IProps, color } from '../components/@types'
import { fileModel } from '../../domain/directory/model'
import { AiOutlineMore } from "react-icons/ai"
import { CircleContainer } from '../components/container.circle'
import { DataLabel } from '../components/style.label.data'
import { IconsStyle } from '../components/styles.icons'
import { SummaryContainer } from '../components/container.summary.data'

export namespace Files {
    export interface Props extends IProps {
        files: fileModel[], 
        color? : color,
    }

    interface StyleProps extends IProps {
        file :  fileModel,
        borderConfig? : string
    }

    export const Component : FC<Props> = ({files, className, color}) => {
        return <div className='w-full h-auto'>
            { files.map((folder) => 
                <Style file={folder} className={className} borderConfig={`border-b border-${color}`} key={folder.name} />
            )}
        </div>
    }
    
    export const Style : FC<StyleProps> = ({file, onClick, className, borderConfig}) => {
        return (
            <div className={`flex items-center w-full select-none ${className}`} >
                <CircleContainer.Component className={CircleContainer.compose("flex-grow-0")}  onClick={onClick}>
                    <DataLabel.Component size='base' className={DataLabel.compose('tracking-wider')}> {file.type} </DataLabel.Component>
                </CircleContainer.Component>
                <div className={`flex flex-grow justify-between pl-4 ${borderConfig}`}>                
                    <SummaryContainer.Component  name={file.name} nameSize='base' className={SummaryContainer.compose('tracking-wider')} onClick={onClick}>
                        <DataLabel.Component size='xs' className={DataLabel.italicCompose('tracking-wider')}> {file.size} </DataLabel.Component>
                    </SummaryContainer.Component>

                    <div className="flex flex-row-reverse items-center" >
                        <IconsStyle.Component Component={AiOutlineMore} size='xl'/>
                    </div>
                </div>
            </div>
        )
    }
}






