import { CircleContainerScaffolding, SumaryContainerScaffolding } from '../scaffolding'

export default function ItemToList({children, handler, className=""}) { 
    return (
        <div className={"flex items-center w-full " + className} >
            <CircleContainerScaffolding className="flex-grow-0" onClick={handler}>{children[0]}</CircleContainerScaffolding>
            <div className="flex flex-grow justify-between items-center border-b border-back">                
                <SumaryContainerScaffolding className="px-4 w-full" onClick={handler}
                    elementName={children[1]}>
                </SumaryContainerScaffolding>
                <div className="flex flex-row-reverse items-center ">
                    {children[2]}
                </div>
            </div>
        </div>
    )
}