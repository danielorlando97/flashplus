export default function Scaffolding({ componentName, children, height = "h-16" }) {
    return ( 
        <div className={"flex justify-between w-full " + height} >
            <div className="flex justify-start items-center pl-6 w-full h-full">
                {componentName}
            </div> 
            <div className="flex items-center pr-4" >
                {children}
            </div>
        </div> 
    )
}