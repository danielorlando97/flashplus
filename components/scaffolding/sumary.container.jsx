export default function SumaryContainer({elementName, children, className=""}){
    return (
        <div className={"w-auto flex flex-col " + className}>
            {elementName}
            <div className="space-x-2">
                {children}
            </div>
        </div>
    )
}