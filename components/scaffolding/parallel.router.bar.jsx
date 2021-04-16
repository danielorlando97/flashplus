export default function ParallelRouterBar({children, height = "h-10", className=""}){
    return (
        <div className={"flex justify-around w-screen " + height + className}>
            {children}        
        </div>
    )
}
