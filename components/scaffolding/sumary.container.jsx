export default function SumaryContainer({elementName, children, className=""}){
    return (
        <div className={"w-auto flex flex-col justify-between " + className}>
            {elementName}
            <div className="space-x-4">
                {children}
            </div>
        </div>
    )
}