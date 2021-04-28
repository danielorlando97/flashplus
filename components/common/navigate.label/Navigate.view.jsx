import { TiArrowBackOutline } from "react-icons/ti"

export default function NavigateLabel({text="root",onClick=()=>{}}) {
    return (
            <div className="flex w-11/12 justify-start items-center" onClick={onClick} >
                <TiArrowBackOutline className="mr-1.5 stroke-current stroke-0 text-gray-100 text-opacity-50 text-lg"/>
                <label className="text-gray-100 tracking-wider text-opacity-50 text-xs">{text}</label>
            </div>
   
    )
}
  