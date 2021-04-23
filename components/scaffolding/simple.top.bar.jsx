export default function Scaffolding({ componentName, children, height = "h-16", className = "" }) {
    return ( 
        <div className={className + " flex justify-between items-center w-full " + height} >
            {componentName}
            <div className="flex space-x-1.5" >
                {children}
            </div>
        </div> 
    )
}


export function OrangeBorder ({ componentName, children, height = "h-16" })
{
    return <Scaffolding componentName={componentName} height={height + " border-b-4 border-double border-orange"}>
        {children}
    </Scaffolding>
}