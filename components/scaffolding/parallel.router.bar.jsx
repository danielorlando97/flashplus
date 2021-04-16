export default function ParallelRouterBar({children, height = "h-10"}){
    return (
        <div className={"flex justify-around w-screen " + height}>
            {children}        
        </div>
    )
}
