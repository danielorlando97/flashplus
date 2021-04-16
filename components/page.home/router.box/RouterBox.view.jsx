export default function RouterBoxView({name, active, action}){
    let style = active ? "text-orange border-b-4 border-orange" 
                       : "text-gray-100 text-opacity-50"
    return( 
        <label className={"text-lg tracking-wider select-none font-medium " + style}
               onClick={action}>
            {name}
        </label>
    
    )
}
