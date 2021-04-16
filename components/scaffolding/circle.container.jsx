export default function CircleContainer({children, className="", color="orange", dimension="h-12 w-12"}){
    return(
    <div className={`${className} flex justify-center items-center rounded-full border-2 ${dimension} border-${color}`}>
        {children}
    </div>
    )
}