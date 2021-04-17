export default function ParallelRouterBar({children, height = "h-9", className=""}){
    return (
        <div className={"flex justify-around w-screen " + height + className}>
            {children}        
        </div>
    )
}
