export default function SumaryContainer({elementName, children, className="", onClick=()=> {}}){
    return (
        <div className={"w-auto flex flex-col space-y-1 " + className} onClick={onClick}>
            {elementName}
            <div className="flex items-center space-x-2">
                {children}
            </div>
        </div>
    )
}