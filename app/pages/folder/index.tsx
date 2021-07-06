import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router' 
import { FactoryComponent } from '../../core/pages/factory.component' 
import { folderModel } from '../../domain/directory/model'

// Components ////////////////////////////////////////////////////////////////
import { NameInBorder } from '../components/styles.name.in.border'
import { CentralGridContainer } from '../components/container.grid.4.center'
import { IconsStyle } from '../components/styles.icons' 
import { TopBar } from '../components/container.top.bar.between.space'
import { DataLabel } from '../components/style.label.data'
import { Folders } from './folders'
import { Files } from './files'

// Icons ////////////////////////////////////////////////////////////////
import { MdNotificationsActive, MdNotificationsOff } from "react-icons/md"
import { CgPlayListAdd, CgPlayListRemove } from "react-icons/cg"
import { BsFillHouseFill } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"
import { TiArrowBackOutline } from "react-icons/ti"
import { BiSort, BiSelectMultiple, BiGridAlt } from "react-icons/bi"

// Features ////////////////////////////////////////////////////////////////
import { useRoutingByPath, useGetQuery } from '../../hook.features/routing'
import { useGetDirectory } from '../../hook.features/fetchData'
import { useBooleanState } from '../../hook.features/use.boolean.state'

const ButtomHome : FC = () => {
    const router = useRouter()
    return <IconsStyle.Component Component={BsFillHouseFill} size='3xl' onClick={() => {router.push('/')}}/>
}

const ButtomCopyList : FC = () => {
	const [state, change] = useBooleanState(false)

	if (state) return <IconsStyle.Component className={IconsStyle.compose('pt-2')} Component={CgPlayListRemove} size='5xl' onClick={change}/>
	return <IconsStyle.Component className={IconsStyle.compose('pt-2')} Component={CgPlayListAdd} size='5xl' onClick={change}/>
}

const ButtomSubcribes : FC = () => {
	const [state, change] = useBooleanState(false)

	if (state) return <IconsStyle.Component Component={MdNotificationsOff} size='3xl' onClick={change}/>
	return <IconsStyle.Component Component={MdNotificationsActive} size='3xl' onClick={change}/>
}


export default function View() {
    const [loading, query] = useGetQuery()
    const [path, backHandler, nextHandler ] = useRoutingByPath(loading? '' : (query.path as string) )
    const { isLoading, isError, error, data } = useGetDirectory(path)

    if (loading || isLoading) return <div/>
    if (isError) {
      return <div/>
    }
    return (
        <div className='relative w-screen h-screen overflow-auto overscroll-none'>
          <div className="w-srceen px-4 pt-3">
            <NameInBorder.Component name="PaqtTV+" className={NameInBorder.compose('text-orange text-3xl')}>
                <CentralGridContainer.Component>
                    <ButtomHome/>
                    <ButtomCopyList/>
                    <ButtomSubcribes/>
                    <IconsStyle.Component Component={AiOutlineSearch} size='3xl'/>
                </CentralGridContainer.Component>
            </NameInBorder.Component>
          </div>
          
          <div className="sticky -top-0.5 w-full px-3 pt-2.5 z-20 bg-body ">
            <TopBar.BetweenSpace size='8' className="border-b-4 border-back pl-1.5 pr-1">
              <TopBar.LeftItems>
                <IconsStyle.Component Component={TiArrowBackOutline} size='lg' onClick={backHandler}/>
                <DataLabel.Component size='sm'>{path}</DataLabel.Component>
              </TopBar.LeftItems>
              <TopBar.RightItems> 
                <IconsStyle.Component Component={BiSelectMultiple} size='lg'/>
                <IconsStyle.Component Component={BiSort} size='lg'/>
                <IconsStyle.Component Component={BiGridAlt} size='lg'/>
              </TopBar.RightItems>
            </TopBar.BetweenSpace>
          </div>
          <div className='w-full px-3'>
            <Folders.Component className='mt-2 pb-1' folders={data.folder} next={nextHandler} color='back' />
            <Files.Component className='mt-2 pb-1' files={data.file} color='back' />
          </div>
        
        </div>
      )
} 