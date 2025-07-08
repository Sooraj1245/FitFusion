export default function CardHeader(props){
    return(
        <div className="flex items-center gap-2 mb-3">
            <span className="text-[20px]">{props.icon}</span>
            <h2 className="text-[14px] font-Mont font-semibold text-gray-700">{props.name}</h2>
        </div>
    )
}