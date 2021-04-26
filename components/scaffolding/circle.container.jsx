export default function CircleContainer({children, className="", color="orange", dimension="12",onClick=()=>{}}){
    return(
    <div className={`${className} flex justify-center items-center rounded-full border-2 
                    h-${dimension} w-${dimension} border-${color}`}
        onClick={onClick}>
        {children}
    </div>
    )
}