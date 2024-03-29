import { FC } from 'react' 
import { IProps, color } from '../components/@types'
import { fileModel } from '../../domain/directory/model'
import { AiOutlineMore } from "react-icons/ai"
import { CircleContainer } from '../components/container.circle'
import { DataLabel } from '../components/style.label.data'
import { OptionView } from '../components/options.view'
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

    export const Component : FC<Props> = ({files, className, color, children}) => {
        return <div className='w-full h-auto'>
            { files.map((file) => 
                <Style file={file} className={className} borderConfig={`border-b border-${color}`} key={file.name}>
                    <OptionView.Componet nameFile={'file:  ' + file.name + '.' + file.type} item={file}/>                    
                </Style>
            )}
        </div>
    }
    
    export const Style : FC<StyleProps> = ({file, onClick, className, borderConfig, children}) => {
        return (
            <div className={`flex items-center w-full select-none ${className}`} >
                <CircleContainer.ActificialBorder  className="flex-grow-0" size='12' width={1} onClick={onClick}>
                    <DataLabel.Component size='base' className={DataLabel.compose('tracking-wider')}> {file.type} </DataLabel.Component>
                </CircleContainer.ActificialBorder>
                <div className={`flex flex-grow justify-between pl-4 ${borderConfig}`}>                
                    <SummaryContainer.Component  name={file.name} nameSize='base' className={SummaryContainer.compose('tracking-wider')} onClick={onClick}>
                        <DataLabel.Component size='xs' className={DataLabel.italicCompose('tracking-wider')}> {file.size} </DataLabel.Component>
                    </SummaryContainer.Component>

                    <div className="flex flex-row-reverse items-center" >
                        {children}

                    </div>
                </div>
            </div>
        )
    }
}






